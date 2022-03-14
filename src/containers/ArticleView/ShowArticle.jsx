/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import data from "../../components/data/Articles.json";

// import { Link } from 'react-router-dom';

// import Button from 'components/atoms/Button';
import Article from "../../components/Article";
import ArticleContainer from "../../components/ArticleContainer";

import "./ShowArticle.scss";
import { useParams } from "react-router";

// import data from 'containers/News/components/news.json';

// import { fetchScroll } from 'containers/App/slice';

// import Modal from 'containers/DashboardStudent/components/Modal';
// import data from 'containers/ArticleTeacher/data.mp3';

// import ArticleTable from './components/ArticleTable';

const ShowArticle = (props) => {
  console.log("a");
  console.log(props.match);
  const { id } = useParams();
  console.log("b");

  // const articles = useSelector((store) => store.news.news);
  const article = data.articles.find((e) => e.id == id);
  console.log(article);
  // const scroll = useSelector((store) => store.global.scroll);

  return (
    <>
      <ArticleContainer>
        {
          // articles.length > 0 ? (
          Object.keys(article).length > 0 ? (
            <div className="news-library-student">
              <div className="static-library-student"></div>
              <div className="bcg-library-student target">
                <div className="brief">
                  <h3>Brief</h3>
                  <p className="paragraph">{article.brief}</p>
                </div>
                <Article news={article}></Article>
              </div>
            </div>
          ) : (
            <h2
              style={{
                width: "150px",
                height: "100px",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: "auto",
              }}
            ></h2>
          )
        }
      </ArticleContainer>
    </>
  );
};

export default ShowArticle;
