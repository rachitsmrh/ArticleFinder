import React, { useEffect, useState } from "react";

const ReadArticle = (props) => {
  const article = useSelector((store) => store.articles.article);

  console.log("j", article);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // if (trigger === 0) {
    dispatch(fetchArticle(id)); // PBpartA
    // dispatch(fetchNewsInfo());
    // }
  }, []);
  useEffect(() => {
    return () => {
      dispatch(clearNewsArticle()); // PBpart

      // Anything in here is fired on component unmount.
    };
  }, []);

  const url = `https://link.springer.com/content/pdf/${article.doi}`;

  return (
    <object
      data={url}
      type="application/pdf"
      width="100%"
      height="100%"
    ></object>
  );
};

export default ReadArticle;
