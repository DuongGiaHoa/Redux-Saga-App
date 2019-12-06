import React, { Component } from 'react'
import styles from "./styles";
import { withStyles } from "@material-ui/styles";

class Taskboard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <div className={classes.shape}>React</div>
                <div className={classes.shape}>Redux</div>
            </div>
        );
    }
}

export default withStyles(styles)(Taskboard);
