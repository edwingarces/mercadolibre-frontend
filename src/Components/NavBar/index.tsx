import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo_ML.png';
import SearchBar from '../SearchBar';
import './NavBar.scss';

const NavBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(value);
  };
  const goToSearch = () => {
    navigate(`items?search=${search}`, { replace: true });
  };
  const handlePress = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <nav className="NavBar row">
      <div className="NavBar__logo col-lg-1 col-lg-offset-1 col-md-1 col-md-offset-1">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="NavBar__search col-lg-9 col-md-9">
        <SearchBar
          value={search}
          onKeyPress={handlePress}
          onChange={handleChange}
          onButtonClick={goToSearch}
        />
      </div>
    </nav>
  );
};

export default NavBar;
