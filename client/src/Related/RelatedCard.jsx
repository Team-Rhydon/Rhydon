import React, {Component, useState} from 'react';
import StarRating from './StarRating.jsx';
function RelatedCard({card}) {
  let {category, features, img, name, originalPrice, rating, salePrice} = card;
    return (
      <div className="related-card">
        <iframe src={img} title='item'></iframe>
        <p>{category}</p>
        <b>{name}</b>
        <p>${Math.round(originalPrice)}</p>
        {rating ? <StarRating rating={rating} /> : null}
      </div>
    );
}

export default RelatedCard;
