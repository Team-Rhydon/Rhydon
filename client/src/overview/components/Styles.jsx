import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';


let Styles = ({styles}) => {
  let {results} = styles;

  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    setSelectedStyle(results[0])
    setProductStyles(results)
  }, [])

  const commonProps = {productStyles, selectedStyle, setSelectedStyle}

  return(
    <div>
      <ImageGallery selectedStyle={selectedStyle}/>
      <StyleSelector {...commonProps}
      // productStyles={productStyles}
      // selectedStyle={selectedStyle}
      // setSelectedStyle={setSelectedStyle}
      />
      <AddToCart {...commonProps}/>
    </div>
  )
}

export default Styles