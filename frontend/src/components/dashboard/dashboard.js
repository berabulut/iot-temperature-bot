import React from "react";
import { withStyles, Container, Grid, Divider } from "@material-ui/core";
import TemperatureChart from "./charts/temperature";
import HumidityChart from "./charts/humidity";
import LocationMap from "./charts/location";
import TemperatureTable from "./charts/temperature-table";
import HumidityTable from "./charts/humidity-table";
import ShareData from "./share/share";
import { fetchLocation, fetchSensorData } from "../../api";

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
    marginTop: "3.5%",
    marginBottom: "3.5%",
  },
  worldmapGrid: {
    width: "580px",
    height: "550px",
  },
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationData: {},
      sensorData: {},
    };
  }

  componentDidMount() {
    let formJSON = JSON.stringify({
      deviceID: this.props.deviceID,
    });
    fetchLocation(formJSON).then((value) => {
      if (value.statusCode === 200) {
        this.setState({
          locationData: {
            countryCode: value.countryCode,
            location: value.location,
          },
        });
      } else {
        this.setState({
          locationData: {
            countryCode: "GB",
            location: "Greenwich / London",
          },
        });
      }
    });
    fetchSensorData(formJSON).then((value) => {
      this.setState({
        sensorData: value,
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.componentContainer} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid className={classes.worldmapGrid} item xs={12}>
            <LocationMap
              closeProgress={this.props.closeProgress}
              locationData={this.state.locationData}
            />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item sm={6} xs={12}>
            <TemperatureChart sensorData={this.state.sensorData} />
          </Grid>
          <Grid item sm={6} xs={12}>
            <HumidityChart sensorData={this.state.sensorData} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item md={6} sm={12} xs={12}>
            <TemperatureTable sensorData={this.state.sensorData} />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <HumidityTable sensorData={this.state.sensorData} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid item xs={12}>
            <ShareData sensorData={this.state.sensorData} />
          </Grid>
          <Divider className={classes.divider} />
        </Grid>
      </Container>
    );
  }
}

export default withStyles(pageStyles)(Dashboard);
