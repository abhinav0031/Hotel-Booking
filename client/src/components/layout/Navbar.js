import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <Fragment>
      <div class='navbar-fixed'>
        <nav class='teal'>
          <div class='container'>
            <div class='nav-wrapper'>
              <i class='fas fa-hotel'></i>
              <a href='#home' class='brand-logo'>
                Globetrotter
              </a>
              <a href='#' data-activates='mobile-nav' class='button-collapse'>
                <i class='material-icons'>menu</i>
              </a>
              <ul class='right hide-on-med-and-down'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul class='side-nav' id='mobile-nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </Fragment>
  );
};
export default Navbar;
