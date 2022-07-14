import React, {useState, useEffect} from "react";

const ReviewPhotos = props => {
  const [photos, setPhotos] = useState([]);
  const [photoStorage, setPhotoStorage] = useState([]);


  useEffect(()=> {
    if (photos.length < 1 || photos.length > 4) {
      return;
    }
    const newPhotoStorage = [];
    photos.forEach(photo => newPhotoStorage.push(URL.createObjectURL(photo)));
    setPhotoStorage(newPhotoStorage);
  }, [photos]);

  function handlePhotoChange(event) {
    setPhotos([...photos, ...event.target.files]);
    console.log(photos)
    console.log(photoStorage)
  }

  function handleSubmit (event) {
    event.preventDefault()
    props.setPhotos(photoStorage);
    console.log('submitted photos')
  }

  return (
    <div className="Review-Photos">
      <input type="file" multiple accept="image/*" onChange={handlePhotoChange} />
      <br></br>
      {photoStorage.map((photoSrc, index) => <div key={index}>
        <span>Image # {index + 1}</span>
          <img style={{height: "5vh", width: "5vw"}}  src={photoSrc} />
          <br></br>
      </div>)}
      <button type="submit" onClick={handleSubmit}>Submit Photos</button>
    </div>
  )
}

export default ReviewPhotos;