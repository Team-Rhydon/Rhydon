import React from 'react';

let Thumbnail = ({productStyles, setSelectedStyle}) => {

  let changeStyle = (style) => {
    setSelectedStyle(prevState => style)
  }

  return (<>
    {productStyles.map((styleObj, i) => (
      <span key={styleObj.style_id} onClick={changeStyle.bind(this, styleObj)}>
        <img src={styleObj.photos[0].url} width="40" height="40" />
      </span>
    ))}
  </>)
}

export default Thumbnail;