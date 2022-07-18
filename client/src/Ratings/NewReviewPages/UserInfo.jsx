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
    <form onSubmit={handleSubmit} style={{width: "100%"}}>
      <label>Nickname:</label>
      <input style={{width: "99%"}}
        type="text"
        value={nickname}
        placeholder="Example: jackson11!"
        onChange={(e)=> setNickName(e.target.value)}
        maxLength={60}
        required
        />
      <p>For privacy reasons, do not use your full name or email address</p>
      <label>Email:</label>
      <input style={{width: "99%"}}
        type="text"
        placeholder="Example: jackson11@email.com"
        value={email}
        onChange={e=> setEmail(e.target.value)}
        maxLength={60}
        required pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
      />
      <p>For authentification reasons, you will not be emailed</p>
      <div className="container-btn">
        <input type="submit" value="Submit" />
      </div>
    </form>
  )
}

export default UserInfo;