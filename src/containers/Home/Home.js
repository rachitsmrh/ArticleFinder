import React, { useState, useEffect } from "react";
import "./Home.scss";
import { makeStyles } from "@material-ui/core/styles";

// import "./Login.scss";

// REDUX ACTIONS IMPORT
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    textAlign: "center",
    backgroundColor: "#f3f7f7",
    justifyContent: "center",
  },
});

const Home = () => {
  const classes = useStyles();

  // function to handle the image change event

  return (
    <div className="home__screen">
      <div className="home__screen__container">
        <div className="home__content__container">
          <div className="home__heading">
            <h1>
              A online library where you can find articles easily and save your
              time by reading its summary.
            </h1>
          </div>
        </div>
        <div className="home__image__container">
          <div className="home__image">
            <img
              src="https://img.freepik.com/free-vector/personal-virtual-library-flat-composition-with-2-young-men-sitting-books-reading-electronic-texts-vector-illustration_1284-30796.jpg?t=st=1647520142~exp=1647520742~hmac=5be925cf47d14c495546f576ca94d28a3a70e1d2cdd318c5f808639031e0faaf&w=740"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
