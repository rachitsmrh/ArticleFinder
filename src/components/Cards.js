import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

// import PropTypes from "prop-types";

// ACTIONS IMPORT

// MATERIAL_UI IMPORTS

import "./Card.scss";

const useStyles = makeStyles({
  card: {
    height: 300,
  },
  image: {
    width: "auto",
    margin: "auto",
  },
});

const Cards = (props) => {
  const classes = useStyles();

  return (
    <>
      <CardActionArea className={`course__button }`}>
        <Card className={` news-item  ${classes.card} simulation-dsfe-card`}>
          <div className="news-chips-student">
            <Chip className="topic-student" label={props.topic} />
          </div>
          <CardMedia
            component="img"
            alt="story image"
            height="200"
            className={classes.image}
            image={props.image}
            title={props.topic}
          />
          <CardContent>
            <Typography
              className="news-item-title-student"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {props.title}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>{" "}
    </>
  );
};
// Cards.propTypes = {
//   id: PropTypes.number,
//   topic: PropTypes.string,
//   image: PropTypes.string,
// };

export default Cards;
