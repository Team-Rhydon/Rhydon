/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import {FaCircleNotch} from 'react-icons/fa';
import {VscCircleFilled} from 'react-icons/vsc';

const ExpandedIcons = ({gallery, setCurrentImage, currentImage}) => {
  const [slide, setSlide] = useState(gallery);

  const changeImage = (imageCount) => {
    setCurrentImage({
      count: imageCount,
      url: gallery[imageCount].url,
    });
  };

  useEffect(() => {
    setSlide(gallery);
  }, [gallery]);

  return (
    <section className="i-expanded-icons">
      {slide.map((obj, i) => {
        return <div key={i} onClick={() => changeImage(i)}>
          {i === currentImage.count ? <FaCircleNotch /> : <VscCircleFilled /> }
        </div>;
      })}
    </section>
  );
};
export default ExpandedIcons;
