import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import HomeContent from "./components/Home";
import NewsContent from "./components/News";
import ContactContent from "./components/Contact";
import TheFooter from "./components/Footer";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg">
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/news" className="nav-link">
                News
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <HomeContent />
          </Route>
          <Route path="/news">
            <NewsContent />
          </Route>
          <Route path="/contact">
            <ContactContent />
          </Route>
        </Switch>
      </div>
      <TheFooter />
    </Router>
  );
}
