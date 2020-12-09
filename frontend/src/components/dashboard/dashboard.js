import React from "react";
import { withStyles, Container, Grid, Divider } from "@material-ui/core";
import TemperatureChart from "./charts/temperature";
import HumidityChart from "./charts/humidity";
import LocationMap from "./charts/location";
import { fetchLocation } from "../../api";

const pageStyles = (theme) => ({
  componentContainer: {
    background: "#4d5aa5",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  divider: {
    backgroundColor: "white",
    width: "100%",
    marginTop: "3.5%"
  },
  worldmapGrid: {
    width: "580px",
    height: "650px"
  }
});

const Dashboard = (props) => {
  const { classes } = props;
  const [locationData, setLocationData] = React.useState({});

  React.useEffect(() => {
    let isMounted = true;
    let formJSON = JSON.stringify({
      deviceID: props.deviceID
    });
    fetchLocation(formJSON)
    .then((value) => {
      if(value.statusCode === 200 && isMounted) {
        setLocationData({
          countryCode: value.countryCode,
          location: value.location
        })
      }
      else {
        if(isMounted) {
          setLocationData({
            countryCode: "UK",
            location: "Greenwich / London"
          })
        }
      }
    })
  }, [])

  return (
    <Container className={classes.componentContainer} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TemperatureChart />
        </Grid>
        <Grid item sm={6} xs={12}>
          <HumidityChart />
        </Grid>
        <Divider className={classes.divider} />
        <Grid className={classes.worldmapGrid} item xs={12}>
          <LocationMap locationData={locationData} />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default withStyles(pageStyles)(Dashboard);
