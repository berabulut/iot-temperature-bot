import React from "react";
import { Paper, withStyles, Grid, TextField, Button } from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

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
    console.log("api call", {
      email: mailInput,
      password: passwordInput,
    });
    props.openAlert();
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
