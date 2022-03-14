/* eslint-disable array-callback-return */
import React from "react";

const Paragraph = (props) => {
  return (
    <p className="paragraph">
      {props.text.split("\n").map((item, key) => {
        return (
          <p className="content" key={key}>
            {item}
          </p>
        );
      })}
    </p>
  );
};

export default Paragraph;
