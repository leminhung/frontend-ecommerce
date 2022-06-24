import React, { useRef } from "react";

const App = () => {
  const refOverlay = useRef(null);
  const refNavOpenBtn = useRef(null);
  const refNavCloseBtn = useRef(null);
  const refNavbar = useRef(null);
  const refHeader = useRef(null);
  const refBackToTop = useRef(null);

  const toggleNavbar = () => {
    refNavbar.current.classList.toggle("active");
    refOverlay.current.classList.toggle("active");
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 80) {
      refHeader.current.classList.add("active");
      refBackToTop.current.classList.add("active");
    } else {
      refHeader.current.classList.remove("active");
      refBackToTop.current.classList.remove("active");
    }
  });

  return (
    <>
      {/* - #HEADER */}
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
              height='50'
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

                  <data
                    className='nav-action-badge'
                    value='5'
                    aria-hidden='true'
                  >
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

                  <data
                    className='nav-action-badge'
                    value='4'
                    aria-hidden='true'
                  >
                    4
                  </data>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <article>
          {/* - #HERO */}

          <section
            className='section hero'
            style={{ backgroundImage: `url("/images/hero-banner.png")` }}
          >
            <div className='container'>
              <h2 className='h1 hero-title'>
                New Summer <strong>Shoes Collection</strong>
              </h2>

              <p className='hero-text'>
                Competently expedite alternative benefits whereas leading-edge
                catalysts for change. Globally leverage existing an expanded
                array of leadership.
              </p>

              <button className='btn btn-primary custom-btn'>
                <span>Shop Now</span>

                <ion-icon
                  name='arrow-forward-outline'
                  aria-hidden='true'
                ></ion-icon>
              </button>
            </div>
          </section>

          {/* - #COLLECTION */}

          <section className='section collection'>
            <div className='container'>
              <ul className='collection-list has-scrollbar'>
                <li>
                  <div
                    className='collection-card'
                    style={{
                      backgroundImage: `url("/images/collection-1.jpg")`,
                    }}
                  >
                    <h3 className='h4 card-title'>Men Collections</h3>

                    <a href='#' className='btn btn-secondary'>
                      <span>Explore All</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className='collection-card'
                    style={{
                      backgroundImage: `url("/images/collection-2.jpg")`,
                    }}
                  >
                    <h3 className='h4 card-title'>Women Collections</h3>

                    <a href='#' className='btn btn-secondary'>
                      <span>Explore All</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className='collection-card'
                    style={{
                      backgroundImage: `url("/images/collection-3.jpg")`,
                    }}
                  >
                    <h3 className='h4 card-title'>Sports Collections</h3>

                    <a href='#' className='btn btn-secondary'>
                      <span>Explore All</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #PRODUCT */}

          <section className='section product'>
            <div className='container'>
              <h2 className='h2 section-title'>Bestsellers Products</h2>

              <ul className='filter-list'>
                <li>
                  <button className='filter-btn active'>All</button>
                </li>

                <li>
                  <button className='filter-btn'>Nike</button>
                </li>

                <li>
                  <button className='filter-btn'>Adidas</button>
                </li>

                <li>
                  <button className='filter-btn'>Puma</button>
                </li>

                <li>
                  <button className='filter-btn'>Bata</button>
                </li>

                <li>
                  <button className='filter-btn'>Apex</button>
                </li>
              </ul>

              <ul className='product-list'>
                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-1.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Running Sneaker Shoes'
                        className='image-contain'
                      />

                      <div className='card-badge'>New</div>

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Women
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Running Sneaker Shoes</a>
                      </h3>

                      <data className='card-price' value='180.85'>
                        $180.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-2.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Leather Mens Slipper'
                        className='image-contain'
                      />

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Sports
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Leather Mens Slipper</a>
                      </h3>

                      <data className='card-price' value='190.85'>
                        $190.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-3.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Simple Fabric Shoe'
                        className='image-contain'
                      />

                      <div className='card-badge'>New</div>

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Women
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Simple Fabric Shoe</a>
                      </h3>

                      <data className='card-price' value='160.85'>
                        $160.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-4.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Air Jordan 7 Retro '
                        className='image-contain'
                      />

                      <div className='card-badge'>-25%</div>

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Sports
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Air Jordan 7 Retro </a>
                      </h3>

                      <data className='card-price' value='170.85'>
                        $170.85 <del>$200.21</del>
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-5.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Nike Air Max 270 SE'
                        className='image-contain'
                      />

                      <div className='card-badge'>New</div>

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Women
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Nike Air Max 270 SE</a>
                      </h3>

                      <data className='card-price' value='120.85'>
                        $120.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-6.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Adidas Sneakers Shoes'
                        className='image-contain'
                      />

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Women
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Adidas Sneakers Shoes</a>
                      </h3>

                      <data className='card-price' value='100.85'>
                        $100.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-7.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Nike Basketball shoes'
                        className='image-contain'
                      />

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Sports
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Nike Basketball shoes</a>
                      </h3>

                      <data className='card-price' value='120.85'>
                        $120.85
                      </data>
                    </div>
                  </div>
                </li>

                <li className='product-item'>
                  <div className='product-card' tabIndex='0'>
                    <figure className='card-banner'>
                      <img
                        src='/images/product-8.jpg'
                        width='312'
                        height='350'
                        loading='lazy'
                        alt='Simple Fabric Shoe'
                        className='image-contain'
                      />

                      <ul className='card-action-list'>
                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-1'
                          >
                            <ion-icon name='cart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-1'
                          >
                            Add to Cart
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-2'
                          >
                            <ion-icon name='heart-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-2'
                          >
                            Add to Whishlist
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-3'
                          >
                            <ion-icon name='eye-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-3'
                          >
                            Quick View
                          </div>
                        </li>

                        <li className='card-action-item'>
                          <button
                            className='card-action-btn'
                            aria-labelledby='card-label-4'
                          >
                            <ion-icon name='repeat-outline'></ion-icon>
                          </button>

                          <div
                            className='card-action-tooltip'
                            id='card-label-4'
                          >
                            Compare
                          </div>
                        </li>
                      </ul>
                    </figure>

                    <div className='card-content'>
                      <div className='card-cat'>
                        <a href='#' className='card-cat-link'>
                          Men
                        </a>{" "}
                        /
                        <a href='#' className='card-cat-link'>
                          Women
                        </a>
                      </div>

                      <h3 className='h3 card-title'>
                        <a href='#'>Simple Fabric Shoe</a>
                      </h3>

                      <data className='card-price' value='100.85'>
                        $100.85
                      </data>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #CTA */}
          <section className='section cta'>
            <div className='container'>
              <ul className='cta-list'>
                <li>
                  <div
                    className='cta-card'
                    style={{ backgroundImage: `url("/images/cta-1.jpg")` }}
                  >
                    <p className='card-subtitle'>Adidas Shoes</p>

                    <h3 className='h2 card-title'>The Summer Sale Off 50%</h3>

                    <a href='#' className='btn btn-link custom-link'>
                      <span>Shop Now</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className='cta-card'
                    style={{ backgroundImage: `url("/images/cta-2.jpg")` }}
                  >
                    <p className='card-subtitle'>Nike Shoes</p>

                    <h3 className='h2 card-title'>
                      Makes Yourself Keep Sporty
                    </h3>

                    <a href='#' className='btn btn-link custom-link'>
                      <span>Shop Now</span>

                      <ion-icon
                        name='arrow-forward-outline'
                        aria-hidden='true'
                      ></ion-icon>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #SPECIAL */}

          <section className='section special'>
            <div className='container'>
              <div
                className='special-banner'
                style={{ backgroundImage: `url("/images/special-banner.jpg")` }}
              >
                <h2 className='h3 banner-title'>New Trend Edition</h2>

                <a href='#' className='btn btn-link custom-link'>
                  <span>Explore All</span>

                  <ion-icon
                    name='arrow-forward-outline'
                    aria-hidden='true'
                  ></ion-icon>
                </a>
              </div>

              <div className='special-product'>
                <h2 className='h2 section-title'>
                  <span className='text'>Nike Special</span>

                  <span className='line'></span>
                </h2>

                <ul className='has-scrollbar'>
                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-1.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Running Sneaker Shoes'
                          className='image-contain'
                        />

                        <div className='card-badge'>New</div>

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Women
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Running Sneaker Shoes</a>
                        </h3>

                        <data className='card-price' value='180.85'>
                          $180.85
                        </data>
                      </div>
                    </div>
                  </li>

                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-2.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Leather Mens Slipper'
                          className='image-contain'
                        />

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Sports
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Leather Mens Slipper</a>
                        </h3>

                        <data className='card-price' value='190.85'>
                          $190.85
                        </data>
                      </div>
                    </div>
                  </li>

                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-3.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Simple Fabric Shoe'
                          className='image-contain'
                        />

                        <div className='card-badge'>New</div>

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Women
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Simple Fabric Shoe</a>
                        </h3>

                        <data className='card-price' value='160.85'>
                          $160.85
                        </data>
                      </div>
                    </div>
                  </li>

                  <li className='product-item'>
                    <div className='product-card' tabIndex='0'>
                      <figure className='card-banner'>
                        <img
                          src='/images/product-4.jpg'
                          width='312'
                          height='350'
                          loading='lazy'
                          alt='Air Jordan 7 Retro '
                          className='image-contain'
                        />

                        <div className='card-badge'>-25%</div>

                        <ul className='card-action-list'>
                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-1'
                            >
                              <ion-icon name='cart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-1'
                            >
                              Add to Cart
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-2'
                            >
                              <ion-icon name='heart-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-2'
                            >
                              Add to Whishlist
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-3'
                            >
                              <ion-icon name='eye-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-3'
                            >
                              Quick View
                            </div>
                          </li>

                          <li className='card-action-item'>
                            <button
                              className='card-action-btn'
                              aria-labelledby='card-label-4'
                            >
                              <ion-icon name='repeat-outline'></ion-icon>
                            </button>

                            <div
                              className='card-action-tooltip'
                              id='card-label-4'
                            >
                              Compare
                            </div>
                          </li>
                        </ul>
                      </figure>

                      <div className='card-content'>
                        <div className='card-cat'>
                          <a href='#' className='card-cat-link'>
                            Men
                          </a>{" "}
                          /
                          <a href='#' className='card-cat-link'>
                            Sports
                          </a>
                        </div>

                        <h3 className='h3 card-title'>
                          <a href='#'>Air Jordan 7 Retro </a>
                        </h3>

                        <data className='card-price' value='170.85'>
                          $170.85 <del>$200.21</del>
                        </data>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* - #SERVICE */}

          <section className='section service'>
            <div className='container'>
              <ul className='service-list'>
                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-1.png'
                        width='53'
                        height='28'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Free Shiping</h3>

                      <p className='card-text'>
                        All orders over <span>$150</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-2.png'
                        width='43'
                        height='35'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Quick Payment</h3>

                      <p className='card-text'>100% secure payment</p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-3.png'
                        width='40'
                        height='40'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>Free Returns</h3>

                      <p className='card-text'>Money back in 30 days</p>
                    </div>
                  </div>
                </li>

                <li className='service-item'>
                  <div className='service-card'>
                    <div className='card-icon'>
                      <img
                        src='/images/service-4.png'
                        width='40'
                        height='40'
                        loading='lazy'
                        alt='Service icon'
                      />
                    </div>

                    <div>
                      <h3 className='h4 card-title'>24/7 Support</h3>

                      <p className='card-text'>Get Quick Support</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* - #INSTA POST */}

          <section className='section insta-post'>
            <ul className='insta-post-list has-scrollbar'>
              <li className='insta-post-item'>
                <img
                  src='/images/insta-1.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-2.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-3.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-4.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-5.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-6.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-7.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>

              <li className='insta-post-item'>
                <img
                  src='/images/insta-8.jpg'
                  width='100'
                  height='100'
                  loading='lazy'
                  alt='Instagram post'
                  className='insta-post-banner image-contain'
                />

                <a href='#' className='insta-post-link'>
                  <ion-icon name='logo-instagram'></ion-icon>
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>

      {/* - #FOOTER */}

      <footer className='footer'>
        <div className='footer-top section'>
          <div className='container'>
            <div className='footer-brand'>
              <a href='#' className='logo'>
                <img
                  src='/images/logo.svg'
                  width='160'
                  height='50'
                  alt='Footcap logo'
                />
              </a>

              <ul className='social-list'>
                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-facebook'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-twitter'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-pinterest'></ion-icon>
                  </a>
                </li>

                <li>
                  <a href='#' className='social-link'>
                    <ion-icon name='logo-linkedin'></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-link-box'>
              <ul className='footer-list'>
                <li>
                  <p className='footer-list-title'>Contact Us</p>
                </li>

                <li>
                  <address className='footer-link'>
                    <ion-icon name='location'></ion-icon>

                    <span className='footer-link-text'>
                      Thon Den, Di Trach, Hoai Duc, Ha Noi, Viet Nam
                    </span>
                  </address>
                </li>

                <li>
                  <a href='tel:+84843987789' className='footer-link'>
                    <ion-icon name='call'></ion-icon>

                    <span className='footer-link-text'>+84843987789</span>
                  </a>
                </li>

                <li>
                  <a
                    href='mailto:leminhhungtabletennis@gmail.com'
                    className='footer-link'
                  >
                    <ion-icon name='mail'></ion-icon>

                    <span className='footer-link-text'>
                      leminhhungtabletennis@gmail.com
                    </span>
                  </a>
                </li>
              </ul>

              <ul className='footer-list'>
                <li>
                  <p className='footer-list-title'>My Account</p>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    <ion-icon name='chevron-forward-outline'></ion-icon>

                    <span className='footer-link-text'>My Account</span>
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    <ion-icon name='chevron-forward-outline'></ion-icon>

                    <span className='footer-link-text'>View Cart</span>
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    <ion-icon name='chevron-forward-outline'></ion-icon>

                    <span className='footer-link-text'>Wishlist</span>
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    <ion-icon name='chevron-forward-outline'></ion-icon>

                    <span className='footer-link-text'>Compare</span>
                  </a>
                </li>

                <li>
                  <a href='#' className='footer-link'>
                    <ion-icon name='chevron-forward-outline'></ion-icon>

                    <span className='footer-link-text'>New Products</span>
                  </a>
                </li>
              </ul>

              <div className='footer-list'>
                <p className='footer-list-title'>Opening Time</p>

                <table className='footer-table'>
                  <tbody>
                    <tr className='table-row'>
                      <th className='table-head' scope='row'>
                        Mon - Tue:
                      </th>

                      <td className='table-data'>8AM - 10PM</td>
                    </tr>

                    <tr className='table-row'>
                      <th className='table-head' scope='row'>
                        Wed:
                      </th>

                      <td className='table-data'>8AM - 7PM</td>
                    </tr>

                    <tr className='table-row'>
                      <th className='table-head' scope='row'>
                        Fri:
                      </th>

                      <td className='table-data'>7AM - 12PM</td>
                    </tr>

                    <tr className='table-row'>
                      <th className='table-head' scope='row'>
                        Sat:
                      </th>

                      <td className='table-data'>9AM - 8PM</td>
                    </tr>

                    <tr className='table-row'>
                      <th className='table-head' scope='row'>
                        Sun:
                      </th>

                      <td className='table-data'>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='footer-list'>
                <p className='footer-list-title'>Newsletter</p>

                <p className='newsletter-text'>
                  Authoritatively morph 24/7 potentialities with error-free
                  partnerships.
                </p>

                <form action='' className='newsletter-form'>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email Address'
                    className='newsletter-input'
                  />

                  <button type='submit' className='btn btn-primary'>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='container'>
            <p className='copyright'>
              &copy; 2022{" "}
              <a href='#' className='copyright-link'>
                leminhhung
              </a>
              . All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* - #GO TO TOP */}
      <a href='#top' class='go-top-btn' data-go-top ref={refBackToTop}>
        <ion-icon name='arrow-up-outline'></ion-icon>
      </a>
    </>
  );
};

export default App;
