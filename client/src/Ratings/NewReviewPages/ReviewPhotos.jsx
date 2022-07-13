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
      {photoStorage.map((photoSrc, index) => <img key={index} src={photoSrc} />)}
      <button type="submit" onClick={handleSubmit}>Submit Photos</button>
    </div>
  )
}

export default ReviewPhotos;