import React, {useState, useRef} from "react";

const Characteristics = (props) => {
  const [characteristics, setCharacteristics] = useState(null);
  const disabled = useRef(true);
  function handleSubmit(event) {
    event.preventDefault();
    props.setChars(characteristics);
  }

  const descriptions = {
    Size: ['A size too Small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide'],
    Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
    Length: ['Runs short', 'Runs Short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Quality: ['Poor', 'Below Average', 'What I expected', 'Pretty Great', 'Perfect'],
    Fit: ['Runs Tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide',  'Too wide']
  }
  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(props.chars).map(([char, {id}])=>{
        return (
        <div key={id} onChange={e=> setCharacteristics({...characteristics, [id]:Number(e.target.value)})} className={char}>
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
            <span>
              {!characteristics || characteristics[id] === undefined
              ?"...None selected"
              :<span>
                {`...${descriptions[char][(characteristics[id]-1)]}`}
                </span>}
            </span>
        </div>)
      })}
      <br></br>
      {characteristics
        && Object.keys(props.chars).length === Object.keys(characteristics).length
          ? disabled.current = false
          : disabled.current = true
      }
      <div className="container-btn">
        <input disabled={disabled.current} type="submit" value="Submit"/>
      </div>
    </form>
  )
}

export default Characteristics;
