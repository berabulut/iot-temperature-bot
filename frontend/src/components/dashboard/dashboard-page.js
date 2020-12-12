import React from "react";
import { useStoreState } from "pullstate";
import { GlobalStates } from "../../store";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Backdrop,
  IconButton,
} from "@material-ui/core";
import Dashboard from "./dashboard";
import FailedLogin from "./failed-login";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const pageStyles = (theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: "#2A324D",
    overflow: "auto",
  },

  appbar: {
    background: "#4d5aa5",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  logout: {
    marginLeft: "auto",
    borderRadius: "0px",
  },
});

const DashboardPage = (props) => {
  const storeStates = useStoreState(GlobalStates);
  const [open, setOpen] = React.useState(true);
  const [alertType, setAlertType] = React.useState("success");
  const [message, setMessage] = React.useState("");
  const [openAlert, setOpenAlert] = React.useState(false);
  const { classes } = props;
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
    setOpenAlert(true);
  };

  const closeProgress = () => {
    setOpen(false);
  };

  if (storeStates.loginStatus || props.location.state.loginStatus) {
    return (
      <div className={classes.container}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography edge="start" variant="h6">
              DEVICE-ID:{props.location.state.deviceID || storeStates.deviceID}
            </Typography>
            <IconButton
              onClick={() => {
                history.push("/");
              }}
              color="inherit"
              className={classes.logout}
            >
              <Typography style={{ marginRight: "5px" }} variant="h6" noWrap>
                LOGOUT
              </Typography>
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dashboard
          deviceID={props.location.state.deviceID || storeStates.deviceID}
          closeProgress={closeProgress}
          openAlert={OpenAlert}
        />
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={closeAlert}>
          <Alert onClose={closeAlert} severity={alertType}>
            {message}
          </Alert>
        </Snackbar>
      </div>
    );
  } else {
    return (
      <div>
        <FailedLogin />
      </div>
    );
  }
};

export default withStyles(pageStyles)(DashboardPage);
