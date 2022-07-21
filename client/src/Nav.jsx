import React, {Component, useEffect, useState, useRef} from 'react';
import logo from './assets/logos/rhydon-logos_black 2.png';
import search from './assets/icons/icons8-search-30.svg';
// import Search from './Search.jsx';
function Nav({updateCurrentProduct}) {

  return (
    <div className='nav-bar'>
      <div className='nav-container'>
        <div className='left-nav'>
          <img onClick={(e) => updateCurrentProduct(e,'40351' )} className='logo' src ={logo}/>
        </div>
        <div className='right-nav'>
        {/* <Search/> */}
          <div onClick={(e) => {
            document.getElementsByClassName('search-btn')[0].classList.add('hidden');
            document.getElementsByClassName('search')[0].classList.remove('hidden');
          }} className='search-btn'>
            <img className='search-icon-init' src={search}/>
            <span className='search-icon-init-text'>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
