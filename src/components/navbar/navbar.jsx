import React, { useContext, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { NavBool } from "../contexts/navbarcontext";
export default function Navbar() {
  // const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const { isActive, setIsActive } = useContext(NavBool);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(isActive ? "/menu" : "/homepage");
    }, 0.9);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, [isActive, navigate]);

  const toggleClass = () => {
    setIsActive(!isActive); // Toggle the active state
  };
  return !isActive ? (
    <div className="bg-transparent navbar w-full">
      <span className="w-full flex justify-between items-center px-5">
        <Link to={"/homepage"}>
          {/* <p className="uppercase text-white">Bryan Anoruo</p> */}
          <img
            src="./images/logo.png"
            className="w-4 scale-[2] translate-x-5 m-auto"
            alt=""
          />
        </Link>
        {/* <Link to={"/menu"} delay> */}
        {/* <img src="/images/logo.svg" alt="Logo" /> */}
        <div
          className={`icon-container ${isActive ? "active" : ""}`}
          onClick={toggleClass}
        >
          <div className="circle large-circle"></div>
          <div className="circle small-circle"></div>
          <div className="icon-line line1"></div>
          <div className="icon-line line2"></div>
          <div className="icon-line line3"></div>
        </div>
        {/* </Link> */}
        <a
          className="hidden md:block lg:block decoration-clone"
          target="_blank"
          href="https://drive.google.com/file/d/10aJ9bH8wlfaPAm4gBGRSWZGmHnBBXd6d/view"
          rel="noreferrer"
        >
          <p className="uppercase text-white">resume</p>
        </a>
      </span>
    </div>
  ) : (
    <div className="bg-transparent navbar w-full">
      <span className="w-full flex justify-between items-center px-5">
        <div className="invisible">
          <Link to={"/homepage"}>
            <img
              src="./images/logo.png"
              className="w-4 scale-[2] translate-x-5 m-auto"
              alt=""
            />
          </Link>
        </div>

        <div
          className={`icon-container ${isActive ? "active" : ""}`}
          onClick={toggleClass}
        >
          <div className="circle large-circle"></div>
          <div className="circle small-circle"></div>
          <div className="icon-line line1"></div>
          <div className="icon-line line2"></div>
          <div className="icon-line line3"></div>
        </div>
        {/* </Link> */}
        <span className="flex gap-2 w-fit justify-center items-center">
          <img
            className=""
            src="./images/dark-lightmode.svg"
            alt="lightAndDark"
          />
          <p className="text-white">turn on the light</p>
        </span>
      </span>
    </div>
  );
}
