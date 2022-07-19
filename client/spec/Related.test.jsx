import React from 'react';
import ReactDOM from 'react-dom';
import Related from '../src/Related/Related.jsx';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import axios from 'axios';
import { createRoot, unmountComponentAtNode } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import product from './product.js';
import renderer from 'react-test-renderer';

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

function hidePreview() {
  const modal = document.getElementsByClassName('preview')[0];
  modal.classList.add('hidden');
}


it('Related renders without crashing', () => {
  const root = createRoot(container);
  act(() => {
    root.render(<Related product={product.productData} updateCurrentProduct={updateCurrentProduct} hidePreview={hidePreview} />);
  })
  screen.debug();
})

// it('adds 1 + 5', () =>{
//   expect(Related.Related.showModal(null, 40344)).toBe(6);
// });

// describe('simple test', () => {
//   it('clicks it', () => {
//      const app = shallow(<App />)
//      const instance = app.instance()
//      const spy = jest.spyOn(instance, 'onClick')
//      instance.forceUpdate();

//      const p = app.find('.button')
//      p.simulate('click')
//      expect(spy).toHaveBeenCalled()
//  })
// })


  it('test the only function', () => {
      const wrapper = renderer.create(<Related product={product.ProductData} />);
      const inst = wrapper.getInstance();
      expect(inst.showModal(null,'40344')).toMatchSnapshot();
  });

