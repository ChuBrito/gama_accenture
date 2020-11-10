import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    overrides: {
        MuiFormControlLabel: {
            label: {
                color: "#F1F1F1",
            },
        },
        MuiOutlinedInput: {
            colorSecondary: {
                backgroundColor: "#F1F1F1",
                color: "#123952",
            },
        },
        MuiFormLabel: {
            colorSecondary: {
                textAlign: "left",
                color: "#F1F1F1",
            },
        },
        MuiRadio: {
            colorSecondary: {
                color: "#F1F1F1",
            },
        },
        MuiButton: {
            contained: {
                height: "57px",
            },
        },
    },
    palette: {
        primary: {
            main: "#115D8C",
        },
        secondary: {
            main: "#F25D27",
            contrastText: "#F1F1F1",
        },
        text: {
            primary: "#123952",
            secondary: "#617480",
            hint: "#A0ACB2",
        },
    },
    typography: {
        h1: {
            fontFamily: "Barlow",
            fontSize: "2rem",
        },
        h2: {
            fontFamily: "Barlow",
            fontSize: "1.5rem",
        },
        h3: {
            fontFamily: "Heebo",
            fontSize: "2rem",
        },
        h4: {
            fontFamily: "Heebo",
            fontSize: "1.75rem",
        },
        h5: {
            fontFamily: "Heebo",
            fontSize: "1.15rem",
        }
        ,
        body1: {
            fontFamily: "Heebo",
            font: "1rem",
        },
        body2: {
            fontFamily: "Heebo",
            fontSize: "0.8rem",
        },

    },
});

export default theme;