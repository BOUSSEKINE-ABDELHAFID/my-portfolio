import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/Contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
