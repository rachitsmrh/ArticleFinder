/* eslint-disable prefer-destructuring */
import React from "react";
// import { Link } from 'react-router-dom';

// import Button from 'components/atoms/Button';
import "./index.scss";
// import data from 'containers/News/components/news.json';

import Paragraph from "./components/paragraph";
import ParagraphDismantle from "./components/ParagraphDismantle";

import Image from "./components/Image";

const News = (props) => {
  const article = props.news;

  // const id = props.match.params.id;
  const SwitchCase = (prop) => {
    switch (prop.value.role) {
      case "title":
        return <p className="article_title standard">{prop.value.text}</p>;
      case "heading":
        return <h1 className="heading standard">{prop.value.text}</h1>;
      case "heading2":
        return <h2 className="heading standard">{prop.value.text}</h2>;
      case "heading3":
        return <h2 className="heading standard">{prop.value.text}</h2>;
      case "brief":
        return (
          <div>
            <h3 className="brief">Brief</h3>
            <Paragraph text={prop.value.text} />
          </div>
        );

      case "paragraph":
        return (
          <div>
            <Paragraph text={prop.value.text} />
          </div>
        );
      case "paragraph_dismantle":
        return (
          <div>
            <ParagraphDismantle data={prop.value.data} />
          </div>
        );

      case "image":
        return <Image source={prop.value.source} url={prop.value.url} />;

      case "ordered_list":
        return (
          <div className="ol">
            <h3>{prop.value.heading}</h3>

            <ol>
              {prop.value.points.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ol>
          </div>
        );
      case "unordered_list":
        return (
          <div className="unol">
            <h3>{prop.value.heading}</h3>

            <ul>
              {prop.value.points.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </div>
        );

      default:
        return "";
    }
  };

  return (
    <>
      <div className="main1">
        {article &&
          article.map((e, index) => <SwitchCase value={e} key={index} />)}
        {props.vocab !== "true" ? <div></div> : ""}
        {props.children}
      </div>
    </>
  );
};

export default News;
