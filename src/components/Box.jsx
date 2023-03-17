import "./Box.css";
import Img from "../assets/img.png";
import Badge from "../assets/badge.png";
import { useRef } from "react";

const Box = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  const handleEnter = () => {
    card2Ref.current.style.transform = "rotate(0deg)";
    card3Ref.current.style.transform = "rotate(0deg)";
  };

  const handleLeave = () => {
    card2Ref.current.style.transform = "rotate(5deg)";
    card3Ref.current.style.transform = "rotate(10deg)";
  };

  return (
    <div className="box">
      <div
        className="card"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        ref={card1Ref}
      >
        <img src={Img} alt="" />
        <div className="details">
          <div className="newbtn">
            <img src={Badge} alt="" />
          </div>
          <h2>Developer handoff improvements</h2>
          <p>
            You`ll now see a highlight around Symbols on the Canvas and in the
            Inspector.
          </p>
          <div className="dot-share">
            <div className="dots">
              <div className="dot selected"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="share">Share</div>
          </div>
        </div>
        <div className="card2" ref={card2Ref}></div>
        <div className="card3" ref={card3Ref}></div>
      </div>
    </div>
  );
};

export default Box;
