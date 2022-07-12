import React from 'react';

let Description = ({slogan, description, features}) => {

  return (<>
    <h3>{slogan}</h3>
    <div>{description}</div>
    {features ? features.map(({feature, value}, i) => {
        return <div key={i}>{feature} : {value}</div>
      }) : null}
  </>)
}

export default Description;