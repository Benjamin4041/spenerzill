import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  return (
    <div className="bg-transparent navbar">
      <span className="w-full flex justify-between items-center px-5">
          <Link to={'/homepage'}>
              <p className="uppercase text-white">Bryan Anoruo</p>
            </Link>
            <Link to={'/menu'}>
              <img src="/images/logo.svg" alt="Logo" />
            </Link>
            <Link className="hidden md:block lg:block">
              <p className="uppercase text-white">resume</p>
            </Link>
      </span>
    </div>
  );
}
