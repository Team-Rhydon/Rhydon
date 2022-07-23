/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React from 'react';
import fillIn from '../../assets/icons/nofound.png';

const Thumbnail = ({productStyles, style, setSelectedStyle}) => {
  return (
    <div className="s-thumbnail">
      {productStyles.map((styleObj, i) => (
        <img
          aria-label={`choose ${style.name}`}
          className={styleObj.style_id === style.style_id ?
            'selected-thumbnail s-thumbnail-image' :
            's-thumbnail-image s-unselected'
          }
          src={styleObj.photos[0].thumbnail_url ?
            styleObj.photos[0].thumbnail_url :
            fillIn
          }
          alt={`current style is ${style.name}`}
          key={styleObj.style_id}
          onClick={setSelectedStyle.bind(null, styleObj)}/>
      ))}
    </div>
  );
};

export default Thumbnail;
