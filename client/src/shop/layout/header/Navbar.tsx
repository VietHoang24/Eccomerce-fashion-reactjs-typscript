import * as React from 'react';
import "./Navbar.css"
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, NavLink } from "react-router-dom";
export interface Props {
}

const Navbar= ()=> {
  return (
    <div>
      <div className="super_container">
        {/* Header */}
        <header className="header">
          {/* Top Bar */}

          {/* Header Main */}
          <div className="header_main">
            <div className="container">
              <div className="row" style={{alignItems: 'center'}}>
                {/* Logo */}
                <div className="col-lg-2 col-sm-3 col-3 order-1">
                  <div className="logo_container">
                    <div className="logo">
                      <Link to="/">IVYMODA</Link>
                    </div>
                  </div>
                </div>
                {/* Search */}
                <div className="col-lg-5 col-12 order-lg-2 order-3 text-lg-left text-right">
                  <div className="header_search">
                    <div className="header_search_content">
                      <div className="header_search_form_container">
                        <form
                          action="#"
                          className="header_search_form clearfix"
                        >
                          <input
                            type="search"
                            required={true}
                            className="header_search_input"
                            placeholder="Search for products..."
                          />

                          <button
                            type="submit"
                            className="header_search_button trans_300"
                            value="Submit"
                          >
                            <img
                              src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                              alt=""
                            />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Wishlist */}
                <div className="col-lg-5 col-9 order-lg-3 order-2 text-lg-left text-right">
                  <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                    <div className="wishlist d-flex  flex-row align-items-center justify-content-end">
                      <div className="wishlist_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                          alt=""
                        />
                      </div>
                      <div className="wishlist_content">
                        <div className="wishlist_text">
                          <a href="#">Wishlist</a>
                        </div>
                        <div className="wishlist_count">10</div>
                      </div>
                    </div>
                    {/* Cart */}
                    <div className="cart">
                      <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                        <div className="cart_icon">
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                            alt=""
                          />
                          <div className="cart_count">
                            <span>3</span>
                          </div>
                        </div>
                        <div className="cart_content">
                          <div className="cart_text">
                            <a href="#">Cart</a>
                          </div>
                          <div className="cart_price">$185</div>
                        </div>
                      </div>
                    </div>
                    <div className="login-icon">
                      <Link to="auth/sign-in" style={{ color: "black" }}>
                        <LoginIcon fontSize="large" />
                      </Link>
                    </div>
                    <div className="register-icon">
                      <LogoutIcon fontSize="medium" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation */}
        </header>
        <div></div>
      </div>
    </div>
  );
}

export {Navbar}