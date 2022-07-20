/* eslint-disable react/prop-types */
import React from 'react';
import {GiCheckMark} from 'react-icons/gi';
import line from '../../assets/icons/thick-vertical-line.png';

const Description = ({slogan, description, features}) => {
  return (<div className="o-description-container">
    <h2 className='d-slogan'>{slogan.toUpperCase()}</h2>

    <div className="d-description">{description}</div>
    <img className='d-line' src={line}/>
    <div className="d-features">
      {features ? features.map(({feature, value}, i) => {
        return <div key={i}><GiCheckMark /> {feature} : {value}</div>;
      }) : null}
    </div>
  </div>);
};

export default Description;
