import React from "react";
import {
  withStyles,
  Typography,
  Link,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import LoginForm from "./login-form";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

export const pageStyles = (theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: "#2A324D",
  },
  wrapper: {
    margin: "auto",
    position: "relative",
    top: "40%",
    WebkitTransform: "translateY(-40%)",
    MsTransform: "translateY(-40%)",
    transform: "translateY(-40%)",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  formTitle: {
    color: "white",
    marginBottom: "50px",
  },
  createAccountLink: {
    color: "white",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const LoginPage = (props) => {
  const { classes } = props;
  const [openAlert, setOpenAlert] = React.useState(false);
  const [openProgress, setOpenProgress] = React.useState(false);
  const [alertType, setAlertType] = React.useState("success");
  const [message, setMessage] = React.useState("");
  const history = useHistory();
  const closeAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const OpenAlert = (alertType, message) => {
    setMessage(message);
    setAlertType(alertType);
    setTimeout(() => {
      setOpenAlert(true);
    }, 200);
  };

  const OpenProgress = () => {
    setOpenProgress(true);
  };

  const CloseProgress = () => {
    setOpenProgress(false);
  }

  return (
    <div className={classes.container}>
      <Backdrop className={classes.backdrop} open={openProgress}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className={classes.wrapper}>
        <Typography className={classes.formTitle} variant="h4">
          LOG IN
        </Typography>
        <LoginForm closeProgress={CloseProgress} openProgress={OpenProgress} openAlert={OpenAlert} />
        <Link
          className={classes.createAccountLink}
          variant="subtitle1"
          href="/register"
          onClick={OpenProgress}
        >
          Register now!
        </Link>
      </div>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={alertType}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default withStyles(pageStyles)(LoginPage);
