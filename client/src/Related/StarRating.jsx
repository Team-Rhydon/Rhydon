import React, {Component, useState} from 'react';
function StarRating({rating}) {

  let percent = Math.floor(((rating/5) * 100)/5) * 5 + '%';
    return (
      <div className='star-rating'>
        <div className="stars"><div className="filled-stars" style={{width: percent}}></div></div>
      </div>
    );
}

export default StarRating;