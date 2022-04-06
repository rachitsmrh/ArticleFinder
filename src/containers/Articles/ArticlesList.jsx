import React, { useEffect } from "react";
import data from "../../components/data/Articles.json";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";
import article from "../../assets/images/article.png";
import { useSelector, useDispatch } from "react-redux";

import "./ArticlesList.scss";
import { fetchArticles } from "./slice";

const ArticlesList = () => {
  const articles = useSelector((store) => store.articles.articles);
  console.log("a", articles);
  const dispatch = useDispatch();
  const articlesArray = [
    "Artificial intelligence",
    "Blockchain",
    "Cloud computing",
    "Computer networks",
    "Computer vision",
    "Containerization",
    "Cybersecurity",
    "Machine learning",
    "Natural language processing",
    "Operating system",
    "Web Development",
    "microservices",
  ];
  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  // const articles = data.articles;
  // articles.forEach((a) => {
  //   a["titleImg"] = article;
  // });
  console.log(articles);
  return (
    <div className="library-student">
      {/* <FilteredChip filterArray={articlesArray} type="Simulation" /> */}

      <h2 className="main-heading">Search Articles</h2>
      <div className="library-student-cards">
        {articles.length > 0 &&
          articles.slice().map((n, i) => {
            return (
              <Link
                key={i}
                style={{ textDecoration: "none" }}
                to={`/articles/${n._id}`}
              >
                <Cards image={article} topic={n.category} title={n.title} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default ArticlesList;
