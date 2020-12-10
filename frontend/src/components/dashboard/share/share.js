import React from "react";
import {
  withStyles,
  Typography,
  TextField,
  Paper,
  Icon,
  Button,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import { sendMail, tweet } from "../../../api";

const pageStyles = (theme) => ({
  mailInput: {
    marginLeft: "2.5%",
    float: "left",
    marginTop: "1.5%",
    marginBottom: "1.5%",
  },
  paper: {
    minHeight: "300px",
    width: "100%",
    height: "100%",
  },
  innerContainer: {
    position: "relative",
    top: "20%",
    WebkitTransform: "translateY(-40%)",
    MsTransform: "translateY(-40%)",
    transform: "translateY(-40%)",
    height: "auto",
    overflow: "auto",
  },
  bottomContainer: {
    position: "relative",
    top: "40%",
    WebkitTransform: "translateY(-40%)",
    MsTransform: "translateY(-40%)",
    transform: "translateY(-40%)",
    height: "auto",
    overflow: "auto",
  },
  button: {
    position: "relative",
    WebkitTransform: "translateY(20%)",
    MsTransform: "translateY(20%)",
    transform: "translateY(20%)",
    marginTop: "1.5%",
    marginBottom: "1.5%",
    marginLeft: "1.5%",
    float: "left",
    backgroundColor: "#4D5AA5",
  },
  error: {
    fontWeight: "600",
    color: "red",
    float: "left",
    marginLeft: "4.5%",
    marginTop: "20px",
  },
  deleteButton: {
    marginRight: "-20px",
  },
  mailList: {
    float: "right",
    marginRight: "5.5%",
  },
  mail: {
    marginRight: "5.5%"
  }
});

const ShareData = (props) => {
  const { classes } = props;
  const [mails, setMail] = React.useState([]);
  const [currentInput, setCurrentInput] = React.useState("");
  const [error, setError] = React.useState({
    status: false,
    message: "Not a valid email!",
  });

  const handleChange = (e) => {
    setCurrentInput(e.target.value);
  };

  const addButtonOnClick = () => {
    if (validateEmail(currentInput) && !checkIfExists(currentInput)) {
      setMail((prevInput) => [...prevInput, currentInput]);
      setError(false);
    } else if (checkIfExists(currentInput)) {
      setError({ status: true, message: "Email already exists in list!" });
    } else {
      setError({ status: true, message: "Not a valid email!" });
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const checkIfExists = (email) => {
    if (mails.includes(email)) {
      return true;
    } else {
      return false;
    }
  };

  const removeFromList = (emailIndex) => {
    setMail(
      mails.filter((email) => {
        return email !== mails[emailIndex];
      })
    );
  };

  const sendMailOnClick = () => {
    let formJSON = JSON.stringify({
      location: props.locationData.location,
      mails: mails,
      temperature: returnLastObject(props.sensorData.records.sensor)
        .temperature,
      humidity: returnLastObject(props.sensorData.records.sensor).humidity,
    });

    sendMail(formJSON).then((value) => {
      if (value.statusCode === 200) {
        console.log(value.message);
      }
    });
  };

  const tweetOnClick = () => {
    let formJSON = JSON.stringify({
      location: props.locationData.location,
      temperature: returnLastObject(props.sensorData.records.sensor)
        .temperature,
      humidity: returnLastObject(props.sensorData.records.sensor).humidity,
    });

    tweet(formJSON).then((value) => {
      if (value.statusCode === 200) {
        console.log(value.message);
      }
    });
  };

  const returnLastObject = (dataObject) => {
    const data = Object.values(dataObject);
    return data[data.length - 1];
  };

  React.useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <Paper className={classes.paper}>
      <div className={classes.innerContainer}>
        <TextField
          className={classes.mailInput}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddIcon />}
          onClick={addButtonOnClick}
        >
          Add
        </Button>
        {mails.length > 0 && (
          <List
            className={classes.mailList}
            component="nav"
            aria-label="main mailbox folders"
          >
            {mails.map((value, key) => {
              return (
                <ListItem id={key} button>
                  <ListItemText primary={value} />
                  <ListItemSecondaryAction
                    onClick={() => removeFromList(key)}
                    className={classes.deleteButton}
                  >
                    <IconButton edge="end" aria-label="comments">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
      <div className={classes.bottomContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.mail}
          endIcon={<MailIcon />}
          onClick={sendMailOnClick}
        >
          Mail
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.tweet}
          endIcon={<TwitterIcon />}
          onClick={tweetOnClick}
        >
          Tweet
        </Button>
      </div>
      {error.status === true && (
        <Typography className={classes.error} variant="p">
          {error.message}
        </Typography>
      )}
    </Paper>
  );
};

export default withStyles(pageStyles)(ShareData);
