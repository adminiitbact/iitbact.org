import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SearchIcon from "@material-ui/icons/Search";
import webLogo from "../assets/images/iitbact.png";
import MoreIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  headerSpace: {
    padding: theme.spacing(1, 5),
    backgroundColor: "white",
  },
  menuButton: {
    marginRight: theme.spacing(4),
    color: "black",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  navTitle: {
    margin: theme.spacing(0, 1),

    // "&:hover": {
    //   transitionDuration: 0.5,
    // },
  },
  navTitleActive: {
    // margin: theme.spacing(0, 1),
    // backgroundColor: "whitesmoke",
    // "&:hover": {
    //   transitionDuration: 0.5,
    // },
  },
  navTitleContent: {
    fontSize: "0.8em",
    color: "#50658e",
    fontWeight: 500,
    // transitionDuration: 1,
  },
  title: {
    display: "block",

    width: theme.spacing(15),
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "rgb(245,245,246)",
  },
  inputInput: {
    padding: theme.spacing(1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    color: "rgb(245,245,246)",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    color: "black",
  },
  sectionMobile: {
    display: "flex",
    color: "black",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar className={classes.headerSpace}>
          <Tooltip placement="top" title="Menu">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <div
            className={classes.title}
            variant="h6"
            noWrap
            // onClick={() => props.scroll("WhoAreWe")}
          >
            <div>
              {/* <img src={webLogo} alt="logo"/> */}
              <IconButton
                className={
                  props.state.home ? classes.navTitleActive : classes.navTitle
                }
                onClick={() => props.scroll("home")}
                style={{ backgroundColor: "transparent", margin: " 0px 8px" }}
                color="inherit"
                edge="start"
                aria-haspopup="true"
              >
                <h3 style={{ color: "#50658e", letterSpacing: "3px" }}>
                  IITBACT
                </h3>
              </IconButton>
            </div>
          </div>

          {/* <div className={classes.grow} /> */}
          <div
            className="headersection"
            // className={classes.sectionDesktop}
            // style={{
            //   flex: "auto",
            //   display: "block",
            //   textAlign: "right",
            // }}
          >
            {/* <IconButton
              edge="start"
              className={
                props.state.home ? classes.navTitleActive : classes.navTitle
              }
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => props.scroll("home")}
              color="inherit"
              style={{ backgroundColor: "transparent" }}
            >
              <Typography variant="h6" className={classes.navTitleContent}>
                <h3>IITBACT</h3>
              </Typography>
            </IconButton> */}

            <IconButton
              edge="start"
              aria-label="account of current user"
              className={
                props.state.initiative
                  ? classes.navTitleActive
                  : classes.navTitle
              }
              aria-haspopup="true"
              onClick={() => props.scroll("initiative")}
              color="inherit"
              style={{ backgroundColor: "transparent", margin: " 0px 8px" }}
            >
              <Typography variant="h6" className={classes.navTitleContent}>
                Our Initiatives
              </Typography>
            </IconButton>

            <IconButton
              edge="start"
              style={{ backgroundColor: "transparent", margin: " 0px 8px" }}
              className={
                props.state.whoCanJoin
                  ? classes.navTitleActive
                  : classes.navTitle
              }
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => props.scroll("whoCanJoin")}
              color="inherit"
            >
              <Typography variant="h6" className={classes.navTitleContent}>
                Who Can Join Us
              </Typography>
            </IconButton>
            <IconButton
              edge="start"
              style={{ backgroundColor: "transparent", margin: " 0px 8px" }}
              className={
                props.state.whatCanYouDo
                  ? classes.navTitleActive
                  : classes.navTitle
              }
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => props.scroll("whatCanYouDo")}
              color="inherit"
            >
              <Typography variant="h6" className={classes.navTitleContent}>
                What Can You Do
              </Typography>
            </IconButton>

            <IconButton
              style={{ backgroundColor: "transparent", margin: " 0px 8px" }}
              edge="start"
              aria-label="account of current user"
              className={
                props.state.contact ? classes.navTitleActive : classes.navTitle
              }
              aria-haspopup="true"
              onClick={() => props.scroll("contact")}
              color="inherit"
            >
              <Typography variant="h6" className={classes.navTitleContent}>
                Contact Us
              </Typography>
            </IconButton>
          </div>
          {/* <div className={classes.grow} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
