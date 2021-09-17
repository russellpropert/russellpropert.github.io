import {render, fireEvent, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {api} from './api.js'

// mock API
const mockCreateItem = (api.createItem = jest.fn());

test('Add Items To List', async () => {
  const todoText = 'Learn more Jest';
  mockCreateItem.mockResolvedValueOnce(todoText);

  const {getByText, getByLabelText} = render(<App />);
  const input = getByLabelText('Add to-do item');
  fireEvent.change(input, {target:{value: todoText}});
  fireEvent.click(getByText(/submit task #/i));

  // https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
  await waitFor(() => getByText(todoText));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining(todoText)
  );

});
