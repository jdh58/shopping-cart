import { screen, render } from '@testing-library/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import Nav from './Nav';

/* We use this to supply the Link context or the tests break.
the routes link to is irrelevant and not used. */
function NavTest() {
  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/shop" element={<></>} />
        <Route path="/cart" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
}

let cart;

describe('cart updates properly', () => {
  it('starts at 0', () => {
    cart = [];
    render(<NavTest cart={cart} />);

    expect(screen.getByTestId('cart')).toHaveTextContent(/^0$/);
  });

  it('updates properly with one item', () => {
    cart = [
      {
        quantity: 2,
        id: '3',
      },
    ];
    render(<NavTest cart={cart} />);

    expect(screen.getByTestId('cart')).toHaveTextContent(/^2$/);
  });

  it('updates properly with multiple items', () => {
    cart = [
      {
        quantity: 5,
        id: '2',
      },
      {
        quantity: 2,
        id: '1',
      },
      {
        quantity: 17,
        id: '5',
      },
    ];
    render(<NavTest cart={cart} />);

    expect(screen.getByTestId('cart')).toHaveTextContent(/^24$/);
  });
});
