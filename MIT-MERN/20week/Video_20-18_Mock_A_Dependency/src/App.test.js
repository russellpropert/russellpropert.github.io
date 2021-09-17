import {render} from '@testing-library/react';
import App from './App';


// mock component
jest.mock('./components/MyComponent', () => () => (<div>Hello, World!</div>));

test('moching test', () => {
  const {container} = render(<App />);
  expect(container.textContent).toMatch('Hello, World!');
});