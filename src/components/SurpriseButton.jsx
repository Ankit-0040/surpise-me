import { useState } from "react";
import { getRandomColor } from "../utils/colors";
import { getRandomMessage } from "../utils/messages";
import "../styles/SurpriseButton.css";

const SurpriseButton = ({ setBgColor = () => { } }) => {

  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [buttonText, setButtonText] = useState("Try to Click Me!");

  const moveButton = () => {
    const newTop = Math.random() * 80 + 10;
    const newLeft = Math.random() * 80 + 10;

    setPosition({ top: `${newTop}%`, left: `${newLeft}%` });

    const newColor = getRandomColor();

    setBgColor(prevColor => newColor === prevColor ? getRandomColor() : newColor);

    setButtonText(getRandomMessage());
  };


  return (
    <button
      className="surprise-button"
      style={{ top: position.top, left: position.left }}
      onMouseEnter={moveButton}
    >
      {buttonText}
    </button>
  );
};

export default SurpriseButton;
