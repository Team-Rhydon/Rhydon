import React from 'react';

let Description = ({slogan, description, features}) => {

  return (<>
    <h2>{slogan.toUpperCase()}</h2>
    <div>{description}</div>
    {features ? features.map(({feature, value}, i) => {
        return <div key={i}>{feature} : {value}</div>
      }) : null}
  </>)
}

export default Description;