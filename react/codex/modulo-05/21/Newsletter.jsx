import React from "react";

export default function Newsletter() {
  return (
    <form>
      <label htmlFor="email">E-mail: </label>
      <input type="email" id="email" />
      <button type="submit">Submit</button>
    </form>
  )
}