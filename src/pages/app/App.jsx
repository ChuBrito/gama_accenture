import "./App.css";
import theme from "../../core/theme/theme";
import { Container, ThemeProvider } from "@material-ui/core";
import Login from "../Login/Login";
import LoginService from "../../services/loginService/LoginService";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login/>
    </ThemeProvider>
  );
};

export default App;
