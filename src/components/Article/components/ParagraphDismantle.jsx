import React from "react";
import PropTypes from "prop-types";

const ParagraphDismantle = (props) => {
  const { data } = props;
  const Switch = (prop) => {
    switch (prop.value.role) {
      case "normal":
        return <span>{prop.value.text}</span>;
      case "bold":
        return (
          <span className="article_bold">&nbsp;{prop.value.text}&nbsp;</span>
        );
      case "link":
        return (
          <span>
            <a className="article_link" href={prop.value.href} target="blank">
              &nbsp;{prop.value.text}&nbsp;
            </a>
          </span>
        );

      default:
        return "";
    }
  };
  return (
    <>
      <p className="paragraph">
        {data.map((item, index) => (
          <Switch value={item} key={index} />
        ))}
      </p>
    </>
  );
};

export default ParagraphDismantle;
