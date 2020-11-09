import "./App.css";
import theme from "../../core/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import CardList from "../../molecules/CardList/CardList";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardList />
    </ThemeProvider>
  );
};

export default App;
