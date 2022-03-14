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
  const {
    news: { articleData },
  } = props;
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
          <div>
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
          <div>
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
        {articleData &&
          articleData.map((e, index) => <SwitchCase value={e} key={index} />)}
        {props.vocab !== "true" ? (
          <div>
            {article.vocabulary.length > 0 && <h3>Vocabulary</h3>}
            {article.vocabulary.length > 0 && (
              <div className="vocab">
                {article.vocabulary.length > 0 &&
                  article.vocabulary.map((e, index) => (
                    <div key={index} className="voc">
                      <span className="standard ">{e.word} :</span> &nbsp;
                      <span>{e.meaning}</span> &nbsp;
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : (
          ""
        )}
        {props.children}
      </div>
    </>
  );
};

export default News;
