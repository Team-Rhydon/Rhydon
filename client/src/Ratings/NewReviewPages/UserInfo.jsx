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
    <div style={{width: "100%"}}>

        <label style={{width: "33%"}}>Nickname:</label>
        <input style={{width: "66%"}}
          type="text"
          value={nickname}
          placeholder="Example: jackson11!"
          onChange={(e)=> setNickName(e.target.value)}
          required
          />
        <p>For privacy reasons, do not use your full name or email address</p>

      <br></br>
      <div>
        <label style={{width: "33%"}}>Email:</label>
        <input style={{width: "66%"}}
          type="text"
          placeholder="Example: jackson11@email.com"
          value={email}
          onChange={e=> setEmail(e.target.value)}
          required
        />
        <p>For authentification reasons, you will not be emailed</p>
        </div>
      <br></br>
      <button type="submit" onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default UserInfo;