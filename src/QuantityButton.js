export default function QuantityButton(props) {
  let quantity = 0;

  return (
    <>
      {quantity > 0 ? (
        <div className="quantButton">
          <div className="decrement">-</div>
          <input type="number" className="quantity" value={quantity} />
          <div className="increment">+</div>
        </div>
      ) : (
        <button className="quantButton">+ Add</button>
      )}
    </>
  );
}
