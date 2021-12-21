import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar } from "./components/Basics/Navbar/Navbar";
import { Login } from "./components/Route/Account-Handle/Login/Login";
import { Register } from "./components/Route/Account-Handle/Register/Register";
import { ContactUs} from "./components/Route/Account-Handle/ContactUs/ContactUs"
import { Home } from "./components/Home-Content/Home";
import { About } from "./components/Route/About/About"
import { Shop } from "./components/Route/Shop/Shop"
import { Footer } from "./components/Basics/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/ContactUs">
            <ContactUs />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Shop">
            <Shop />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
