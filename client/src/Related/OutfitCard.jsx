import React, {Component, useState} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

function OutfitCard({outfit, position, id, addToOutfit, removeOutfit}) {
  if (!outfit) {
    return;
  }
  let originalPrice, salePrice, thumbnail, img;
  const {name, category, features} = outfit.details;
  const {ratings} = outfit.reviews;
  const styles = outfit.styles.results;
  let count = 0;
  let total = 0;
  for (const val in ratings) {
    let value = Number(val);
    const cnt = Number(ratings[val]);
    count = count + cnt;
    total = total + (value * cnt);
  }
  const rating = total/count;

  for (let j = 0; j < styles.length; j++) {
    if (styles[j]['default?']) {
      originalPrice = styles[j].original_price;
      salePrice = styles[j].sale_price;
      thumbnail = styles[j].photos[0].thumbnail_url;
      img = styles[j].photos[0].url;
      break;
    } else {
      originalPrice = styles[j].original_price;
      salePrice = styles[j].sale_price;
      thumbnail = styles[j].photos[0].thumbnail_url;
      img = styles[j].photos[0].thumbnail_url;
    }
  }

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
