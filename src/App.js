import React from "react";

import Header from "src/component/Header";
import Footer from "src/component/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
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
                        <Link className='dropdown-item' to='/user/dashboard'>
                          <a>Running Sneaker Shoes</a>
                        </Link>
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

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default App;
