import { screen, render, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import MockQuantityButton from './QuantityButton';

let mockUpdateCart = jest.fn();

jest.mock('./Shop', () => () => {
  return (
    <>
      <MockQuantityButton updateQuantity={mockUpdateCart} item={{ id: '1' }} />
      <MockQuantityButton updateQuantity={mockUpdateCart} item={{ id: '2' }} />
    </>
  );
});

describe('quantity updater works', () => {
  it('calls cart updater when 1 quantity added', async () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByText('Shop'));
    });
    // screen.debug();
    act(() => {
      userEvent.click(screen.getAllByRole('button')[0]);
    });

    expect(mockUpdateCart).toBeCalledTimes(1);
    // Second argument of all these is a mocked item
    expect(mockUpdateCart).toBeCalledWith(1, { id: '1' });
  });

  it('can handle multiple items being added', async () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByText('Shop'));
    });

    act(() => {
      userEvent.click(screen.getAllByRole('button')[0]);
      userEvent.click(screen.getAllByRole('button')[1]);
      // Third press shouldnt be possible!
      userEvent.click(screen.getAllByRole('button')[1]);
    });

    expect(mockUpdateCart).toBeCalledTimes(2);
    expect(mockUpdateCart).toBeCalledWith(1, { id: '1' });
    expect(mockUpdateCart).toBeCalledWith(1, { id: '2' });
  });

  it('can handle items being removed', async () => {
    render(<App />);

    act(() => {
      userEvent.click(screen.getByText('Shop'));
    });

    act(() => {
      userEvent.click(screen.getAllByRole('button')[0]);
      userEvent.click(screen.getAllByRole('button')[1]);
    });
    act(() => {
      userEvent.click(screen.getAllByText('-')[1]);
    });

    expect(mockUpdateCart).toBeCalledTimes(3);
    expect(mockUpdateCart).toBeCalledWith(1, { id: '1' });
    expect(mockUpdateCart).toBeCalledWith(1, { id: '2' });
    expect(mockUpdateCart).toBeCalledWith(0, { id: '2' });
  });
});
