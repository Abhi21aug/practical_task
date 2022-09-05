import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "../Components/header";
import Home from "../Components/home";
import About from "../Components/About";
import HeadTail from "../Components/HeadTail";

const BaseRouting = () => {
  return (
    <HashRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/head-tail" component={HeadTail} />
    </HashRouter>
  );
};

export default BaseRouting;
