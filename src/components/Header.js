import React from "react";
import './Header.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__containerOne">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />


        <div className="header__search">
          <input className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>

      <div className="header__containerTwo">
        <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">
                Hello, Guest
              </span>
              <span className="header__optionLineTwo">
                Sign In
              </span>
            </div>
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Shop</span>
          </div>

            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;