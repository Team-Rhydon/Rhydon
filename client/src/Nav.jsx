import React, {} from 'react';
import logo from './assets/logos/rhydon-logos_black 2.png';
import search from './assets/icons/icons8-search-30.svg';
import Search from './Search.jsx';
function Nav({updateCurrentProduct}) {
  return (
    <div className='nav-bar'>
      <div className='nav-container'>
        <div className='left-nav'>
          <img alt='main logo to default product' onClick={(e) => updateCurrentProduct(e,'40351' )} className='logo' src ={logo}/>
        </div>
        <div className='right-nav'>
        <Search updateCurrentProduct={updateCurrentProduct}/>
          <div onClick={(e) => {
            document.getElementsByClassName('search-btn')[0].classList.add('hidden');
            document.getElementsByClassName('search')[0].classList.remove('hidden');
          }} className='search-btn'>
            <img alt='search icon' className='search-icon-init' src={search}/>
            <span className='search-icon-init'>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
