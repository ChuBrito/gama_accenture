import "./App.css";
import theme from "../../core/theme/theme";
import { Container, ThemeProvider } from "@material-ui/core";
import Login from "../Login/Login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
};

export default App;
