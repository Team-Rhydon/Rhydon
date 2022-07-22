import React from 'react';
import StarRating from './StarRating.jsx';
import closeBtn from '../assets/icons/xmark-solid.svg';
import image_placeholder from '../assets/icons/No-Image-Placeholder.svg';
// import line from '../assets/icons/thick-vertical-line.png';
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
      break;
    } else {
      originalPrice = styles[j].original_price;
      salePrice = styles[j].sale_price;
      thumbnail = styles[j].photos[0].thumbnail_url;
    }
  }

  if (!thumbnail) {
    thumbnail = image_placeholder;
  }
  console.log('OutfitCard');
  return (
    <div className={`slide ${position}`}>
      <div className='product-card outfit-card'>
        <img alt='outfit' className='thumb outfit' src={thumbnail}/>
        <div className='btn-container remove-outfit' onClick={(e) => {
          removeOutfit(e, id, position);
        }}>
        <img width='300' height='200' alt='close button' src={closeBtn} className="close-btn center-vert-horz"/>
        </div>
        <div className="description-outfits">
        <div className='card-name-div'>
          <p className='card-name'>{name}</p>
          <p className='vertical-line-2'>|</p>
          {/* <img width='840' height='859' alt='vertical line' src={line} className='vertical-line'/> */}
          <p className='card-category'>{category}</p>
          </div>
          {/* <p className='card-name'>{name}</p>
          <p className='card-category'>{category}</p> */}
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
