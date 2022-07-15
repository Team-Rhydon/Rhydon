import React, {Component, useEffect, useState, useRef} from 'react';
import Related from './Related/Related.jsx';
import Overview from './overview/Overview.jsx';
import Outfit from './Related/Outfit.jsx';
import RatingsWidget from './Ratings/RatingsWidget.jsx';
import axios from 'axios';
import _ from 'lodash';

function App() {
  const [product, setProduct] = useState(null);
  const [metaData, setMetaData] = useState(null);
 // const [related, setRelated] = useState(null);
 // const [productStyle, setProductStyle] = useState({});
  const [outfits, setOutfit] = useState(null);
  const [carouselPos, setCarouselPos] = useState(null);

  const getRequests = {
    metadata: axios.get('/reviews/meta', {params: {product_id: 40348}}),
    overview: axios.get('/overview', {params: {id: 40348}}),
    related: axios.get('/related', {params: {id: 40348}})
  }

  function sendRequest(fn) {
    return ()=>{
      return fn;
    }
  }

  useEffect(() => {
    updateCurrentProduct(null, '40348');
  }, []);

  function updateCurrentProduct(e, id) {
    // const params = {params: {id: id}};
    // axios.get('/reviews/meta', params).then(({data}) => {
    //   console.log(data);
    let promiseArray = [
      sendRequest(getRequests.metadata)(),
      sendRequest(getRequests.overview)()
      // sendRequest(getRequests.related)()
    ];

    Promise.all(promiseArray)
      .then(response => {
        console.log(response[1].data)
        setMetaData(response[0].data);
        setProduct(response[1].data);
//        setRelated(response[2].data)
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



  if (!product) {
    return null;
  }
  return (
    <div className="app">
      {/* <Overview product={product}/> */}
      {/* {Object.keys(product).length !== 0 ? [
        <Related product={product.details} updateCurrentProduct={updateCurrentProduct}/>,
        <Outfit productStyle={productStyle.data} outfits={outfits} removeOutfit={removeOutfit} addToOutfit={addToOutfit} carouselPos={carouselPos}/>,
      ] : null} */}
      <RatingsWidget meta={metaData} details={product.details} />
    </div>
  );
}

export default App;
