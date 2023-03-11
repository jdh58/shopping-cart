import CartIcon from './assets/shopping-cart.svg';
// import Logo from './logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <span className="logo">
          <Link to="/">
            <img src="Logo" alt="" />
          </Link>
        </span>
        <span className="homeNav clickable">
          <Link to="/">Home</Link>
        </span>
        <span className="shopNav clickable">
          <Link to="/shop">Shop</Link>
        </span>
      </div>

      <span className="right cartNav clickable">
        <Link to="/cart">
          <p data-testid="cart">{totalQuantity}</p>
          <img src={CartIcon} alt="" />
        </Link>
      </span>
    </nav>
  );
}
