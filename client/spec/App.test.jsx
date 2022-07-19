import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App.jsx';
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

it('App renders without crashing', () => {
  act(() => {
    createRoot(container).render(<App />);
  })

  act(() => {
    createRoot(container).render(<App />);
  })

  screen.debug;
  screen.queryByTestId(container, 'the-app')
})
