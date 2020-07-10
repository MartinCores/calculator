import React from "react";

export const Result = (props) => {
  return (
    <h4 onClick={props.printResult}>
      {props.leftNum}
      {props.operator}
      {props.rightNum}
    </h4>
  );
};
