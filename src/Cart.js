import CheckoutPanel from './CheckoutPanel';
import ItemCard from './ItemCard';
import './styles/Cart.css';

export default function Cart(props) {
  return (
    <div className="cartPage">
      <h2 className="title">Your Cart</h2>
      <div className="cartItems">
        {props.cart.length > 0 ? (
          props.cart.map((item) => {
            return (
              <ItemCard
                key={item.id}
                item={item}
                isCart={'cart'}
                initialQuantity={item.quantity}
                updateQuantity={props.updateQuantity}
              />
            );
          })
        ) : (
          <h2 className="emptyCart">Nothing here... get to shopping!</h2>
        )}
      </div>
      <CheckoutPanel />
    </div>
  );
}
