import React, { useEffect, useState } from "react";
import data from "../../components/data/Articles.json";
import { Document, Page } from "react-pdf";

import { Link } from "react-router-dom";

// import Button from 'components/atoms/Button';
import Article from "../../components/Article";
import ArticleContainer from "../../components/ArticleContainer";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

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

  const url = `https://link.springer.com/content/pdf/${doi}`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // function changePage(offset) {
  //   setPageNumber(prevPageNumber => prevPageNumber + offset);
  // }

  // function previousPage() {
  //   changePage(-1);
  // }

  // function nextPage() {
  //   changePage(1);
  // }

  return (
    <>
      <ArticleContainer>
        {
          // articles.length > 0 ? (
          Object.keys(article).length > 0 ? (
            <div className="news-library-student">
              <div className="static-library-student"></div>
              <div className="bcg-library-student target">
                <div className="static1">
                  <Link to={`/articles`} className="action go-back">
                    <ArrowBackIcon />
                  </Link>
                </div>
                <div className="brief">
                  <h3>Brief</h3>
                  <p className="paragraph">{article.brief}</p>
                </div>
                <Document
                  file={url}
                  options={{ workerSrc: "/pdf.worker.js" }}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                  ))}
                </Document>
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

{
  /*       <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
          >
          <Page pageNumber={pageNumber} />
          </Document>
          <div>
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
          </div>  */
}
