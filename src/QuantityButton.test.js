import '@testing-library/jest-dom';
import { render, screen, act, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuantityButton from './QuantityButton';

let updateQuantity = jest.fn();

describe('button tests', () => {
  it('upddates to input when "+ Add" is clicked', () => {
    render(<QuantityButton updateQuantity={updateQuantity} item={{}} />);
    let addButton = screen.getByRole('button');

    act(() => {
      userEvent.click(addButton);
    });

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByTestId('quantInput')).toBeInTheDocument();
  });

  it('goes back to +add button when quantity set to 0', () => {
    render(<QuantityButton updateQuantity={updateQuantity} item={{}} />);
    let addButton = screen.getByRole('button');

    act(() => {
      userEvent.click(addButton);
    });
    act(() => {
      userEvent.type(screen.getByTestId('quantInput'), '{selectall}0');
    });

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.queryByTestId('quantInput')).not.toBeInTheDocument();
  });

  it('updates quantity when using incrementer', () => {
    render(<QuantityButton updateQuantity={updateQuantity} item={{}} />);
    let addButton = screen.getByRole('button');

    act(() => {
      userEvent.click(addButton);
    });
    act(() => {
      userEvent.type(screen.getByTestId('quantInput'), '{selectall}14');
      userEvent.click(screen.getByText('+'));
    });

    expect(screen.getByTestId('quantInput').value).toBe('15');
  });

  it('updates quantity when using decrementer', () => {
    render(<QuantityButton updateQuantity={updateQuantity} item={{}} />);
    let addButton = screen.getByRole('button');

    act(() => {
      userEvent.click(addButton);
    });
    act(() => {
      userEvent.type(screen.getByTestId('quantInput'), '{selectall}14');
      userEvent.click(screen.getByText('-'));
      userEvent.click(screen.getByText('-'));
    });

    expect(screen.getByTestId('quantInput').value).toBe('12');
  });
});
