import React from 'react';
import Logo22 from './Logo22.png';
import './Header.css';

import { NavLink as RouterLink } from 'react-router-dom';

const Header = () => {
  const getClassName = (props) => {
    return `${
      props.isActive ? 'font-bold' : ''
    } hover:underline hover:text-gray-600 transition duration-300 `;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

      <RouterLink to="/">
      <img className='logo' src={Logo22} alt="My Image" />
      </RouterLink>
          
         
          {/* <button
=======
          <RouterLink to="/">
            <img className="logo" src={Logo22} alt="My Image" />
          </RouterLink>
          <button
>>>>>>> abd1f8ae65f58e93a079aa52a87e3438fe588fe7
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button> */}

          <div className="collapse navbar-collapse pt-3 px-3" id="navmenu">
            <ul className="navbar-nav ms-auto fs-3">
              <li className="nav-link navs">
                <h3 className="navs">
                  <RouterLink className={`${getClassName} text-2xl`} to="/">
                    Home
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs">
                  <RouterLink
                    className={`${getClassName} text-2xl `}
                    to="/create"
                  >
                    Create
                  </RouterLink>
                </h3>
              </li>

              <li className="nav-link">
                <h3 className="navs navbar-nav navbar-right">
                  <RouterLink
                    className={`${getClassName} text-2xl `}
                    to="/posts"
                  >
                    All Posts
                  </RouterLink>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
