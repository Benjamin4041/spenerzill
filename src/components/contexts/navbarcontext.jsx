import React, { createContext, useState } from "react";

export const NavBool = createContext();

export default function Navbarcontext({ children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <NavBool.Provider value={{ isActive, setIsActive }}>
      {children}
    </NavBool.Provider>
  );
}
