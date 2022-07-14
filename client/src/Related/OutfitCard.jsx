import React, {Component, useState} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

function OutfitCard({outfit, position, id, addToOutfit, removeOutfit}) {
  const {
    category, features, img, url, name, originalPrice, rating, salePrice, thumbnail,
  } = outfit;
  const {carouselPos} = position;
  return (
    <div className={`slide ${position} outfit`}>
      <div className='product-card'>
        <img className='thumb outfit' src={thumbnail}/>
        <div className="remove-outfit" onClick={(e) => {
          removeOutfit(e, id, position);
        }}
        />
        <div className="description">
          <p>{category}</p>
          <b>{name}</b>
          <p>${Math.round(originalPrice)}</p>
          {rating ? <StarRating rating={rating} /> : null}
        </div>
      </div>
    </div>
  );
}

export default OutfitCard;
