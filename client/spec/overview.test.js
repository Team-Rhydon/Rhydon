import React from 'react';
import ReactDom from 'react-dom';
import { createRoot, unmountComponentAtNode } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import {render, screen, cleanup} from '@testing-library/react';
import {productData} from './product.js';
import Overview from '../src/overview/Overview.jsx';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('should render overview component', () => {
  const root = createRoot(container);
  act(() => {
    root.render(<Overview {...productData}/>);
  });
  expect(<Overview />).toBeDefined();
});

test('should render overview component', () => {
  const root = createRoot(container);
  act(() => {
    root.render(<Overview {...productData}/>);
  });
  const test1 = screen.getByText(/onesie/i);
  expect(test1).toBeDefined();
});

test('should render overview component', () => {
  const root = createRoot(container);
  act(() => {
    root.render(<Overview {...productData}/>);
  });
  const test1 = screen.getByText(/onesie/i);
  expect(test1).toBeDefined();
});
