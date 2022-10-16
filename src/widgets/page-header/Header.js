import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Search from "../../components/search/Search";
import Logo from '../../components/logo/Logo';
import './styles.scss';

const Header = () => {
  return (
    <header>
      <Navbar />
      <Search />
      <Logo />
    </header>
  );
};

export default Header;
