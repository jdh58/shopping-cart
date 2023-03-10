import CheckoutPanel from './CheckoutPanel';
import ItemCard from './ItemCard';

export default function Cart(props) {
  return (
    <div className="cartPage">
      <div className="cartItems">
        {props.items.map((item) => (
          <ItemCard item={item} isCart={'cart'} />
        ))}
      </div>
      <CheckoutPanel />
    </div>
  );
}
