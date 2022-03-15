import React from "react";
import data from "../../components/data/Articles.json";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";
import article from "../../assets/images/article.png";

import "./ArticlesList.scss";

const ArticlesList = () => {
  const articles = data.articles;
  articles.forEach((a) => {
    a["titleImg"] = article;
  });
  console.log(articles);
  return (
    <div className="library-student">
      <h2 className="main-heading">Search Articles</h2>
      <div className="library-student-cards">
        {articles.length > 0 &&
          articles.slice().map((n, i) => {
            return (
              <Link
                key={i}
                style={{ textDecoration: "none" }}
                to={`/articles/${n.id}`}
              >
                <Cards image={n.titleImg} topic={n.topic} title={n.title} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ArticlesList;
