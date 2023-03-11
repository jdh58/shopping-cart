import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import Nav from './Nav';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (quantity, item) => {
    let id = item.id;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        let temp = cart.slice();
        /* If the quantity is 0, remove it from the cart.
        Otherwise, update the quantity */
        if (quantity === 0) {
          temp = [...temp.slice(0, i), ...temp.slice(i + 1)];
        } else {
          temp[i].quantity = quantity;
        }
        setCart(temp);
        return;
      }
    }
    // If not found, assume it's a new entry and add it to the cart
    setCart([
      ...cart,
      {
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: quantity,
        id: id,
      },
    ]);
  };

  return (
    <HashRouter basename="/">
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop updateQuantity={updateCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} updateQuantity={updateCart} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
