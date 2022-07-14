import React, {useState} from "react";

const UserInfo = props => {
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    props.setUserInfo({
      nickname: nickname,
      email: email
    });
    return () => {console.log(nickname, email)};
  }

  return (
    <div >
      <div>
        <label style={{width: "33%"}}>Nickname:
          <input style={{width: "66%"}}
            type="text"
            value={nickname}
            placeholder="Example: jackson11!"
            onChange={(e)=> setNickName(e.target.value)}
            required
            />
        </label>
        <p>For privacy reasons, do not use your full name or email address</p>
      </div>
      <br></br>
      <div>
        <label style={{width: "33%"}}>Email:
          <input style={{width: "66%"}}
            type="text"
            placeholder="Example: jackson11@email.com"
            value={email}
            onChange={e=> setEmail(e.target.value)}
            required
            />
        </label>
        <p>For authentification reasons, you will not be emailed</p>
        </div>
      <br></br>
      <button type="submit" onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default UserInfo;