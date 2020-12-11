import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { Face, Fingerprint, DeveloperBoard } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { createUser } from "../../api";

const formStyles = (theme) => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
  paper: {
    width: "100%",
    margin: "auto",
  },
  gridContainer: {
    paddingTop: "15px",
  },
});

const RegisterForm = (props) => {
  const { classes } = props;
  const [mailInput, setMailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [deviceIDInput, setDeviceIDInput] = React.useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setMailInput(e.target.value);
    } else if (e.target.id === "password") {
      setPasswordInput(e.target.value);
    } else if (e.target.id === "deviceID") {
      setDeviceIDInput(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formJSON = JSON.stringify({
      email: mailInput,
      password: passwordInput,
      deviceID: deviceIDInput,
    });

    createUser(formJSON)
      .then((value) => {
        if (value.statusCode === 201) {
          props.openAlert("success", value.message);
          setTimeout(() => {
            history.push("/iot-temperature-bot");
          }, 750);
        } else if (value.statusCode === 200) {
          props.openAlert("error", value.message);
        } else {
          props.openAlert("error", "Something is wrong!");
        }
      })
      .catch((err) => {
        props.openAlert("error", err);
      });
  };

  return (
    <Paper className={(classes.padding, classes.paper)}>
      <div className={classes.margin}>
        <Grid
          className={classes.gridContainer}
          container
          spacing={4}
          alignItems="flex-end"
        >
          <Grid item>
            <Face />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="email"
              label="Email"
              type="email"
              fullWidth
              autoFocus
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.gridContainer}
          container
          spacing={4}
          alignItems="flex-end"
        >
          <Grid item>
            <Fingerprint />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="password"
              label="Password"
              type="password"
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.gridContainer}
          container
          spacing={4}
          alignItems="flex-end"
        >
          <Grid item>
            <DeveloperBoard />
          </Grid>
          <Grid item md={true} sm={true} xs={true}>
            <TextField
              id="deviceID"
              label="Device-ID"
              type="device"
              fullWidth
              required
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid
          className={classes.gridContainer}
          container
          justify="center"
          style={{ marginTop: "10px", paddingBottom: "15px" }}
        >
          <Button
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
            style={{ textTransform: "none", marginBottom: "10px" }}
          >
            Register
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(formStyles)(RegisterForm);
