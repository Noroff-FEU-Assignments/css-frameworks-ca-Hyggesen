import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeContent from "./components/Home";
import NewsContent from "./components/News";
import ContactContent from "./components/Contact";
import TheFooter from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <TheFooter />
    </Router>
  );
}

function Home() {
  return <HomeContent />;
}

function News() {
  return <NewsContent />;
}

function Contact() {
  return <ContactContent />;
}
