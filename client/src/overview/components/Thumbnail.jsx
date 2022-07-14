import React from 'react';

let Thumbnail = ({productStyles, setSelectedStyle}) => {

  return (<>
    {productStyles.map((styleObj, i) => (
      <span key={styleObj.style_id} onClick={setSelectedStyle.bind(null, styleObj)}>
        <img src={styleObj.photos[0].url} width="40" height="40" />
      </span>
    ))}
  </>)
}

export default Thumbnail;