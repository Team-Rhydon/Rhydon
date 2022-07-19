import React from 'react';
import renderer from 'react-test renderer';
import { render, fireEvent } from '@testing-library/react';
import Overview from './src/overview/Overview.jsx';
import {screen} from '@testing-library/dom'

test('uses jest-dom', () => {
  document.body.innerHTML = `
    <span data-testid="not-empty"><span data-testid="empty"></span></span>
    <div data-testid="visible">Visible Example</div>
  `

  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement()
  expect(screen.getByText('Visible Example')).toBeVisible()
})