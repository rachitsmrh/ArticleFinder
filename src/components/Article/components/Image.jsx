import React from "react";

const Image = (props) => {
  return (
    <div className="article__div__image">
      <img className="article__image" src={props.url} />
      <div className="imagedetail">
        {/* <span className="standard ">Source</span> :<span>{props.source}</span> */}
      </div>
    </div>
  );
};

export default Image;
