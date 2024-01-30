import React from "react";
// import { Link } from 'react-router-dom'
import "./footer.css";
export default function Footer() {
  let time = new Date().toLocaleString();

  return (
    <div className="footer">
      <span className="footer_innerCon">
        <p className="footer_innerCon-p">Love to work with me?</p>
        <span className="footer_innerCon-innerCon">
          <hr className="innerCon_innerCon-hr" />
          <p className="innerCon_innerCon-p">
          <hr className="innerCon_innerCon-hr2" />   Reach me at
            <br />
            {/* <Link className='innerCon_innerCon-email' to={'bryananoruo@gmail.com'}> */}
            bryananoruo@gmail.com
            {/* </Link> */}
          </p>
        </span>
      </span>

      <span className="footer_innerCon2">
        <span className="footer_innerCon2-innerCon">
          <p className="innerCon2_innerCon-p">
            2022
            <img
              className="innerCon2_innerCon-img"
              src="/images/copyright.svg"
              alt="copyright"
            />
            Edition
          </p>
          <p className="innerCon2_innerCon-p2">
            {time}
            <span
              className="innerCon2_innerCon-pSpan"
              style={{ margin: "11px" }}
            >
              gmt +1
            </span>
          </p>
        </span>
        <p className="footer_innerCon2-p">
          creative collaboration between bryan anoruo & centuryleap
        </p>
      </span>
    </div>
  );
}
