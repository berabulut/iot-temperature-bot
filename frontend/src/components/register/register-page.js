import React from "react";
import { withStyles, Typography, Link } from "@material-ui/core";
import RegisterForm from "./register-form";

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
    color: "white"
  }
});

const RegisterPage = (props) => {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography className={classes.formTitle} variant="h4">
          REGISTER
        </Typography>
        <RegisterForm />
        <Link
          className={classes.createAccountLink}
          variant="subtitle1"
          href="/"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default withStyles(pageStyles)(RegisterPage);
