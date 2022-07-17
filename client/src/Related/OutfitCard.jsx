import React from 'react';
import StarRating from './StarRating.jsx';
import closeBtn from '../assets/icons/xmark-solid.svg';

function OutfitCard({outfit, position, id, removeOutfit}) {
  if (!outfit) {
    return;
  }
  let originalPrice, salePrice, thumbnail, img;
  const {name, category} = outfit.details;
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
        <div className='btn-container remove-outfit'>
        <img src={closeBtn} className="close-btn center-vert-horz" onClick={(e) => {
          removeOutfit(e, id, position);
        }}
        />
        </div>
        <div className="description">
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

export default OutfitCard;
