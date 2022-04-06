import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Chip from "@material-ui/core/Chip";
import { updatedsideFilter } from "../../containers/Articles/slice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginLeft: "0px",
    marginTop: "20px",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chipSelected: {
    background: `#15e6c6`,
    "&:focus": {
      background: `#15e6c6`,
      color: "white",
    },
  },
  chip: {
    background: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}));

const FilteredChip = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filteredArray = props.filterArray;
  const major = [...filteredArray];
  major.unshift("All");
  const [value, setValue] = useState(0);
  const sideFilter = useSelector((store) => store.articles.sideFilter);

  const [selectedTab, setSelectedTab] = useState(value);
  // console.log(selectedTab);
  const handleClick = (a, x) => {
    setSelectedTab(a);
    setValue(a);
    let params = "";

    const filterParams = [];
    filterParams.push(`category=${x}`);
    if (x !== "All") {
      filterParams.forEach((f) => {
        params += `&${f}`;
      });
    }
    dispatch(updatedsideFilter(params));
    // if (type === 'ebooks') {
    //   filterParams.push(`category=${x}`);
    //   if (x !== 'All') {
    //     filterParams.forEach((f) => {
    //       params += `&${f}`;
    //     });
    //   }
    //   dispatch(updatedsideFilterEbook(params));
    // }
    // if (type === 'Concepts') {
    //   filterParams.push(`subject=${x}`);
    //   if (x !== 'All') {
    //     filterParams.forEach((f) => {
    //       params += `&${f}`;
    //     });
    //   }
    //   dispatch(updatedsideFilterEbook(params));
    // }
    // if (type === 'Articles') {
    //   filterParams.push(`interestArea=${x}`);
    //   if (x !== 'All') {
    //     filterParams.forEach((f) => {
    //       params += `&${f}`;
    //     });
    //   }
    //   dispatch(updatedsideFilterEbook(params));
    // }
    // if (type === 'Simulation') {
    //   if (x === 'All') {
    //     dispatch(getSimulation());
    //   } else {
    //     filterParams.push(`${x.toLowerCase()}`);
    //     filterParams.forEach((f) => {
    //       params += `${f}`;
    //     });
    //     dispatch(updatedsideFilterEbook(params));
    //   }
    // }
  };

  return (
    <div>
      <div>{/* <Search placeholder="Search Library" /> */}</div>
      <div className={classes.root}>
        {major.map((x, index) => (
          <div key={index}>
            {value === index ? (
              <Chip
                key={index}
                label={x}
                clickable
                className={
                  selectedTab === index ? classes.chipSelected : classes.chip
                }
                id={`chip_${index}`}
                onClick={() => handleClick(index, x)}
                variant="default"
              />
            ) : (
              <Chip
                key={index}
                label={x}
                clickable
                className={
                  selectedTab === index ? classes.chipSelected : classes.chip
                }
                id={`chip_${index}`}
                onClick={() => handleClick(index, x)}
                variant="default"
              />
            )}
          </div>
        ))}
        {/* <Button
        className="button btn-orange button-learn"
        name="maths"
        onClick={() => {
          this.onChange('Maths');
        }}
      >
        Maths
      </Button>
      <Button
        className="button btn-orange button-learn"
        name="physics"
        value={this.state.name}
        onClick={() => {
          this.onChange('Physics');
        }}
      >
        Physics
      </Button>
      <Button
        className="button btn-orange button-learn"
        name="chemistry"
        value={this.state.name}
        onClick={() => {
          this.onChange('Chemistry');
        }}
      >
        Chemistry
      </Button>
      <Button
        className="button btn-orange button-learn"
        onClick={() => {
          this.onChange('Biology');
        }}
      >
        Biology
      </Button> */}
      </div>
    </div>
  );
};

export default FilteredChip;
