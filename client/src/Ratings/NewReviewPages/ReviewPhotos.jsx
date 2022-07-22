import React, {useState, useEffect} from 'react';

const ReviewPhotos = (props) => {
  const [photos, setPhotos] = useState([]);
  const [photoStorage, setPhotoStorage] = useState([]);

  const url = 'https://api.cloudinary.com/v1_1/dxhzukgow/image/upload';
  const cloudinaryPreset = 'ygdd9nwq';

  useEffect(()=> {
    if (photos.length < 1 || photos.length > 5) {
      return;
    }
    const newPhotoStorage = [];
    photos.forEach((photo) => {
      const data = new FormData();
      data.append('file', photo);
      data.append('upload_preset', cloudinaryPreset);
      data.append('cloud_name', 'dxhzukgow');
      fetch(url, {
        method: 'post',
        body: data,
      }).then((response) => response.json())
          .then((data)=> {
            newPhotoStorage.push(data.url);
          })
          .catch((err)=>console.log(err));
    });
    setPhotoStorage(newPhotoStorage);
  }, [photos]);

  function handlePhotoChange(event) {
    setPhotos([...photos, ...event.target.files]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setPhotos(()=>photoStorage);
  }

  return (
    <div className="Review-Photos">
      <input type="file" id="photoUpload" multiple accept="image/*" onChange={handlePhotoChange} />
      <br></br>
      {photoStorage.map((photoSrc, index) => <div key={index}>
        <span>Image # {index + 1}</span>
        <img style={{height: '5em', width: '5em'}} src={photoSrc} />
        <br></br>
      </div>)}
      <button className="submit-btn" type="submit" onClick={handleSubmit}>Submit Photos</button>
      {photos.length ?
        <span>{'<------make sure to hit Submit or your photos will not be added!'}</span> :
        null
      }
    </div>
  );
};

export default ReviewPhotos;
