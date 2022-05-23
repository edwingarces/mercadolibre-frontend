import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRequest from '../../hooks/useRequest';
import { formatCurrency } from '../../utils/dataFormatting';
import { ItemType, ResponseParams } from '../../utils/types';
import './ItemDescription.scss';

const ItemDescription = () => {
  const { id } = useParams();
  const [item, setItem] = useState<ItemType | null>(null);
  const [itemDescResponse, itemDescCall, itemDescError] = useRequest('get');
  useEffect(() => {
    /* @ts-ignore */
    itemDescCall(null, `http://localhost:3001/api/items/${id}`);
  }, [id]);

  useEffect(() => {
    if (itemDescResponse) {
      try {
        const { data, status } = itemDescResponse as ResponseParams;
        if (status === 200) {
          setItem(data.item);
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (itemDescError) {
      console.log('Error');
    }
  }, [itemDescResponse, itemDescError]);
  return (
    <div className="col-md-12">
      {item
        ? (
          <>
            <div className="ItemDescription row">
              <div className="col-md-7 col-md-offset-1">
                <img className="ItemDescription__image" src={item.picture} alt="" />
              </div>
              <div className="col-md-3">
                <p className="ItemDescription__title">{item.title}</p>
                <p className="ItemDescription__price">{formatCurrency(item.price.amount)}</p>
                <button className="ItemDescription__button" type="button">Comprar</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 col-md-offset-1">
                <p className="ItemDescription__desc-title">Descripción del producto</p>
                <p className="ItemDescription__description">{item.description}</p>
              </div>
            </div>
          </>
        )
        : null}
    </div>
  );
};

export default ItemDescription;
