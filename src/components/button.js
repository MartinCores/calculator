import React from "react";

export const Buttons = (props) => {
  return (
    <button onClick={props.triggerClick} value={props.name}>
      {props.name}
    </button>
  );
};
