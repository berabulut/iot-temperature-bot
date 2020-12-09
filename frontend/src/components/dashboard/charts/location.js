import React from "react";
import { WorldMap } from "react-svg-worldmap";
import { withStyles, Typography } from "@material-ui/core";
import "./world-map.css";

const pageStyles = (theme) => ({
  componentContainer: {
    width: "100%",
    height: "100%",
    margin: "auto",
  },
  title: {
    color: "white",
    marginTop: "5.5%",
    marginBottom: "3.5%",
    fontWeight: "700",
  },
});

const LocationMap = (props) => {
  const { classes } = props;
  const [data, setData] = React.useState([
    { country: "mx", value: "Tacubaya / Mexico City" },
    { country: "us", value: null },
  ]);
  const [fetched, setFetched] = React.useState([]);

  React.useEffect(() => {
    if (props.locationData !== undefined) {
      setData([
        {
          country: props.locationData.countryCode,
          value:
            props.locationData.location !== undefined &&
            props.locationData.location.substring(
              0,
              props.locationData.location.indexOf(",")
            ),
        },
        { country: "us", value: null },
      ]);
      setTimeout(() => {
        setFetched(true);
      }, 3500);
    }
  }, [props]);

  return (
    <div className={(classes.componentContainer, "worldmap-container")}>
      {fetched === true && (
        <>
          <Typography className={classes.title} variant="h4">
            {props.locationData !== undefined
              ? props.locationData.location
              : "SOMEWHERE"}
          </Typography>
          <WorldMap
            className="xxs"
            color="#4d5aa5"
            value-suffix="people"
            size="lg"
            data={data}
          />
        </>
      )}
    </div>
  );
};

export default withStyles(pageStyles)(LocationMap);
