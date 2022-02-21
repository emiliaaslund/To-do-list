import React from "react";
import { v4 as uuidv4 } from "uuid";
import Items from "./ToDo";


function ToDoList(props) {
  return (
    <div>
      {props.addItem.map((title) => {
        return (
          <Items key={uuidv4()} data={title} removeItem={props.removeItem} />
        );
      })}
    </div>
  );
}

export default ToDoList;
