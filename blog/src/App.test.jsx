import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog title', () => {
  render(<App />);
  const linkElement = screen.getByText(/블로그임/i);
  expect(linkElement).toBeInTheDocument();
});
