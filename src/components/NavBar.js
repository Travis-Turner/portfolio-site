import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => (
  <div id="navbar__container">
    <NavLink exact className="header__link" activeClassName="header--active" to="/">About</NavLink>
    <a href="mailto:example@email.com" className="header__link header__email">travis@travisturner.io</a>
  </div>
);

export default NavBar;

//<a className="header__link" href="#" target="_blank">Blog</a>
/*
<a href="#" className="header__link">CV</a>
<NavLink className="header__link" activeClassName="header--active" to="/projects">Projects</NavLink>
*/