import React, { useRef } from "react";

const Header = () => {
  const refNavOpenBtn = useRef(null);
  const refNavCloseBtn = useRef(null);
  const refOverlay = useRef(null);
  const refNavbar = useRef(null);
  const refHeader = useRef(null);

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
      refHeader.current.classList.add("active");
    } else {
      refHeader.current.classList.remove("active");
    }
  });

  const toggleNavbar = () => {
    refNavbar.current.classList.toggle("active");
    refOverlay.current.classList.toggle("active");
  };

  return (
    <header className='header' data-header ref={refHeader}>
      <div className='container'>
        <div
          className='overlay'
          data-overlay
          ref={refOverlay}
          onClick={toggleNavbar}
        ></div>
        <a href='#' className='logo'>
          <img
            src='/images/logo.svg'
            width='160'
            height='45'
            alt='Footcap logo'
          />
        </a>
        <button
          className='nav-open-btn'
          data-nav-open-btn
          aria-label='Open Menu'
          ref={refNavOpenBtn}
          onClick={toggleNavbar}
        >
          <ion-icon name='menu-outline'></ion-icon>
        </button>
        <nav className='navbar' data-navbar ref={refNavbar}>
          <button
            className='nav-close-btn'
            data-nav-close-btn
            aria-label='Close Menu'
            ref={refNavCloseBtn}
            onClick={toggleNavbar}
          >
            <ion-icon name='close-outline'></ion-icon>
          </button>

          <a href='#' className='logo'>
            <img
              src='/images/logo.svg'
              width='190'
              height='50'
              alt='Footcap logo'
            />
          </a>

          <ul className='navbar-list'>
            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Home
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                About
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Products
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Shop
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Blog
              </a>
            </li>

            <li className='navbar-item'>
              <a href='#' className='navbar-link'>
                Contact
              </a>
            </li>
          </ul>

          <ul className='nav-action-list'>
            <li>
              <button className='nav-action-btn'>
                <ion-icon name='search-outline' aria-hidden='true'></ion-icon>

                <span className='nav-action-text'>Search</span>
              </button>
            </li>

            <li>
              <a href='#' className='nav-action-btn'>
                <ion-icon name='person-outline' aria-hidden='true'></ion-icon>

                <span className='nav-action-text'>Login / Register</span>
              </a>
            </li>

            <li>
              <button className='nav-action-btn'>
                <ion-icon name='heart-outline' aria-hidden='true'></ion-icon>

                <span className='nav-action-text'>Wishlist</span>

                <data className='nav-action-badge' value='5' aria-hidden='true'>
                  5
                </data>
              </button>
            </li>

            <li>
              <button className='nav-action-btn'>
                <ion-icon name='bag-outline' aria-hidden='true'></ion-icon>

                <data className='nav-action-text' value='318.00'>
                  Basket: <strong>$318.00</strong>
                </data>

                <data className='nav-action-badge' value='4' aria-hidden='true'>
                  4
                </data>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
