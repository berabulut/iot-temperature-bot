import React from "react";
import { withStyles, Container, Grid, Divider } from "@material-ui/core";
import TemperatureChart from "./charts/temperature";
import HumidityChart from "./charts/humidity";
import LocationMap from "./charts/location";

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
  },
  worldmapGrid: {
    width: "580px",
    height: "450px"
  }
});

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.componentContainer} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TemperatureChart />
        </Grid>
        <Grid item sm={6} xs={12}>
          <HumidityChart />
        </Grid>
        <Grid className={classes.worldmapGrid} item xs={12}>
          <LocationMap />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default withStyles(pageStyles)(Dashboard);
