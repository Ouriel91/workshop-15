import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../app';

const clickIncrement =  (times) => {
  const plusButton =  screen.getByText("+");
  for (let i=0; i<times; i++) {
    fireEvent.click(plusButton);
  }
}

const clickDecrement =  (times) => {
  const plusButton =  screen.getByText("-");
  for (let i=0; i<times; i++) {
    fireEvent.click(plusButton);
  }
}

test('Click seven times +', async () => {
  render(<App />);
   clickIncrement(7)
  await waitFor(() => {
    expect(screen.getByText("BOOM")).toBeInTheDocument()
  })
});

test('Click seven times -', async () => {
  render(<App />);
   clickDecrement(7)
  await waitFor(() => {
    expect(screen.getByText("-7")).toBeInTheDocument()
  })
});

test('Increment and then decrement', async () => {
  render(<App />);
   clickIncrement(20)
   clickDecrement(3)
  await waitFor(() => {
    expect(screen.getByText("BOOM")).toBeInTheDocument()
  })
});

test('Decrement and then increment', async () => {
  render(<App />);
   clickDecrement(7)
   clickIncrement(10)
  await waitFor(() => {
    expect(screen.getByText("3")).toBeInTheDocument()
  })
});

test('Click seven times +, then seven times - (to zero)', async () => {
  render(<App />);
   clickIncrement(7);
   clickDecrement(7);
  await waitFor(() => {
    expect(screen.getByText("0")).toBeInTheDocument()
  })
});