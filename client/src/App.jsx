import React, {Component, useEffect, useState, useRef} from 'react';
import Related from './Related/Related.jsx';
import Outfit from './Related/Outfit.jsx';
import RatingsWidget from './Ratings/RatingsWidget.jsx';
import Overview from './overview/Overview.jsx'
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
=======

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      product: {}
    }
  }
  componentDidMount () {
    axios.get('overview/products/', {params: {id: 40348}})
      .then(response => {
        return this.setState({
          product: response.data
        }, ()=> console.log(this.state.product))
      })
  }
  render(){
    return(
      <div className="App">
        <h1> Rhydon Store </h1>
<<<<<<< HEAD
        <div style={{border: "1px solid black", height: "33em"}}>
          Product Overview Component
          <h2>Product Overview Component</h2>
        </div>
        <div style={{border: "1px solid black", height: "33em"}}>
          <Related />
        </div>
        <div>
          <RatingsWidget product={this.state.product}/>
        </div>
=======
        <Overview />
>>>>>>> main
      </div>
    );
>>>>>>> 0388dca0260346029c03a1274208098b7ac5d926
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


  return (
    <div className="app">
      {Object.keys(product).length !== 0 ? [
        <Related product={product.data} updateCurrentProduct={updateCurrentProduct}/>,
        <Outfit productStyle={productStyle.data} outfits={outfits} removeOutfit={removeOutfit} addToOutfit={addToOutfit} carouselPos={carouselPos}/>,
      ] : null}
    </div>
  );
}

export default App;
