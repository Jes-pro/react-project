import React from "react";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="first todo" />
      <Todo text="second todo" />
      <Todo text="third todo" />
    </div>
  );
}

export default App;
