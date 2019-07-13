import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//pages
import home from "./pages/home";
import login from "./pages/login";
import singleDay from "./pages/singleDay";
import CustomerPage from "./pages/customerPage";
import singleJob from "./pages/singleJob";

//components
import Navbar from "./components/Navbar";
import Calculator from "./components/calculator";
import AuthRoute from "./util/AuthRoute";

const theme = createMuiTheme(themeFile);

axios.defaults.baseURL =
  "https://us-central1-gps-client-6e57f.cloudfunctions.net/api";

const token = localStorage.getItem("FBIdToken");
console.log(token);

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

// TODO:
// add activity log

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/jobs/:date" component={singleDay} />
              <Route exact path="/job/:id" component={singleJob} />
              <Route exact path="/customer/:id" component={CustomerPage} />
              <Route exact path="/calculator" component={Calculator} />
              <AuthRoute exact path="/login" component={login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
