import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Header = ({ startLogout }) => (
  <header className="header">
      <div className="header__content">
        <Link className="header__title" to="/">
          Travis Turner
          <p>Developer</p>
        </Link>
        
        <div id="header__nav">
          <NavLink className="header__link" activeClassName="header--active" to="/about">About</NavLink>
          <NavLink className="header__link" activeClassName="header--active" to="/projects">Projects</NavLink>
          <NavLink className="header__link" activeClassName="header--active" to="/blog">Blog</NavLink>
          <a href="mailto:example@email.com" className="header__link header__email">travis@travisturner.io</a>          
        </div>
      </div>
  </header>
);



export default Header;
