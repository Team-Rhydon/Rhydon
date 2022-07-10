import React, {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx'
import axios from 'axios';

let ImageGallery = ({get}) => {

  const [image, setImage] = useState()
  const [albumn, setAlbumn] = useState()

  let getImage = () => {
    get('/styles')
      .then(({data}) => {
        setImage(prevState => {
          console.log(data)
          return data[0].photos[0].url
        });
        setAlbumn(prevState => {
          return data
        })
      })
      .catch(err => console.log("this is error", err))
  }

  useEffect(() => {
    getImage()
  }, [])

  let show;
  if (image) {
    show = (<>
    <h2>ImageGallery</h2>
    <div>{image ? <img src={image} width="300" height="300"/> : ''}</div>
    <Carousel />
    </>)
  }

  return(
    <>{show}</>
  )
}

export default ImageGallery