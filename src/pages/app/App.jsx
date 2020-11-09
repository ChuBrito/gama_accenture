import "./App.css";
import theme from "../../core/theme/theme";
import { Container, ThemeProvider } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
// import CardList from "../../molecules/CardList/CardList";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container className="App">
        <Typography variant="h1">Projeto inicial React H1</Typography>
        <Typography variant="h2">Projeto inicial React H2</Typography>
        <Typography variant="body1">Projeto inicial React body1</Typography>
        <Typography variant="body2">Projeto inicial React body2</Typography>
      </Container>
      <CustomButton text="Teste" iconName="send" color="secondary"/>
      <CustomInput name="email" type="text" iconData="send"/>
    {/* <CardList /> */}
    </ThemeProvider>
  );
};

export default App;
