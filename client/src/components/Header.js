import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../asset/Avatar1.png";

// CSS STYLES

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  title: {
    color: "tomato",
    marginTop: "3rem",
  },
  subtitle: {
    color: "tan",
    marginBottom: "3rem",
  },
  typeContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typeContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="avatar" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed
          strings={["Hassan Ademuyiwa"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "Javascript FullStack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
