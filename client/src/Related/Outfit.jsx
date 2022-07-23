import React, {useEffect} from 'react';
import OutfitCard from './OutfitCard.jsx';
import OutfitAddCard from './OutfitAddCard.jsx';
import nextArrow from '../assets/icons/chevron-right-solid.svg';
import prevArrow from '../assets/icons/chevron-left-solid.svg';

function Outfit({product, outfits, addToOutfit, removeOutfit}) {
  if(!outfits) {return null}
  useEffect(() => {
    outfitBtnCheck();
    if (shouldInsertAddCard() && document.getElementsByClassName('outfit-card').length > 1) {
      moveOutfitLeft(true);
    }
    if (document.getElementsByClassName('outfit-card').length > 3 && document.getElementsByClassName('outfit-p1').length === 0 && document.getElementsByClassName('outfit-pleft').length > 0) {
      const element = document.getElementsByClassName('outfit-pleft')[0];
      updatePosition(element, 'outfit-pleft', 'outfit-p1');
    } else if (document.getElementsByClassName('outfit-card').length > 3 && document.getElementsByClassName('outfit-p2').length === 0 && document.getElementsByClassName('outfit-pleft').length > 0) {
      let element = document.getElementsByClassName('outfit-p1')[0];
      updatePosition(element, 'outfit-p1', 'outfit-p2');
      element = document.getElementsByClassName('outfit-pleft')[0];
      updatePosition(element, 'outfit-pleft', 'outfit-p1');
    }
    if (document.getElementsByClassName('outfit-card').length > 3 && document.getElementsByClassName('outfit-p3').length === 0 && document.getElementsByClassName('outfit-pleft').length > 0) {
      let element = document.getElementsByClassName('outfit-p2')[0];
      updatePosition(element, 'outfit-p2', 'outfit-p3');
      element = document.getElementsByClassName('outfit-p1')[0];
      updatePosition(element, 'outfit-p1', 'outfit-p2');
      element = document.getElementsByClassName('outfit-pleft')[0];
      updatePosition(element, 'outfit-pleft', 'outfit-p1');
    }
    outfitBtnCheck();
  }, [outfits]);


  function moveLeft() {
    const positions = {
      'outfit-p4': 'outfit-pright',
      'outfit-p3': 'outfit-p4',
      'outfit-p2': 'outfit-p3',
      'outfit-p1': 'outfit-p2',
      'outfit-pleft': 'outfit-p1',
    };
    for (const pos in positions) {
      const elements = document.getElementsByClassName(pos);
      const element = elements[elements.length - 1];
      if (element) {
        updatePosition(element, pos, positions[pos]);
      }
    }
  };
  function moveOutfitLeft(shouldShift) {
    if (hasLeftSlide()) {
      moveLeft();
      outfitBtnCheck();
    }
    if (shouldShift === true) {
      moveLeft();
      outfitBtnCheck();
    }
  }

  function outfitBtnCheck() {
    if (hasLeftSlide()) {
      if (document.getElementsByClassName('outfit-prev-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('outfit-prev-container')[0].classList.remove('hidden');
      }
    } else {
      if (!document.getElementsByClassName('outfit-prev-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('outfit-prev-container')[0].classList.add('hidden');
      }
    }

    if (hasRightSlide()) {
      if (document.getElementsByClassName('outfit-next-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('outfit-next-container')[0].classList.remove('hidden');
      }
    } else {
      if (!document.getElementsByClassName('outfit-next-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('outfit-next-container')[0].classList.add('hidden');
      }
    }
  };

  function hasRightSlide() {
    return document.getElementsByClassName('outfit-pright').length > 0;
  }
  function hasLeftSlide() {
    return document.getElementsByClassName('outfit-pleft').length > 0;
  }

  function moveOutfitRight() {
    if (hasRightSlide()) {
      const positions = {
        'outfit-p1': 'outfit-pleft',
        'outfit-p2': 'outfit-p1',
        'outfit-p3': 'outfit-p2',
        'outfit-p4': 'outfit-p3',
        'outfit-pright': 'outfit-p4',
      };
      for (const pos in positions) {
        const element = document.getElementsByClassName(pos)[0];
        if (element) {
          updatePosition(element, pos, positions[pos]);
        }
      }
    }
    outfitBtnCheck();
  }

  function updatePosition(element, curPosition, newPosition) {
    element.classList.remove(curPosition);
    element.classList.add(newPosition);
  }

  function shouldInsertAddCard() {
    let id;
    if (product.details.id) {
      id = product.details.id;
    } else if (product.reviews.product_id) {
      id = product.reviews.product_id;
    } else if (product.styles.product_id) {
      id = product.styles.product_id;
    } else {
      alert('erorr in adding outfit');
      return;
    }
    if (!(id in outfits)) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <div className="related">
      <div className="title-div">
        <h5 className="title">Your Outfits</h5>
        <p className="title-lines"></p>
      </div>
      <div className="carousel">
        <div className='outfit-prev-container btn hidden' onClick={(e) => moveOutfitLeft(e)}>
          <img alt='outfit previous button' src={prevArrow} className="outfit-prev center-vert-horz"/>
        </div>
        <div className="carousel-inner">
          {shouldInsertAddCard() ? <OutfitAddCard key='add-btn' addToOutfit={addToOutfit} product={product}/> : null}
          {Object.keys(outfits).map((id, index) => <OutfitCard
            key={id}
            removeOutfit={removeOutfit}
            id={id}
            outfit={outfits[id]['product']}
            position={outfits[id]['position']} />)}
        </div>
        <div className='outfit-next-container btn hidden' onClick={(e) => moveOutfitRight(e)}>
          <img alt='outfit next button' src={nextArrow} className="outfit-next center-vert-horz"/>
        </div>
      </div>
      <div className='title'></div>
    </div>
  );
}

export default Outfit;
