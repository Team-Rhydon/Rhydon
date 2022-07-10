import React, {useState, useEffect} from 'react';
import axios from 'axios';

let ImageGallery = ({get}) => {

  const [image, setImage] = useState()

  let getImage = () => {
    get('/overview/styles')
      .then(({data}) => {
        setImage(prevState => {
          return data[0].photos[0].url
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
    </>)
  }

  return(
    <>{show}</>
  )
}

export default ImageGallery