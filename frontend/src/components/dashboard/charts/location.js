import React from "react";
import { WorldMap } from "react-svg-worldmap";
import { withStyles } from "@material-ui/core";
import "./world-map.css";

const pageStyles = (theme) => ({
  componentContainer: {
	width: "100%",
	height: "100%",
    margin: "auto",
  },
  title: {
    color: "white",
    marginTop: "15%",
    fontWeight: "700",
  }
});

const LocationMap = (props) => {
  const { classes } = props;
  const data = [
    { country: "tr", value: 1389618778 }, // china
    { country: "us", value: 0 }, // india
  ];

  return (
    <div className={(classes.componentContainer, "worldmap-container")}>
      <WorldMap
	  	className="xxs"
        color="#4d5aa5"
        value-suffix="people"
        size="lg"
		data={data}
      />
    </div>
  );
};

export default withStyles(pageStyles)(LocationMap);
