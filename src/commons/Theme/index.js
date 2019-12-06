import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    color: {
        primary: "#0277bd",
        secondary: "#58a5f0",
        error: "#c4001d"
    },
    typography:{
        fontFamily:"Roboro"
    },
    shape:{
        borderRadius:4,
        backgroundColor: "#007ac1",
        textColor:"#fff",
        border: "#ccc"
    }
});

export default theme; 
