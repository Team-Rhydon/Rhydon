import React from 'react';
import {AdvancedImage, lazyload, responsive, placeholder} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";


const CloudImg = ({url, className}) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dxhzukgow'
    }
  });

  const myImage = cld.image(url).setDeliveryType('fetch');

  return (
    <AdvancedImage
      className={className}
      cldImg={myImage}
      plugins={[responsive(100), placeholder({mode: 'pixelate'})]}
    />
  )
}

export default CloudImg;