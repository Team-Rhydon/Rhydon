import React, {useRef, useEffect} from 'react';
import ReactDom from 'react-dom';
import { createRoot, unmountComponentAtNode } from 'react-dom/client';
import renderer from 'react-test-renderer';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';


import App from '../App.jsx';

import Nav from '../Nav.jsx';
import RatingsWidget from '../Ratings/RatingsWidget';
// describe('App', () => {
//   test('uses jest-dom', () => {
//     document.body.innerHTML = `
//       <span data-testid="not-empty"><span data-testid="empty"></span></span>
//       <div data-testid="visible">Visible Example</div>
//     `

//     expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
//     expect(screen.getByText('Visible Example')).toBeVisible()
//   })
// });

describe('App', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  test('renders components', () => {
    const root = createRoot(container);
    act(() => {
      // render(<Nav />);
      render(<RatingsWidget />)
    });
    // const element = screen.getByTestId("appChild")
    const widget = screen.getByTestId("widget")
    // screen.debug();
    // expect(element).toBeInTheDocument();
    expect(widget).toBeInTheDocument();
  });


});