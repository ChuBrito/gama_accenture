import "./App.css";
import theme from "../../core/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ForgotPassword from "../Login/ForgotPassword/ForgotPassword";
import Search from "../Search/Search";
import Checkout from "../Checkout/Checkout";
import Profile from "../Profile/Profile";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <PrivateRoute component={Search} path="/" exact={true}/>
          <PublicRoute restricted={false} component={Login} path="/login" />
          <PublicRoute restricted={false} component={Register} path="/register" />
          <PublicRoute restricted={false} component={ForgotPassword} path="/forgot-password" />
          <PrivateRoute component={Checkout} path="/checkout" exact={true}/>
          <PrivateRoute component={Profile} path="/profile" exact={true}/>
          <Route path="*" component={() => <div>Erro 404</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
