import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./style.js";
import { withStyles } from "@material-ui/styles";

class App extends Component {
  render() {
    const {classes}=this.props;
    return (
      <div className="App">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <div className={classes.box}>
          <div className={classes.shape}>a</div>
          <div className={classes.shape}>b</div>
          <div className={classes.shape}>c</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
