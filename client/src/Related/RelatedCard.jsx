import React, {Component, useState} from 'react';
import axios from 'axios';
import StarRating from './StarRating.jsx';

function RelatedCard({card, position, id, showModal, showPreview, updateCurrentProduct}) {
  const {
    category, features, img, url, name, originalPrice, rating, salePrice, thumbnail,
  } = card;
  const {carouselPos} = position;

  // return (
  //   <div className={`card ${position}`}>
  //     <div className="card__img-cont">
  //       <div className="card__img-cont__img"
  //         onClick={(e) => {
  //           showPreview(e);
  //         }}
  //         style={{
  //           height: '250px',
  //           width: '100%',
  //           minWidth: '100px',
  //           background: `no-repeat center/50% url(${thumbnail})`,
  //           backgroundSize: 'cover',
  //         }}
  //       />
  //       <div
  //         className="card__img-cont__star"
  //         value={id}
  //         onClick={(e) => {
  //           showModal(e, id);
  //         }}
  //       />
  //     </div>
  //     <div
  //       className="card__description"
  //       onClick={(e) => updateCurrentProduct(e, id)}
  //     >
  //       <p value={id}>{category}</p>
  //       <b value={id}>{name}</b>
  //       <p value={id}>${Math.round(originalPrice)}</p>
  //       {rating ? <StarRating id={id} rating={rating} /> : null}
  //     </div>
  //   </div>
  // );

  return (
    <div className={`slide ${position} related`}>
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
          <p>${Math.round(originalPrice)}</p>
          {rating ? <StarRating rating={rating} /> : null}
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
