import React from 'react';
import addBtn from '../assets/icons/icons8-add-100.png';
function OutfitAddCard({product, position, id, addToOutfit, removeOutfit}) {
  return (
    <div className={`slide outfit-p1`}>
      <div className='product-card add-card outfit-card'>
        <div className='thumb card-outline' onClick={(e) => addToOutfit(e, product)}>
        <img src={addBtn} className="btn center-vert-horz"/>
        </div>
      </div>
    </div>
  );
}

export default OutfitAddCard;
