import CartIcon from './assets/shopping-cart.svg';
// import Logo from './logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Nav.css';

export default function Nav(props) {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let value = 0;
    if (props.cart.length > 0) {
      props.cart.forEach((item) => (value += item.quantity));
    }
    setTotalQuantity(value);
  }, [props.cart]);

  return (
    <nav className="nav">
      <div className="left">
        <Link to="/" className="homeNav clickable">
          Home
        </Link>
        <Link to="/shop" className="shopNav clickable">
          Shop
        </Link>
      </div>

      <Link to="/cart" className="right cartNav clickable">
        {totalQuantity > 0 ? (
          <div className="quantContainer">
            <p data-testid="cart">{totalQuantity}</p>
          </div>
        ) : null}
        <img src={CartIcon} alt="" />
      </Link>
    </nav>
  );
}
