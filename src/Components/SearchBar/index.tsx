/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React, { InputHTMLAttributes } from 'react';
import SearchIcon from '../../assets/images/ic_Search.png';
import './SearchBar.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onButtonClick?: () => void;
}

const SearchBar = ({
  placeholder = 'Nunca dejes de buscar',
  className,
  onButtonClick,
  ...rest
}: InputProps): JSX.Element => (
  <div className={`SearchBar ${className || ''}`}>
    <input className="SearchBar__input" type="text" placeholder={placeholder} {...rest} />
    <button className="SearchBar__button" type="button" onClick={onButtonClick}>
      <img src={SearchIcon} alt="SearchIcon" />
    </button>
  </div>
);

export default SearchBar;
