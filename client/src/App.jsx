import React, {Component, useEffect, useState, useRef} from 'react';
import Related from './Related/Related.jsx';
import Overview from './overview/Overview.jsx';
import Outfit from './Related/Outfit.jsx';
import RatingsWidget from './Ratings/RatingsWidget.jsx';
import axios from 'axios';
import _ from 'lodash';

function App() {
  const [product, setProduct] = useState();
  const [outfits, setOutfit] = useState({});
  const [carouselPos, setCarouselPos] = useState({});

  useEffect(() => {
    updateCurrentProduct(null, '40348');
  }, []);

  function updateCurrentProduct(e, id) {
    setProduct();
    const params = {params: {id: id}};
    axios.get('/overview', params).then(({data}) => {
      setProduct(data);
    }).catch((err) => {
      console.log(err);
    });
  }
  function addToOutfit(e) {
    e.preventDefault();
    let id;
    if (product.details.id) {
      id = product.details.id;
    } else if (product.reviews.product_id) {
      id = product.reviews.product_id;
    } else if (product.styles.product_id) {
      id = product.styles.product_id;
    } else {
      alert('erorr in adding outfit');
      return;
    }
    if (!(id in outfits)) {
      const newOutfit = {...outfits};
      const positions = {
        'outfit-p1': 'outfit-p2',
        'outfit-p2': 'outfit-p3',
        'outfit-p3': 'outfit-p4',
        'outfit-p4': 'outfit-pright',
        'outfit-pright': 'outfit-pright',
      };
      for (const key in newOutfit) {
        newOutfit[key]['position'] = positions[newOutfit[key]['position']];
      }
      newOutfit[id] = {};
      newOutfit[id]['position'] = 'outfit-p1';
      newOutfit[id]['product'] = product;
      setOutfit(newOutfit);
    }
  }

  function removeOutfit(e, id, position) {
    e.preventDefault();
    if (id in outfits) {
      const newOutfit = {...outfits};
      delete newOutfit[id];
      const positions = {
        'outfit-p2': 'outfit-p1',
        'outfit-p3': 'outfit-p2',
        'outfit-p4': 'outfit-p3',
        'outfit-pright': 'outfit-p4',
      };
      for (const id in newOutfit) {
        const curPos = newOutfit[id]['position'];
        newOutfit[id]['position'] = positions[newOutfit[id]['position']];
        if (curPos === 'outfit-pright') {
          delete positions['outfit-pright'];
        }
      }
      setOutfit(newOutfit);
    }
  }

  if (!product) return null;
  return (
    <div className="app">
      {/* <Overview /> */}

      <Related key='related' product={product} updateCurrentProduct={updateCurrentProduct}/>,
      <Outfit key='outfit' product={product} outfits={outfits} removeOutfit={removeOutfit} addToOutfit={addToOutfit} carouselPos={carouselPos}/>
      {/* <RatingsWidget product={product.data} /> */}
    </div>
  );
}

export default App;
