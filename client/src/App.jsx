/* eslint-disable max-len */
/* eslint-disable guard-for-in */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState, useRef, Suspense} from 'react';
import Nav from './Nav.jsx';
import Overview from './overview/Overview.jsx';
const Related = React.lazy(()=>import('./Related/Related.jsx'));
const Outfit = React.lazy(()=>import('./Related/Outfit.jsx'));
const RatingsWidget = React.lazy(()=>import('./Ratings/RatingsWidget.jsx'));
import axios from 'axios';

function App() {
  const [product, setProduct] = useState();
  const [outfits, setOutfit] = useState({});
  const [cartData, updateCart] =useState([]);
  const ratingsRef = useRef();

  useEffect(() => {
    updateCurrentProduct(null, '40348'); // air force 1's
    // updateCurrentProduct(null, '40351'); // yeasy
    // updateCurrentProduct(null, '40346'); // joggers
    // updateCurrentProduct(null, '40344'); // camo onesie
    // updateCurrentProduct(null, '40376'); // oout of stock size
    // updateCurrentProduct(null, '40353'); // stones
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

  function hidePreview() {
    const modal = document.getElementsByClassName('preview')[0];
    modal.classList.add('hidden');
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
      let positions;
      if (position === 'outfit-p1') {
        positions = {
          'outfit-pleft': 'outfit-pleft',
          'outfit-p1': 'outfit-p1',
          'outfit-p2': 'outfit-p1',
          'outfit-p3': 'outfit-p2',
          'outfit-p4': 'outfit-p3',
          'outfit-pright': 'outfit-p4',
        };
      } else if (position ==='outfit-p2') {
        positions = {
          'outfit-pleft': 'outfit-pleft',
          'outfit-p1': 'outfit-p1',
          'outfit-p2': 'outfit-p2',
          'outfit-p3': 'outfit-p2',
          'outfit-p4': 'outfit-p3',
          'outfit-pright': 'outfit-p4',
        };
      } else if (position ==='outfit-p3') {
        positions = {
          'outfit-pleft': 'outfit-pleft',
          'outfit-p1': 'outfit-p1',
          'outfit-p2': 'outfit-p2',
          'outfit-p3': 'outfit-p3',
          'outfit-p4': 'outfit-p3',
          'outfit-pright': 'outfit-p4',
        };
      } else {
        positions = {
          'outfit-pleft': 'outfit-pleft',
          'outfit-p1': 'outfit-p1',
          'outfit-p2': 'outfit-p2',
          'outfit-p3': 'outfit-p3',
          'outfit-p4': 'outfit-p4',
          'outfit-pright': 'outfit-p4',
        };
      }
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

  const ratingsScroll = (ref=ratingsRef) => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  if (!product) return null;
  return (
    <div data-testid="" className="app">
      <Nav updateCurrentProduct={updateCurrentProduct} setProduct={setProduct}/>
      <div className='widgets'>
        <Overview
          className="overview-widget"
          ratingsRef={ratingsRef}
          ratingsScroll={ratingsScroll}
          cartData={cartData}
          updateCart={updateCart}
          {...product}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Related key='related' product={product} updateCurrentProduct={updateCurrentProduct} hidePreview={hidePreview}/>
          <Outfit key='outfit' product={product} outfits={outfits} removeOutfit={removeOutfit} addToOutfit={addToOutfit}/>
          <RatingsWidget details={product.details} meta={product.reviews} ratingsRef={ratingsRef}/>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
