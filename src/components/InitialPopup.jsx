import { useEffect, useState } from 'react';
import generateRandomAvatar from '../utils/generateRandomAvatar.js';
import '../styles/InitialPopup.css';

function initialPopup({ setClosedIPopup }) {
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  useEffect(() => {
    setAvatar(generateRandomAvatar())
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleConfirmClick = () => {
    if (username) {
      localStorage.setItem("userData", JSON.stringify({username,  avatar}));
      setClosedIPopup(true)
    } else {
      setInputErrorMessage("Please, enter your username.");
    }
  };

  return <>
    <div className="popupI">
      <div className="image-container" dangerouslySetInnerHTML={{ __html: avatar }}></div>
      <div className="form">
        <span>Hello person 👋</span>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="Enter your username"></input>
        {inputErrorMessage && <p className="error-message">{inputErrorMessage}</p>}
        <div className="btn-container">
          <button className="btn new-avatar" onClick={() => setAvatar(generateRandomAvatar())}>New Avatar</button>
          <button className="btn confirm" onClick={handleConfirmClick}>Confirm</button>
        </div>
      </div>
    </div>
    <div className="overlay"></div>
  </>
}

export default initialPopup;
