import React from "react";
import { withStyles, Container, Grid, Divider } from "@material-ui/core";
import TemperatureChart from "./charts/temperature";
import HumidityChart from "./charts/humidity";

const pageStyles = (theme) => ({
  componentContainer: {
    background: "#4d5aa5",
    height: "calc(100% - 142px)",
    marginTop: "2.5%",
  },
  gridContainer: {
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  divider: {
    backgroundColor: "white"
  }
});

const Dashboard = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.componentContainer} maxWidth="lg">
      <Grid className={classes.gridContainer} container spacing={3}>
        <Grid item sm={6} xs={12}>
          <TemperatureChart />
        </Grid>
        <Grid item sm={6} xs={12}>
          <HumidityChart />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default withStyles(pageStyles)(Dashboard);
