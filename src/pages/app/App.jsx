import "./App.css";
import theme from "../../core/theme/theme";
import {  ThemeProvider } from "@material-ui/core";
import Login from "../Login/Login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
};

export default App;
