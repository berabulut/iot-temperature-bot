import React from "react";
import { useStoreState } from "pullstate";
import { GlobalStates } from "../../store";
import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  CircularProgress,
  Backdrop
} from "@material-ui/core";
import Dashboard from "./dashboard";
import FailedLogin from "./failed-login";

const pageStyles = (theme) => ({
  container: {
    width: "100%",
    height: "100%",
    background: "#2A324D",
    overflow: "auto"
  },

  appbar: {
    background: "#4d5aa5",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
});

const DashboardPage = (props) => {
  const storeStates = useStoreState(GlobalStates);
  const { classes } = props;
  const [open, setOpen] = React.useState(true);

  const closeProgress = () => {
    setOpen(false);
  }

  if (storeStates.loginStatus || props.location.state.loginStatus) {
    return (
      <div className={classes.container}>
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <Typography variant="h6">DEVICE-ID:{props.location.state.deviceID || storeStates.deviceID}</Typography>
          </Toolbar>
        </AppBar>
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dashboard
          deviceID={props.location.state.deviceID || storeStates.deviceID}
          closeProgress={closeProgress}
        />
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
