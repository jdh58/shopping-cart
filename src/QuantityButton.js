import { useState, useEffect } from 'react';

export default function QuantityButton(props) {
  const [quantity, setQuantity] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (!isInitial) {
      props.updateQuantity(quantity, props.item);
    }
  }, [quantity]);

  useEffect(() => {
    setIsInitial(false);
  }, []);

  return (
    <>
      {quantity > 0 ? (
        <div className="quantButton">
          <div
            className="decrement"
            onClick={() => {
              setQuantity((quantity) => quantity - 1);
            }}
          >
            -
          </div>
          <input
            data-testid="quantInput"
            type="number"
            className={`quantity input${props.item.id}`}
            value={quantity}
            onChange={() => {
              // Don't allow the user to make quantity negative.
              let value = parseInt(
                document.querySelector(`.input${props.item.id}`).value
              );
              if (value > 0) {
                setQuantity(value);
              } else {
                setQuantity(0);
              }
            }}
          />
          <div
            className="increment"
            onClick={() => setQuantity((quantity) => quantity + 1)}
          >
            +
          </div>
        </div>
      ) : (
        // Set quantity to 0 (it shouldn't be negative)
        <button className="quantButton" onClick={() => setQuantity(1)}>
          + Add
        </button>
      )}
    </>
  );
}
