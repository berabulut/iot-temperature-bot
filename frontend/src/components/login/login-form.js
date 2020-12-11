import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api";
import { GlobalStates } from "../../store";

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

const LoginForm = (props) => {
  const { classes } = props;
  const [mailInput, setMailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setMailInput(e.target.value);
    } else {
      setPasswordInput(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formJSON = JSON.stringify({
      email: mailInput,
      password: passwordInput,
    });

    loginUser(formJSON)
      .then((value) => {
        if (value.statusCode !== 200) {
          props.openAlert("error", "Something is wrong!");
        } else if (value.statusCode === 200) {
          GlobalStates.update((s) => {
            s.loginStatus = true;
            s.deviceID = value.deviceID
          });
          setTimeout(() => {
            history.push({
              pathname: `/iot-temperature-bot/dashboard/id:${value.deviceID}`,
              state: { loginStatus: true, deviceID: value.deviceID },
            });
          }, 400);
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
          justify="center"
          style={{ marginTop: "10px", paddingBottom: "15px" }}
        >
          <Button
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
            style={{ textTransform: "none", marginBottom: "10px" }}
          >
            Login
          </Button>
        </Grid>
      </div>
    </Paper>
  );
};

export default withStyles(formStyles)(LoginForm);
