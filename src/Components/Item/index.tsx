import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';
import Free from '../../assets/images/ic_shipping.png';
import { formatCurrency } from '../../utils/dataFormatting';

type ItemProps = {
  id: string;
  title: string;
  image: string;
  price: number;
  freeShipping: boolean;
}

const Item = ({
  id, title, image, price, freeShipping,
}: ItemProps) => (
  <div>
    <Link className="Item row" to={`/items/${id}`}>
      <div className="col-md-2 col-md-offset-1">
        <img className="Item__image" src={image} alt="Item" />
      </div>
      <div className="col-md-8">
        <p className="Item__price">
          {formatCurrency(price)}
          {freeShipping ? <span className="Item__price-free-shipping"><img src={Free} alt="FreeShipping" /></span> : null}
        </p>
        <p className="Item__title">{title}</p>
      </div>
    </Link>
  </div>
);

export default Item;
