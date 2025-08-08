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

test('deletes a post', async () => {
  const user = userEvent.setup();
  render(<App />);

  const postTitleToDelete = /남자 코트 추천/i;
  
  // 1. 삭제할 게시물이 처음에는 화면에 있는지 확인
  const postElement = screen.getByText(postTitleToDelete);
  expect(postElement).toBeInTheDocument();

  // 2. 해당 게시물과 관련된 '삭제' 버튼을 찾아서 클릭
  //    postElement에서 가장 가까운 list div를 찾고, 그 안에서 삭제 버튼을 찾음
  const postContainer = postElement.closest('.list');
  const deleteButton = within(postContainer).getByRole('button', { name: /삭제/i });
  await user.click(deleteButton);

  // 3. 해당 게시물 제목이 더 이상 화면에 없는지 확인
  const deletedPost = screen.queryByText(postTitleToDelete);
  expect(deletedPost).not.toBeInTheDocument();
});
