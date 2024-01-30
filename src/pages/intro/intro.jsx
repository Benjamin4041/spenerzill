import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./intro.css";
export default function Intro() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/homepage");
    }, 19000);
  }, []);
  return (
    <div className="introMainCon">
      <div className="introMainCon_InnerVideoCon">
        <video src="/images/Bryan.mp4" autoPlay muted loop></video>
      </div>
      <p className="introMainCon_P">Bryan spencer</p>
    </div>
  );
}
