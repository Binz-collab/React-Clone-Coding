import { render, screen, within } from '@testing-library/react';
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

test('changes post titles', async () => {
  const user = userEvent.setup();
  render(<App />);

  const changeButton = screen.getByRole('button', { name: /제목변경/i });
  await user.click(changeButton);

  const list = screen.getByTestId('post-list');
  const postTitles = within(list).getAllByRole('heading', { level: 4 });

  expect(postTitles[0]).toHaveTextContent('여자 코트 추천');
  expect(postTitles[1]).toHaveTextContent('강북 냉면 맛집');
  expect(postTitles[2]).toHaveTextContent('리액트 인강');
});

test('sorts post titles', async () => {
  const user = userEvent.setup();
  render(<App />);
  
  const sortButton = screen.getByRole('button', { name: /제목정렬/i });
  await user.click(sortButton);

  const list = screen.getByTestId('post-list');
  const postTitles = within(list).getAllByRole('heading', { level: 4 });
  
  const initialTitles = ['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'];
  const expectedSortedTitles = [...initialTitles].sort();

  postTitles.forEach((titleElement, index) => {
    expect(titleElement).toHaveTextContent(expectedSortedTitles[index]);
  });
});
