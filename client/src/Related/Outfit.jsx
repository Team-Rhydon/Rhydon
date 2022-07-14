import React, {Component, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import OutfitCard from './OutfitCard.jsx';


function Outfit({productStyle, outfits, addToOutfit, carouselPos, removeOutfit}) {
  function moveOutfitLeft(e) {
    e.preventDefault();
    if (document.getElementsByClassName('outfit-pleft').length > 0) {
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
        updatePosition(element, pos, positions[pos]);
      }
    }
  }

  function moveOutfitRight(e) {
    e.preventDefault();
    if (document.getElementsByClassName('outfit-pright').length > 0) {
      const positions = {
        'outfit-p1': 'outfit-pleft',
        'outfit-p2': 'outfit-p1',
        'outfit-p3': 'outfit-p2',
        'outfit-p4': 'outfit-p3',
        'outfit-pright': 'outfit-p4',
      };
      for (const pos in positions) {
        const element = document.getElementsByClassName(pos)[0];
        updatePosition(element, pos, positions[pos]);
      }
    }
  }

  function updatePosition(element, curPosition, newPosition) {
    element.classList.remove(curPosition);
    element.classList.add(newPosition);
  }
  return (
    <div className="related">
      <h5 className="title">YOUR OUTFIT</h5>
      <div className="carousel">
        <button onClick={(e) => addToOutfit(e, Object.keys(productStyle.data)[0])} className="add-outfit">{'+'}</button>
        <button onClick={(e) => moveOutfitLeft(e)} className="carousel-prev">{'<'}</button>
        <div className="carousel-inner">
          {Object.keys(outfits).map((id, index) => <OutfitCard
            key={id}
            addToOutfit={addToOutfit}
            removeOutfit={removeOutfit}
            id={id}
            outfit={outfits[id]}
            position={carouselPos[id]} />)}
        </div>
        <button onClick={(e) => moveOutfitRight(e)} className="carousel-next">{'>'}</button>
      </div>
    </div>
  );
}

export default Outfit;
