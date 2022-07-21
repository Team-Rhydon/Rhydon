import React, {useState} from "react";
import ReviewPhotos from './ReviewPhotos.jsx';

const UserInfo = props => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    props.setSum(summary);
    props.setBody(body);
    // props.setPhotos(photos);
    props.setName(nickname);
    props.setEmail(email);
    props.page(prevPage => prevPage + 1);
  }

  return (
    <form className="info-form" onSubmit={handleSubmit}>
      <h3>Please give a one sentence summary of how you feel about the {props.details.name}</h3>
      <div className="New-Review-Summary">
        <input
          placeholder="(Optional) Example: Best purchase ever!"
          value={summary}
          maxLength={60}
          onChange={(e)=>setSummary(e.target.value)}
          />
        </div>
      <br></br>
      <h3>*Please let us know exactly how you feel about the {props.details.name}.* </h3>
      <div className="New-Review-Body">
        <textarea
          name="textarea"
          placeholder="Why did you like the product or not?"
          value={body}
          onChange={(e)=>setBody(e.target.value)}
          minLength={50}
          maxLength={1000}
          required
        />
      </div>
      <br></br>
      <h3>Enhance your review with your photos!</h3>
      <ReviewPhotos setPhotos={props.setPhotos} />
      <h3>*Enter your info*</h3>
      <label>Nickname:</label>
      <input
        type="text"
        value={nickname}
        placeholder="Example: jackson11!"
        onChange={(e)=> setNickName(e.target.value)}
        maxLength={60}
        required
        />
      <p>For privacy reasons, do not use your full name or email address</p>
      <label>Email:</label>
      <input
        type="text"
        placeholder="Example: jackson11@email.com"
        value={email}
        onChange={e=> setEmail(e.target.value)}
        maxLength={60}
        required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
      />
      <p>For authentification reasons, you will not be emailed</p>
      <div className="container-btn">
        <input className="submit-btn" type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default UserInfo;