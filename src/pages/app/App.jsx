import "./App.css";
import theme from "../../core/theme/theme";
import { Container, ThemeProvider } from "@material-ui/core";
import Login from "../Login/Login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <Login/>
      </Container>
    </ThemeProvider>
  );
};

export default App;
