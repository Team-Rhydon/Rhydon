import React, {useState} from "react";

const Characteristics = (props) => {
  const [characteristics, setCharacteristics] = useState({})
  console.log(props.chars)

  function handleSubmit(event) {
    event.preventDefault();
    props.setChars(characteristics);
  }

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(props.chars).map(([char, {id}])=>{
        return (
        <div key={id} onChange={e=> setCharacteristics(prevState => {prevState[id]= Number(e.target.value); return prevState})} className={char}>
           <h4>{char}</h4>
            <label> 1
              <input type="radio" value={1} name={char} />
            </label>
            <label>2
              <input type="radio" value={2} name={char} />
            </label>
            <label>3
              <input type="radio" value={3} name={char} />
            </label>
            <label>4
              <input type="radio" value={4} name={char} />
            </label>
            <label>5
              <input type="radio" value={5} name={char} />
            </label>
        </div>)
      })}
      <br></br>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default Characteristics;
