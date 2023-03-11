import QuantityButton from './QuantityButton';

export default function ItemCard(props) {
  return (
    <div className={`itemCard ${props.isCart}`} data-testid="itemCard">
      <div className="itemImage">
        <img src={props.item.image} alt="" />
        <QuantityButton
          item={props.item}
          updateQuantity={props.updateQuantity}
          initialQuantity={props.initialQuantity}
        />
      </div>
      <div className="itemInfo">
        <h3 className="price">${props.item.price}</h3>
        <h3 className="title">{props.item.title}</h3>
      </div>
    </div>
  );
}
