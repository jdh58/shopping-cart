import CartIcon from './assets/shopping-cart.svg';
// import Logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Nav() {
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
        <img src={CartIcon} alt="" />
      </span>
    </nav>
  );
}
