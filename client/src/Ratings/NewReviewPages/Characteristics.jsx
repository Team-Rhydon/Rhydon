import React, {useState} from "react";

const Characteristics = (props) => {
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let characteristics = {
      Fit: fit,
      Length: length,
      Comfort: comfort,
      Quality: quality,
      Width: width,
      Size: size
    }
    props.setChars(characteristics);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div onChange={e=> setSize(e.target.value)} className="Size" >
        <h4>Size</h4>
        <label> 1
          <input type="radio" value="1" name="Size" />
        </label>
        <label>2
          <input type="radio" value="2" name="Size" />
        </label>
        <label>3
          <input type="radio" value="3" name="Size" />
        </label>
        <label>4
          <input type="radio" value="4" name="Size" />
        </label>
        <label>5
          <input type="radio" value="5" name="Size" />
        </label>
      </div>
      <div onChange={e=> setWidth(e.target.value)} className="Width">
        <h4>Width</h4>
        <label> 1
          <input type="radio" value="1" name="Width" />
        </label>
        <label>2
          <input type="radio" value="2" name="Width" />
        </label>
        <label>3
          <input type="radio" value="3" name="Width" />
        </label>
        <label>4
          <input type="radio" value="4" name="Width" />
        </label>
        <label>5
          <input type="radio" value="5" name="Width" />
        </label>
      </div>
      <div onChange={e=> setComfort(e.target.value)} className="Comfort">
        <h4>Comfort</h4>
        <label> 1
          <input type="radio" value="1" name="Comfort" />
        </label>
        <label>2
          <input type="radio" value="2" name="Comfort" />
        </label>
        <label>3
          <input type="radio" value="3" name="Comfort" />
        </label>
        <label>4
          <input type="radio" value="4" name="Comfort" />
        </label>
        <label>5
          <input type="radio" value="5" name="Comfort" />
        </label>
      </div>
      <div onChange={e=> setQuality(e.target.value)} className="Quality">
        <h4>Quality</h4>
        <label> 1
          <input type="radio" value="1" name="Quality" />
        </label>
        <label>2
          <input type="radio" value="2" name="Quality" />
        </label>
        <label>3
          <input type="radio" value="3" name="Quality" />
        </label>
        <label>4
          <input type="radio" value="4" name="Quality" />
        </label>
        <label>5
          <input type="radio" value="5" name="Quality" />
        </label>
      </div>
      <div onChange={e=> setLength(e.target.value)} className="Length">
        <h4>Length</h4>
        <label> 1
          <input type="radio" value="1" name="Length" />
        </label>
        <label>2
          <input type="radio" value="2" name="Length" />
        </label>
        <label>3
          <input type="radio" value="3" name="Length" />
        </label>
        <label>4
          <input type="radio" value="4" name="Length" />
        </label>
        <label>5
          <input type="radio" value="5" name="Length" />
        </label>
      </div>
      <div onChange={e=> setFit(e.target.value)} className="Fit">
        <h4>Fit</h4>
        <label> 1
          <input type="radio" value="1" name="Fit" />
        </label>
        <label>2
          <input type="radio" value="2" name="Fit" />
        </label>
        <label>3
          <input type="radio" value="3" name="Fit" />
        </label>
        <label>4
          <input type="radio" value="4" name="Fit" />
        </label>
        <label>5
          <input type="radio" value="5" name="Fit" />
        </label>
        <input type="submit" value="Submit"/>
      </div>
    </form>
  )
}

export default Characteristics;