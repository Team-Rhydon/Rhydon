import React from 'react';
import addBtn from '../assets/icons/tshirt.png';
function OutfitAddCard({product, position, id, addToOutfit, removeOutfit}) {
  return (
    <div className={`slide outfit-p1 add-card`}>
      <div className='product-card add-card outfit-card'>
        <div className='thumb card-outline' onClick={(e) => addToOutfit(e, product)}>
          <div>
          <img src={addBtn} className="add-btn"/>
          {/* <p className='plus-logo'>+</p> */}
          </div>
          <div className='add-btn-desc-container'>
            <div className='add-btn-desc'>Click here to add current product to outfit</div>
            <div className='add-btn-desc'>+</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutfitAddCard;
