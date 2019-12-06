import { whileStatement } from "@babel/types";

const styles = theme => ({
    taskboard: {
        display: "flex",
        alignItems: "center"
    },
    shape: {
        padding: 20,
        margin: 10,
        // backgroundColor: "blue",
        // color: "white"
        backgroundColor: theme.color.primary,
        color: theme.shape.textColor
    }
});

export default styles;
