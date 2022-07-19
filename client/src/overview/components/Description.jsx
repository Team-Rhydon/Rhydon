/* eslint-disable react/prop-types */
import React from 'react';
import {GiCheckMark} from 'react-icons/gi';

const Description = ({slogan, description, features}) => {
  return (<div className="o-description-container">
    <h2>{slogan.toUpperCase()}</h2>

    <div className="d-features">{description}</div>
    {features ? features.map(({feature, value}, i) => {
      return <div key={i}><GiCheckMark /> {feature} : {value}</div>;
    }) : null}
  </div>);
};

export default Description;
