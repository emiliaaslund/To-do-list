import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.js";
import "./App.css";

//components
import ToDoList from "./components/ToDoList";
import InputBox from "./components/InputBox";

function App() {
  const [items, setItems] = useState([]);

  function addItem(title) {
    setItems((prevItems) => {
      return [
        ...prevItems,
        {
          id: uuidv4(),
          title: title,
        },
      ];
    });
  }

  function removeItem(id) {
    const newItem = [...items].filter((item) => item.id !== id);
    setItems(newItem);
  }

  return (
    <div className="App">
      <h1 className="app-title">MY TO DO LIST</h1>
      <InputBox addTitle={addItem} />
      <ToDoList addItem={items} removeItem={removeItem} />
    </div>
  );
}

export default App;
