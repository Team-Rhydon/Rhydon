import React, {useState, useEffect} from 'react';
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
    <div className="overview-styles">
      <ImageGallery selectedStyle={selectedStyle}/>
      <section className="o-sidebar">
        <StyleSelector {...commonProps}/>
        <AddToCart {...commonProps}
        // productStyles={productStyles}
        // selectedStyle={selectedStyle}
        // setSelectedStyle={setSelectedStyle}
        />
      </section>
    </div>
  )
}

export default Styles