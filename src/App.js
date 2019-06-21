import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

//pages
import home from "./pages/home";
import login from "./pages/login";
import Navbar from "./components/Navbar";
import Calculator from "./components/calculator";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#edffff",
      main: "#baddf9",
      dark: "#89abc6",
      contrastText: "#000000"
    },
    typography: {
      useNextVariants: true
    }
  }
});

axios.defaults.baseURL = "https://us-central1-gps-client-6e57f.cloudfunctions.net/api";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/calculator" component={Calculator} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
