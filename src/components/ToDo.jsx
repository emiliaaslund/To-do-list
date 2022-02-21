import React, { useState } from "react";

function Items(props) {
  const [checked, setChecked] = useState("false");

  function handleRemove() {
    const id = props.data.id;
    props.removeItem(id);
  }

  function handleToggle() {
    setChecked(!checked);
  }

  return (
    <div className="container">
      <input type="checkbox" onClick={handleToggle} />
      <h2 className={checked ? "check" : "completed"}>{props.data.title}</h2>
      <button className="remove-btn" onClick={handleRemove}>
        X
      </button>
    </div>
  );
}

export default Items;
