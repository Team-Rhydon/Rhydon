import React, {Component, useState, useEffect, useRef} from 'react';
import search from './assets/icons/icons8-search-30.svg';
import closeBtn from './assets/icons/xmark-solid.svg';
function Search({}) {
  return (
    <div className='search hidden'>
      <div className='search-bar'>
      <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            className="header-search"
            placeholder="Search by product id"
            name="s"
        />
    </form>
    <div className='search-btn-container'>
    <img className='search-icon center-vert-horz' src={search}/>
    </div>
      </div>
      <div onClick={(e) => {
         document.getElementsByClassName('search-btn')[0].classList.remove('hidden');
         document.getElementsByClassName('search')[0].classList.add('hidden');
      }}className='search-close-btn-container'>
      <div className='search-close-btn center-vert-horz'>X</div>
      </div>
    </div>
  );
}

export default Search;