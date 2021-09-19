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
import "./sass/style.scss";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg" className="thenavbar">
          <Container fluid="lg">
            <Navbar.Brand className="brandlogo" href="/">
              The YAY Company
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink exact to="/" className="nav-link hnc" fluid="sm">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link hnc">
                  News
                </NavLink>
                <NavLink to="/contact" className="nav-link hnc">
                  Contact
                </NavLink>
              </Nav>
              <Form className="	d-flex d-lg-none">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button className="search-button">Go</Button>
              </Form>
            </Navbar.Collapse>
            <Form className="	d-none d-lg-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button className="search-button">Go</Button>
            </Form>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <HomeContent className="setMargins" />
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
