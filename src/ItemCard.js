import QuantityButton from './QuantityButton';

export default function ItemCard(props) {
  console.log(props.item);
  return (
    <div className={`itemCard ${props.isCart}`}>
      <div className="itemImage">
        <img src={props.item.image} alt="" />
        <QuantityButton />
      </div>
      <div className="itemInfo">
        <h3 className="price">{props.item.price}</h3>
        <h3 className="title">{props.item.title}</h3>
      </div>
    </div>
  );
}
