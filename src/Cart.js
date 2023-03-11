import CheckoutPanel from './CheckoutPanel';
import ItemCard from './ItemCard';

export default function Cart(props) {
  console.log(props.cart);
  return (
    <div className="cartPage">
      <div className="cartItems">
        {props.cart.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              isCart={'cart'}
              initialQuantity={item.quantity}
              updateQuantity={props.updateQuantity}
            />
          );
        })}
      </div>
      <CheckoutPanel />
    </div>
  );
}
