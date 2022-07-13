import React, {Component, useEffect, useState, useRef} from 'react';
import Related from './Related/Related.jsx';
import Overview from './Related/Overview.jsx';
import Outfit from './Related/Outfit.jsx';
import axios from 'axios';
import _ from 'lodash';
function App() {
  const [product, setProduct] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [outfits, setOutfit] = useState({});
  const [carouselPos, setCarouselPos] = useState({});
  useEffect(() => {
    updateCurrentProduct(null, '40345');
  }, []);

  function updateCurrentProduct(e, id) {
    const params = {params: {id: id}};
    axios.get('/details', params).then((data) => {
      setProduct({data});
    }).catch((err) => {
      console.log(err);
    });

    axios.get('/styles', params).then((data) => {
      setProductStyle({data});
    }).catch((err) => {
      console.log(err);
    });
  }
  function addToOutfit(e, id) {
    e.preventDefault();
    if (!(id in outfits)) {
      const newOutfit = {...outfits};
      newOutfit[id] = productStyle.data.data[id];
      setOutfit(newOutfit);

      const positions = {
        p1: 'p2',
        p2: 'p3',
        p3: 'p4',
        p4: 'pright',
        pright: 'pright',
      };
      const carouselPoscopy = {...carouselPos};
      for (const id in carouselPos) {
        carouselPoscopy[id] = positions[carouselPos[id]];
      }
      carouselPoscopy[id] = 'p1';
      setCarouselPos(carouselPoscopy);
    }
  }


  return (
    <div className="app">
      {Object.keys(product).length !== 0 ? [
        <Related product={product.data} updateCurrentProduct={updateCurrentProduct}/>,
        <Outfit productStyle={productStyle.data} outfits={outfits} addToOutfit={addToOutfit} carouselPos={carouselPos}/>,
      ] : null}
    </div>
  );
}

export default App;
