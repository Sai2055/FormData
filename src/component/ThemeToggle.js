import { useState } from "react";
const ThemeToggle = () => {
  const [buttonState, setButtonState] = useState(false);
  //   const [Color, setColor] = useState({ background: "white" });
  function handleThemeToggle() {
    setButtonState(!buttonState);
    // setColor();
  }
  const themeStyles = {
    background: buttonState ? "black" : "white",
    color: buttonState ? "white" : "black",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease",
  };
  return (
    <div style={themeStyles}>
      <button
        onClick={handleThemeToggle}
        //
      >
        {buttonState && buttonState
          ? "Switch to LightTheme"
          : " Switch to DarkTheme"}
      </button>
    </div>
  );
};
export default ThemeToggle;
