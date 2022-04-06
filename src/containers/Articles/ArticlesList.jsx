import React, { useEffect } from "react";
import data from "../../components/data/Articles.json";
import Cards from "../../components/Cards";
import { Link } from "react-router-dom";
import article from "../../assets/images/article.png";
import { useSelector, useDispatch } from "react-redux";
import PaginationLibrary from "../../components/PaginationLibrary";
import FilteredChip from "../../components/Chip/FilteredChip";

import "./ArticlesList.scss";
import { fetchArticles } from "./slice";

const ArticlesList = () => {
  const articles = useSelector((store) => store.articles.articles);
  const page = useSelector((store) => store.articles.page);
  const rowsPerPage = useSelector((store) => store.articles.rowsPerPage);
  const sideFilter = useSelector((store) => store.articles.sideFilter);

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

  useEffect(() => {
    const query = `${sideFilter}`;
    dispatch(fetchArticles({ query }));
  }, [sideFilter]);

  // const articles = data.articles;
  // articles.forEach((a) => {
  //   a["titleImg"] = article;
  // });
  console.log(articles);
  return (
    <div className="library-student">
      <FilteredChip filterArray={articlesArray} type="Simulation" />
      <div className="library-articles-filter">
        <div className="pagination-filter-button">
          {articles.length > 0 && (
            <PaginationLibrary
              data={articles}
              page={page}
              // setPage={setPage}
              rowsPerPage={rowsPerPage}
              // setRowsPerPage={setRowsPerPage}
              count={articles.length}
            />
          )}
        </div>
      </div>

      <h2 className="main-heading">Browse Articles</h2>
      <div className="library-student-cards">
        {articles.length > 0 &&
          articles
            .slice(
              page === 0 ? 0 : page * rowsPerPage,
              page === 0 ? rowsPerPage : (page + 1) * rowsPerPage
            )
            .map((n, i) => {
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
