import React, { useState, useEffect } from "react";
import { FiInfo, FiSun } from "react-icons/fi";
import InitialPopup from "./components/InitialPopup.jsx";
import AboutPopup from "./components/AboutPopup.jsx";
import Sonar from "./components/Sonar.jsx";
import "./styles/App.css";

function App() {
  const [userData, setUserData] = useState({});
  const [closedIPopup, setClosedIPopup] = useState(false);
  const [closedAPopup, setClosedAPopup] = useState(true);

  useEffect(() => {
    const userDataFromLS = localStorage.getItem("userData");

    if (userDataFromLS) {
      setUserData(JSON.parse(userDataFromLS));
    }
  }, []);

  return (
    <div>
      {(!closedIPopup && Object.keys(userData).length === 0) && <InitialPopup setClosedIPopup={setClosedIPopup} />}
      {!closedAPopup && <AboutPopup setClosedAPopup={setClosedAPopup}/>}

      <header>
        <div className="title-container">
          <h1>File Pulse</h1>
          <span>Searching devices...</span>
        </div>
        <div className="btn-container">
          <button onClick={() => setClosedAPopup(false)}>
            <FiInfo />
          </button>
          <button>
            <FiSun />
          </button>
        </div>
      </header>
      <main>
        {(closedIPopup || Object.keys(userData).length > 0) && <Sonar />}
      </main>
    </div>
  );
}

export default App;

