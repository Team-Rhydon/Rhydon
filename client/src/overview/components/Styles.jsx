import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


let Styles = ({get}) => {
  const [productStyles, setProductStyles] = useState()
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    get('/styles')
      .then(({data}) => {
        setSelectedStyle(prevState => data[0])
        setProductStyles(prevState => data)
      })
  }, [])

  return(
    <div>
      <ImageGallery
        get={get}
        productStyles={productStyles}
        selected={selectedStyle}
        setStyle={setSelectedStyle}/>
      <StyleSelector
        get={get}
        selectedStyle={selectedStyle}
        setStyle={setSelectedStyle}/>
    </div>
  )
}

export default Styles