import { useEffect, useState } from "react";
import "../styles/Sonar.css";

function Sonar() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const userDataFromLS = localStorage.getItem("userData");
    if (userDataFromLS) {
      setUserData(JSON.parse(userDataFromLS));
    }
  }, []);

  return (
    <div className="sonar-container">
      {userData? (
        <div className="image-container" dangerouslySetInnerHTML={{ __html: userData.avatar }}></div>
      ) : null }
    </div>
  )
}

export default Sonar;

