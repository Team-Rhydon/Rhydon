import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../src/Nav.jsx';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import axios from 'axios';
import { createRoot, unmountComponentAtNode } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

function updateCurrentProduct(e, id) {
  setProduct();
  const params = {params: {id: id}};
  axios.get('/overview', params).then(({data}) => {
    setProduct(data);
  }).catch((err) => {
    console.log(err);
  });
}

it('Nav renders without crashing', () => {
  act(() => {
    createRoot(container).render(<Nav />);
  })
})

it('Nav to contain a span search', () => {
  // const root = createRoot(container);
  act(() => {
    createRoot(container).render(<Nav />);
  });
  const label = container.querySelector('span');
  expect(label.textContent).toBe('Search');
})

it('Nav to contain an image', () => {
  act(() => {
    createRoot(container).render(<Nav updateCurrentProduct={updateCurrentProduct} />);
  });
  const logo = container.querySelector('img');
  expect(logo).not.toBe(undefined);
})

