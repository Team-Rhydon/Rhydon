import React, {useState, useEffect} from 'react';
import axios from 'axios';

let StyleSelector = ({get, changePrice}) => {

  const [styles, setStyles] = useState();
  const [selected, setSelected] = useState();

  let getStyles = () => {
    get('/overview/styles')
      .then(({data}) => {
        console.log(data);
        setStyles(prevState => data)
      })
  }

  let changeStyle = (style) => {
    setSelected(prevState => style.name);
    if (style.sale_price) {
      changePrice(style.sale_price)
    } else {
      changePrice(style.original_price)
    }
  }

  useEffect(() => {
    getStyles()
  }, [])

  let show;
  if (styles) {
    show = (<>
      <h2>{selected ? <>Style &#8594; {selected}</> : <>Style &#8594; {styles[0].name}</>}</h2>
      {styles.map((styleObj) => {
      return <button
        key={styleObj.style_id}
        onClick={changeStyle.bind(this, styleObj)}
        >{styleObj.name}</button>})}
      </>)
  }
  return(
    <>
    {show}
    </>
  )
}

export default StyleSelector