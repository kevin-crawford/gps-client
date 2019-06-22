import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from './util/theme';
import jwtDecode from 'jwt-decode';

//redux
import {Provider} from 'react-redux';
import store from './redux/store';

//pages
import home from "./pages/home";
import login from "./pages/login";

//components
import Navbar from "./components/Navbar";
import Calculator from "./components/calculator";
import AuthRoute from './util/AuthRoute';

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login'
    authenticated = false;
  } else {
    authenticated = true;
  }
}

axios.defaults.baseURL = "https://us-central1-gps-client-6e57f.cloudfunctions.net/api";

function App() {
  return (
    
    <MuiThemeProvider theme={theme}>
      <Provider store={store} >
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
              <Route exact path="/calculator" component={Calculator} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
