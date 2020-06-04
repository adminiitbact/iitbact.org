import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import HelpIcon from "@material-ui/icons/Help";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import webLogo from "../assets/images/techact.png";
const useStyles = makeStyles((theme) => ({
  spacing: {
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0),
  },
  margin: {
    marginTop: theme.spacing(5),
  },
}));
export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      id="sideNav"
      open={props.sideNav}
      onClose={props.handleDrawerOpen}
      onOpen={props.handleDrawerOpen}
    >
      <List className={classes.margin}>
        <ListItem
          button
          className={classes.spacing}
          onClick={() => {
            props.handleDrawerOpen();
            props.scroll("home");
          }}
        >
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          button
          className={classes.spacing}
          onClick={() => {
            props.handleDrawerOpen();
            props.scroll("initiative");
          }}
        >
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Our Initiatives" />
        </ListItem>
        <ListItem
          button
          className={classes.spacing}
          onClick={() => {
            props.handleDrawerOpen();
            props.scroll("whoCanJoin");
          }}
        >
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Who Can Join Us" />
        </ListItem>
        <ListItem
          button
          className={classes.spacing}
          onClick={() => {
            props.handleDrawerOpen();
            props.scroll("whatCanYouDo");
          }}
        >
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="What Can You Do" />
        </ListItem>
        <ListItem
          button
          className={classes.spacing}
          onClick={() => {
            props.handleDrawerOpen();
            props.scroll("contact");
          }}
        >
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
