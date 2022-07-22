import React from 'react';
import addBtn from '../assets/icons/tshirt-4244.svg';


function OutfitAddCard({product, position, id, addToOutfit, removeOutfit}) {
  return (
    <div className={`slide outfit-p1 add-card`}>
      <div onClick={(e) => addToOutfit(e, product)} className='outfit-card'>
        {/* <div className='card-outline' onClick={(e) => addToOutfit(e, product)}> */}
          <div>
          <img src={addBtn} className="add-btn"/>
          {/* <p className='plus-logo'>+</p> */}
          </div>
          {/* <div className='add-btn-desc-container'> */}
          {/* <IoIosArrowBack
              /> */}
            <div className='add-btn-desc'>CLICK TO ADD PRODUCT</div>
            <div className='add-btn-plus center-vert-horz'>+</div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default OutfitAddCard;