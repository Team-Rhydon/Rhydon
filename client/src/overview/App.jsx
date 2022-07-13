import React, {useState, useEffect} from "react";
import axios from 'axios'
import ProductInformation from "./components/ProductInformation.jsx";
import StyleSelector from "./components/StyleSelector.jsx";
import AddToCart from "./components/AddToCart.jsx";
import ImageGallery from "./components/ImageGallery.jsx";

let App = (props) => {

  const [productID, setProductID] = useState(40346)
  const [price, setPrice] = useState();

  const defaultProps = {
    productId: productID,
    price: price,
    get: (endpoint) => {
      return axios.get('http://localhost:3000' + endpoint, {
        params: {
          id: defaultProps.productId
        }
      });
    }
  }

  const changePrice = (sale) => {
    return setPrice(prevState => `$${sale}`)
  }

  const changeProduct = (ID) => {
    return setProductID(prevState => ID)
  }

  return (
    <div>
      <ImageGallery {...defaultProps} />
      <ProductInformation {...defaultProps}/>
      <StyleSelector {...defaultProps} changePrice={changePrice.bind(this)}/>
      {/* <AddToCart /> */}
    </div>
  )
}


export default App;