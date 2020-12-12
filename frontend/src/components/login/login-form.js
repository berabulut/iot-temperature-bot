import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  Typography,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
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
  error: {
    fontWeight: "600",
    color: "red",
    paddingBottom: "20px",
    display: "block",
  },
});

const LoginForm = (props) => {
  const { classes } = props;
  const [mailInput, setMailInput] = React.useState("");
  const [passwordInput, setPasswordInput] = React.useState("");
  const [error, setError] = React.useState({
    status: false,
    message: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.id === "email") {
      setMailInput(e.target.value);
    } else {
      setPasswordInput(e.target.value);
    }
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.which === 13) {
      handleSubmit(e);
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isEmpty = (input) => {
    if (input.length >= 1) {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = () => {
    if (validateEmail(mailInput) && !isEmpty(passwordInput)) {
      setError({
        status: false,
        message: "",
      });

      props.openProgress();

      let formJSON = JSON.stringify({
        email: mailInput,
        password: passwordInput,
      });

      loginUser(formJSON)
        .then((value) => {
          if (value.statusCode !== 200) {
            props.openAlert("error", "Something is wrong!");
            props.closeProgress();
          } else if (value.statusCode === 200) {
            GlobalStates.update((s) => {
              s.loginStatus = true;
              s.deviceID = value.deviceID;
            });
            setTimeout(() => {
              history.push({
                pathname: `/dashboard/id:${value.deviceID}`,
                state: { loginStatus: true, deviceID: value.deviceID },
              });
            }, 400);
          }
        })
        .catch((err) => {
          props.openAlert("error", err);
          props.closeProgress();
        });
    } else if (!validateEmail(mailInput)) {
      setError({
        status: true,
        message: "Not a valid email!",
      });
    } else if (isEmpty(passwordInput)) {
      setError({
        status: true,
        message: "Password input can't be empty!",
      });
    }
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
              onKeyPress={handleKeypress}
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
              onKeyPress={handleKeypress}
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
        {error.status === true && (
          <Typography className={classes.error} variant="p">
            {error.message}
          </Typography>
        )}
      </div>
    </Paper>
  );
};

export default withStyles(formStyles)(LoginForm);
