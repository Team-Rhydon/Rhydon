import React, {Component, useEffect, useState, useRef} from 'react';
import Related from './Related/Related.jsx';
import Overview from './overview/Overview.jsx';
import Outfit from './Related/Outfit.jsx';
import RatingsWidget from './Ratings/RatingsWidget.jsx';
import axios from 'axios';
import _ from 'lodash';

function App() {
  const [product, setProduct] = useState();
  // const [productStyle, setProductStyle] = useState({});
  const [outfits, setOutfit] = useState({});
  const [carouselPos, setCarouselPos] = useState({});

  useEffect(() => {
    updateCurrentProduct(null, '40348');
  }, []);

  function updateCurrentProduct(e, id) {
    const params = {params: {id: id}};
    axios.get('/overview', params).then(({data}) => {
      setProduct(data);
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
        'outfit-p1': 'outfit-p2',
        'outfit-p2': 'outfit-p3',
        'outfit-p3': 'outfit-p4',
        'outfit-p4': 'outfit-pright',
        'outfit-pright': 'outfit-pright',
      };
      const carouselPoscopy = {...carouselPos};
      for (const id in carouselPos) {
        carouselPoscopy[id] = positions[carouselPos[id]];
      }
      carouselPoscopy[id] = 'outfit-p1';
      setCarouselPos(carouselPoscopy);
    }
  }

  function removeOutfit(e, id, position) {
    e.preventDefault();
    if (id in outfits) {
      const newOutfit = {...outfits};
      delete newOutfit[id];
      setOutfit(newOutfit);

      const swaps = {
        'outfit-p1': ['outfit-p2', 'outfit-p3', 'outfit-p4', 'outfit-pright'],
        'outfit-p2': ['outfit-p3', 'outfit-p4', 'outfit-pright'],
        'outfit-p3': ['outfit-p4', 'outfit-pright'],
        'outfit-p4': ['outfit-pright'],
      };
      const positions = {
        'outfit-p2': 'outfit-p1',
        'outfit-p3': 'outfit-p2',
        'outfit-p4': 'outfit-p3',
        'outfit-pright': 'outfit-p4',
      };
      const carouselPoscopy = {...carouselPos};
      delete carouselPoscopy[id];

      const positionsToSearch = swaps[position];
      for (let i = 0; i < positionsToSearch.length; i++) {
        const curPosSearch = positionsToSearch[i];
        for (const id in carouselPoscopy) {
          if (carouselPoscopy[id] === curPosSearch) {
            carouselPoscopy[id] = positions[carouselPos[id]];
          }
        }
      }
      setCarouselPos(carouselPoscopy);
    }
  }

  if (!product) return null;

  return (
    <div className="app">
      <Overview {...product}/>
      {/* {Object.keys(product).length !== 0 ? [
        <Related product={product.data} updateCurrentProduct={updateCurrentProduct}/>,
        <Outfit productStyle={productStyle.data} outfits={outfits} removeOutfit={removeOutfit} addToOutfit={addToOutfit} carouselPos={carouselPos}/>,
      ] : null} */}
      {/* <RatingsWidget product={product.data} /> */}
    </div>
  );
}

export default App;
