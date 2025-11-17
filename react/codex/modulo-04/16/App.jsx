// Every website goes through events, from the first time it loads to every interaction we have with it(clicks, form submissions, etc.)
// Events are actions that occur while you are on a website.
// You can write code that "listens" for these events and causes a reaction! These are called event handlers.

import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function App() {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ShoppingItem name="🍌 bananas" />
      <ShoppingItem name="🍞 bread" />
      <ShoppingItem name="🥛 milk" />
    </div>
  );
}
