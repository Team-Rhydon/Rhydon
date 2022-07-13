import React, {Component, useState, useEffect, useRef} from 'react';
import axios from 'axios';
import OutfitCard from './OutfitCard.jsx';


function Outfit({productStyle, outfits, addToOutfit, carouselPos}) {
  function moveOutfitLeft(e) {
    e.preventDefault();
    if (document.getElementsByClassName('slide pleft outfit').length > 0) {
      const positions = {
        pleft: 'p1',
        p1: 'p2',
        p2: 'p3',
        p3: 'p4',
        p4: 'pright',
      };
      for (const pos in positions) {
        const curPosition = 'slide '+ pos + ' outfit';
        const elements = document.getElementsByClassName(curPosition);
        const element = elements[elements.length - 1];
        updatePosition(element, pos, positions[pos]);
      }
    }
  }

  function moveOutfitRight(e) {
    e.preventDefault();
    if (document.getElementsByClassName('slide pright outfit').length > 0) {
      const positions = {
        p1: 'pleft',
        p2: 'p1',
        p3: 'p2',
        p4: 'p3',
        pright: 'p4',
      };
      for (const pos in positions) {
        const curPosition = 'slide '+ pos + ' outfit';
        const element = document.getElementsByClassName(curPosition)[0];
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
