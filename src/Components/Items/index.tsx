/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import Item from '../Item';
import { ResponseParams, ItemType } from '../../utils/types';

const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search'));
  const [items, setItems] = useState<ItemType[]>([]);
  const [itemsResponse, itemsCall, itemsError] = useRequest('get');

  useEffect(() => {
    /* @ts-ignore */
    itemsCall(null, `http://localhost:3001/api/items?q=${search}`);
  }, [search]);

  useEffect(() => {
    if (itemsResponse) {
      try {
        const { data, status } = itemsResponse as ResponseParams;
        if (status === 200) {
          setItems(data.items.slice(0, 4));
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (itemsError) {
      console.log('Error');
    }
  }, [itemsResponse, itemsError]);

  useEffect(() => {
    setSearch(searchParams.get('search'));
  }, [searchParams]);

  return (
    <div>
      {/* @ts-ignore */}
      {items.length
        /* @ts-ignore */
        ? items.map((item) => (
          <Item
            id={item.id}
            title={item.title}
            image={item.picture}
            price={item.price.amount}
            freeShipping={item.free_shipping}
          />
        ))
        : null}
    </div>
  );
};

export default Items;
