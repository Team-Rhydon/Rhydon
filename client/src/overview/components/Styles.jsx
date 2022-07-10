import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ImageGallery from './ImageGallery.jsx';
import StyleSelector from './StyleSelector.jsx';


let Styles = ({get}) => {
  const [productStyles, setProductStyles] = useState({})
  const [selectedStyle, setSelectedStyle] = useState();

  return(
    <div>
      <ImageGallery get={get}/>
      <StyleSelector get={get}/>
    </div>
  )
}

export default Styles