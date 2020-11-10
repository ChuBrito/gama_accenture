import "./App.css";
import theme from "../../core/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import CardList from "../../molecules/CardList/CardList";
import InfoCard from "../../components/InfoCard/InfoCard";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CardList />
      <InfoCard />
    </ThemeProvider>
  );
};

export default App;
