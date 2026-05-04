import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

export const App = () => {
  function handleActive({ isActive }: { isActive: boolean }) {
    return cn('navbar-item', {
      'is-active': isActive,
    });
  }

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to=".." className={handleActive}>
              Home
            </NavLink>
            <NavLink to="tabs" className={handleActive}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};
