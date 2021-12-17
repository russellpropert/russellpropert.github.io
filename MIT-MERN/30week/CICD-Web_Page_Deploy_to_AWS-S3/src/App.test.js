import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from './App';

function render1(component) {
  const root = document.createElement('div');
  ReactDOM.render(component, root);
  return root;
}

test('ToDo1', () => {
  const root = render1(<App />);

  // after rendering our component
  // use DOM APIs (query selector) to make assertations

  // This is a programmatic test

  expect(root.querySelector('h1').textContent).toBe('To-do List');
  expect(root.querySelector('label').textContent).toBe('Add to-do item');
  expect(root.querySelector('button').textContent).toBe('Submit');
  expect(root.getElementsByClassName('input')[0].getAttribute('placeholder')).toBe('Add Todo ...');
});

test('ToDo2', () => {
  const {getByText, getByLabelText} = render(<App />)

  // after rendering our component
  // use DOM APIs (query selector) to make assertations

  // This test is more like the user experiance

  expect(getByText('To-do List')).not.toBeNull();
  expect(getByLabelText('Add to-do item')).not.toBeNull();
  expect(getByText('Submit')).not.toBeNull();
});

test('ToDo3', () => {
  const {getByText, getByLabelText} = render(<App />)

  // after rendering our component
  // use DOM APIs (query selector) to make assertations

  // This works too

  getByText('To-do List');
  getByLabelText('Add to-do item');
  getByText('Submit');
});