import React, { useState } from "react";

export default function HighScore() {
  const [name, setName] = useState("");

  // Define handleChange() function here 💖
  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div className="arcade-container">
      <form className="arcade-form">
        <label htmlFor="name">
          Enter your name
          <br />
          <br />
          (3 characters max)
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
          className="arcade-input"
        />
        <br />
      </form>
      <p>
        Top Score: <strong>{name}</strong>{" "}
      </p>
    </div>
  );
}
