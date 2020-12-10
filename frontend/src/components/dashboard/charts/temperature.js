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
  const [percentage, setPercentage] = React.useState(24);
  React.useEffect(() => {
    if (props.sensorData.records !== undefined) {
      const data = Object.values(props.sensorData.records.sensor);
      setPercentage(data[data.length - 1].temperature);
    }
  }, [props]);
  return (
    <div className={classes.componentContainer}>
      <CircularProgressbar
        styles={buildStyles({
          textColor: "rgb(255 135 0)",
          pathColor: "rgb(255 135 0)",
          trailColor: "white"
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
