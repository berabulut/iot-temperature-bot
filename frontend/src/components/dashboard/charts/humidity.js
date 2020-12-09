import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { withStyles, Typography } from "@material-ui/core";
import "react-circular-progressbar/dist/styles.css";

const pageStyles = (theme) => ({
  componentContainer: {
    width: "250px",
    margin: "auto",
  },
  title: {
	color: "white",
	marginTop: "15%",
	fontWeight: "700"
  },
});

const HumidityChart = (props) => {
  const { classes } = props;
  const percentage = 60;
  return (
    <div className={classes.componentContainer}>
      <CircularProgressbar
        styles={buildStyles({
          textColor: "white",
          pathColor: "#660F57",
        })}
        value={percentage}
        text={`${percentage}%`}
      />
      <Typography className={classes.title} variant="h4">
        HUMIDITY
      </Typography>
    </div>
  );
};

export default withStyles(pageStyles)(HumidityChart);
