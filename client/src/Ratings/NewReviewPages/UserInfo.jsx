import React, {useState} from "react";

const UserInfo = props => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setName(nickname)
    props.setEmail(email)
  }

  return (
    <form className="info-form" onSubmit={handleSubmit}>
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