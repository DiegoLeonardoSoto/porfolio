import React from "react";
import { useState } from "react";

export const context = React.createContext();

export const MouseContextProvider = ({ children }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  return (
    <context.Provider value={{ mouseX, setMouseX, mouseY, setMouseY }}>
      {children}
    </context.Provider>
  );
};
