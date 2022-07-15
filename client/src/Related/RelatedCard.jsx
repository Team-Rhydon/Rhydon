import React, {Component, useState} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';
function RelatedCard({card, position, id, showModal, showPreview, updateCurrentProduct, setProduct}) {
  let {category, name, originalPrice, rating, salePrice, thumbnail} = card;
  return (
    <div className={`slide ${position}`}>
      <div className='product-card'>
        <img className='thumb' onClick={(e) => {
          showPreview(e, id);
        }}src={thumbnail}/>
        <div className="star" onClick={(e) => {
          showModal(e, id);
        }}
        />
        <div onClick={(e) => {
          updateCurrentProduct(e, id);
        }}className="description">
          <p>{category}</p>
          <b>{name}</b>
          {salePrice === null ?
          <p>${Math.round(originalPrice)}</p> :
          <>
            <del>$SALE{Math.round(originalPrice)}</del>
            <ins>$SALE{Math.round(salePrice)}</ins>
          </>
          }
          {rating ? <StarRating rating={rating} /> : null}
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
