import { useState } from "react";

export default function App(props) {
  const [showTooltip, setShowTooltip] = useState(false);

  function handleMouseOver(e) {
    e.target.style.backgroundColor = "yellow";
  }

  function handleMouseLeave(e) {
    e.target.style.backgroundColor = "";
  }

  return (
    <div className="App">
      <div
        className="element-with-tooltip"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
        {showTooltip && <div className="tooltip">This is a tooltip</div>}
      </div>
    </div>
  );
}
