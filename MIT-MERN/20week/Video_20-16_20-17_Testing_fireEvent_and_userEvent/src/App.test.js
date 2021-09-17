import {render, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('ToDo', () => {
  const {getByText, getByLabelText} = render(<App />)

  getByText('To-do List');
  getByLabelText('Add to-do item');
  getByText(/submit task #/i);
});

test('Add Items To List', () => {
  const {getByText, getByLabelText} = render(<App />)

  const input = getByLabelText('Add to-do item')
  fireEvent.change(input, {target: {value: 'wash car'}});
  fireEvent.click(getByText('Submit Task #4'));

  // confirm data
  getByText('wash car');
  getByText('Submit Task #5');
});

// userEvent test block
test('User Event', () => {
  const {getByText, getByLabelText} = render(<App />)

  const input = getByLabelText('Add to-do item');
  const button = getByText('Submit Task #5');

  userEvent.type(input, 'Learn more JavaScript');
  userEvent.click(button);

  // confirm data
  getByText('Learn more JavaScript');
  getByText('Submit Task #6');
});