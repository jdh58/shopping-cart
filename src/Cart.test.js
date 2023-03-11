import '@testing-library/jest-dom';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from './Cart';

let cart;

describe('cart renders proper items', () => {
  it('renders one item', () => {
    cart = [
      {
        title: 'Banana',
        price: 2332,
        id: '3',
      },
    ];
    render(<Cart cart={cart} />);

    expect(screen.getAllByTestId('itemCard')).toHaveLength(1);
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText(/^\$2332$/)).toBeInTheDocument();
  });
  it('renders many items', () => {
    cart = [
      {
        title: 'Banana',
        price: 2332,
        id: '3',
      },
      {
        title: 'Cheese',
        price: 48,
        id: '14',
      },
      {
        title: 'Doll',
        price: 12,
        id: '1',
      },
    ];
    render(<Cart cart={cart} />);

    expect(screen.getAllByTestId('itemCard')).toHaveLength(3);
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cheese')).toBeInTheDocument();
    expect(screen.getByText('Doll')).toBeInTheDocument();
    expect(screen.getByText(/^\$2332$/)).toBeInTheDocument();
    expect(screen.getByText(/^\$48$/)).toBeInTheDocument();
    expect(screen.getByText(/^\$12$/)).toBeInTheDocument();
  });
  it('sets initial quantity', () => {});
});
