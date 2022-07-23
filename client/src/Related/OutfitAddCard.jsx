import React from 'react';
import addBtn from '../assets/icons/tshirt-4244.svg';


function OutfitAddCard({product, position, id, addToOutfit, removeOutfit}) {
  if(!product) {return null;}
  return (
    <div className={`slide outfit-p1 add-card`}>
      <div onClick={(e) => addToOutfit(e, product)} className='outfit-card'>
          <div className='add-button-container'>
          <img alt='add button center-vert-horz' src={addBtn} className="add-btn"/>
          <div className='add-btn-plus center-vert-horz'>+</div>
          </div>
            <div className='add-btn-desc'>CLICK TO ADD PRODUCT</div>
      </div>
    </div>
  );
}

export default OutfitAddCard;
