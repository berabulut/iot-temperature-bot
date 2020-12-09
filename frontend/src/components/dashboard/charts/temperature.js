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

const TemperatureChart = (props) => {
  const { classes } = props;
  const percentage = 24;
  return (
    <div className={classes.componentContainer}>
      <CircularProgressbar
        styles={buildStyles({
          textColor: "white",
          pathColor: "rgb(255 135 0)",
        })}
        value={percentage}
        text={`${percentage}°C`}
      />
      <Typography className={classes.title} variant="h4">
        TEMPERATURE
      </Typography>
    </div>
  );
};

export default withStyles(pageStyles)(TemperatureChart);
