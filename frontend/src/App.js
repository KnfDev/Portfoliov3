import React from "react";

import { About, Footer, Header, Skills, Works } from "./containers";
import { Navbar, SocialMedia } from "./components";
import "./App.scss";



const App = ({idName}) => (
  
  <div className="app">
    <Navbar />
    <Header />
    <SocialMedia />
    <About />
    <Works />
    <Skills />
    <Footer />
  </div>
);

export default App;
