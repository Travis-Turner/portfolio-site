import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div id="navbar__container">
    <NavLink className="header__link" activeClassName="header--active" to="/about">About</NavLink>
    <NavLink className="header__link" activeClassName="header--active" to="/projects">Projects</NavLink>
    <NavLink className="header__link" activeClassName="header--active" to="/blog">Blog</NavLink>
    <a href="mailto:example@email.com" className="header__link header__email">travis@travisturner.io</a>
  </div>
);

export default NavBar;