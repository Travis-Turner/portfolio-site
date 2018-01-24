import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => (
  <div id="navbar__container">
  <a className="header__link" href="./TravisTurnerResume2018.pdf" target="_blank">CV</a>
    <NavLink exact className="header__link" activeClassName="header--active" to="/">About</NavLink>
    <NavLink className="header__link" activeClassName="header--active" to="/projects">Projects</NavLink>
    <NavLink className="header__link" activeClassName="header--active" to="/contact">Contact</NavLink>
    <a href="mailto:travis@travisturner.io" className="header__link header__email">travis@travisturner.io</a>
  </div>
);

export default NavBar;

//<a className="header__link" href="#" target="_blank">Blog</a>
/*
<a href="#" className="header__link">CV</a>

*/