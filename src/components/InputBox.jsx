import React, { useState } from "react";

function InputBox(props) {
  const [task, setTask] = useState("");

  function handleChange(event) {
    const inputValue = event.target.value;
    setTask(inputValue);
  }

  function handleClick() {
    if (task !== "") {
      setTask("");
      props.addTitle(task);
    }
  }

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={handleChange}
      />
      <button className="add-btn" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
}

export default InputBox;
