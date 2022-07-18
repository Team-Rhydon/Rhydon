import React, {Component, useEffect, useState, useRef} from 'react';
import logo from './assets/logos/rhydon-logos_black 2.png';
import search from './assets/icons/icons8-search-30.svg';
function Nav({updateCurrentProduct}) {
  return (
    <div className='nav-bar'>
      <div className='nav-container'>
        <div className='left-nav'>
          <img onClick={(e) => updateCurrentProduct(e,'40346' )} className='logo' src ={logo}/>
        </div>
        <div className='right-nav'>
          <div className='search-btn'>
            <img src={search}/>
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
