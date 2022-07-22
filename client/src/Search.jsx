import React, {Component, useState, useEffect, useRef} from 'react';
import search from './assets/icons/icons8-search-30.svg';
import closeBtn from './assets/icons/xmark-solid.svg';
import axios from 'axios';
import _, {debounce} from 'lodash';

function Search({updateCurrentProduct}) {

  const [inputValue, setInputValue] = useState('');

  function onSearchChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  function makeSearch(e) {
    e.preventDefault();
    const params = {params: {id: inputValue}};
    axios.get('/overview', params).then(({data}) => {
      updateCurrentProduct(null, inputValue);
    }).catch((err) => {
      console.log(err);
      alert('Cannot find product id');
    });
  }

  return (
    <div className='search hidden'>
      <div className='search-bar'>
        <label htmlFor="header-search">
        </label>
        <form onSubmit={(e) => {makeSearch(e)}}>
        <input
            value={inputValue}
            onChange={(e)=> {
              onSearchChange(e);
            }}
            type="text"
            className="header-search"
            placeholder="Search by product id"
        />
        </form>
    <div className='search-btn-container' onClick={(e) => {makeSearch(e)}}>
    <img
    className='search-icon center-vert-horz' src={search}/>
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