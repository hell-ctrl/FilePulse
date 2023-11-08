import react from "react";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp, AiFillCloseCircle} from "react-icons/ai";
import "../styles/AboutPopup.css";

function AboutPopup({ setClosedAPopup }) {
  return <>
    <div className="popupA">
      <button className="close" onClick={() => setClosedAPopup(true)}><AiFillCloseCircle /></button>
      <div className="logo-container">
        <img src="../../public/logo2.png" alt="Logo"></img>
      </div>
      <div className="socials">
        <ul>
          <li><a href="https://github.com/hell-ctrl"><AiFillGithub /></a></li>
          <li><a href="https://www.instagram.com/mneto_nx"><AiFillInstagram /></a></li>
          <li><a href="https://wa.me/559887583208"><AiOutlineWhatsApp /></a></li>
        </ul>
      </div>
    </div>
    <div className="overlay"></div>
  </>
}

export default AboutPopup;
