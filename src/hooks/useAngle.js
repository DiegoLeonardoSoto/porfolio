import { useContext } from "react";
import { context } from "../context/MouseContextProvider";

export const useAngle = (ex, ey) => {
  const { mouseY, mouseX } = useContext(context);

  const dy = ey - mouseY;
  const dx = ex - mouseX;
  const rad = Math.atan2(dy, dx);
  const angle = (rad * 180) / Math.PI;
  return {
    angle,
    mouseX,
    mouseY,
  };
};
