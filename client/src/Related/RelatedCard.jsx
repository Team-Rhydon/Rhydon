import React, {Component, useState} from 'react';
import StarRating from './StarRating.jsx';
import image_placeholder from '../assets/icons/No-Image-Placeholder.svg';
function RelatedCard({card, position, id, showModal, setPreview, updateCurrentProduct, setProduct}) {
  let {category, name, originalPrice, rating, salePrice, img, thumbnail} = card;
  if (!thumbnail || !img) {
    thumbnail = image_placeholder;
    img = image_placeholder;
  }
  return (
    <div className={`slide ${position}`}>
      <div className='product-card'>
        <img className='thumb' onClick={(e) => {
          setPreview(img);
        }}src={thumbnail}/>
        <div className="star" onClick={(e) => {
          showModal(e, id);
        }}
        />
        <div onClick={(e) => {
          updateCurrentProduct(e, id);
        }}className="description">
          <p className='card-name'>{name}</p>
          <p className='card-category'>{category}</p>
          {salePrice === null ?
          <p className='card-price'>${Math.round(originalPrice)}</p> :
          <>
            <del>${Math.round(originalPrice)}</del>
            <ins>${Math.round(salePrice)}</ins>
          </>
          }
          {rating ? <StarRating rating={rating} /> : null}
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
