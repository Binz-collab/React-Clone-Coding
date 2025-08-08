import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders blog title', () => {
  render(<App />);
  const linkElement = screen.getByText(/블로그임/i);
  expect(linkElement).toBeInTheDocument();
});

test('adds a new post', async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByRole('textbox');
  const addButton = screen.getByRole('button', { name: /글 추가하기/i });

  const newPostTitle = '새로운 포스트 제목';
  await user.type(input, newPostTitle);
  await user.click(addButton);

  const newPostElement = await screen.findByText(/새로운 포스트 제목/i);
  expect(newPostElement).toBeInTheDocument();
});
