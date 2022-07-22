import React, {} from 'react';
import StarRating from './StarRating.jsx';
import image_placeholder from '../assets/icons/No-Image-Placeholder.svg';
// import line from '../assets/icons/thick-vertical-line.png';
function RelatedCard({card, position, id, showModal, setPreview, updateCurrentProduct, setProduct}) {
  let {category, name, originalPrice, rating, salePrice, img, thumbnail} = card;
  if (!thumbnail || !img) {
    thumbnail = image_placeholder;
    img = image_placeholder;
  }
  return (
    <div className={`slide ${position}`} width="300" height="450">
      <div className='product-card' width="300" height="450">
        <img alt='related picture' width="300" height="450" className='thumb' onClick={(e) => {
          setPreview(img);
        }}src={thumbnail}/>
        <div className="star" onClick={(e) => {
          showModal(e, id);
        }}
        />
        <div onClick={(e) => {
          updateCurrentProduct(e, id);
        }}className="description">
          <div className='card-name-div'>
            <p className='card-name'>{name}</p>
            <p className='vertical-line-2'>|</p>
            {/* <img width='840' height='859' src={line} className='vertical-line' alt='vertical line'/> */}
            {salePrice === null ?
          <p className='card-price'>${Math.round(originalPrice)}</p> :
          <>
            <del>${Math.round(originalPrice)} </del>
            <ins>${Math.round(salePrice)}</ins>
          </>
            }
          </div>
          {/* <p className='card-name'>{name}</p>
          <p className='card-category'>{category}</p> */}
          {rating ? <StarRating rating={rating} /> : null}
          {/* {salePrice === null ?
          <p className='card-price'>${Math.round(originalPrice)}</p> :
          <>
            <del>${Math.round(originalPrice)}</del>
            <ins>${Math.round(salePrice)}</ins>
          </>
          } */}
          <p className='card-category'>{category}</p>
        </div>
      </div>
    </div>
  );
}

export default RelatedCard;
