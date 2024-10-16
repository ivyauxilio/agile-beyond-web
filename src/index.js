import React from "react";
import ReactDOM from "react-dom/client";
// import {
//   HashRouter,
//   BrowserRouter,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";
// import { BrowserRouter, Outlet, Route, Switch, Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
// styles for this kit
// import "./assets/css/bootstrap.min.css";
import "./assets/lib/animate/animate.min.css";


import "./index.css";
import "./assets/styles.css";

import App from "./views/App.js";
import Home from "./views/Home";
import Privacy from "./views/Privacy";
import ContactUs from "./views/contact-us";
import Pricing from "./views/pricing";
import Services from "./views/services";
import Team from "./views/team";
import Careers from "./views/careers/index.js";
import News from "./views/blog/index.js";
import BlogPost from "./views/blog/posts/index.js";
import About from "./views/about/index.js";
import Process from "./views/process/index.js";

import PostEditor from "./components/post.js";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <BrowserRouter>
  //   <Switch>
  //     <Switch>
  //       <Route path="/" render={(props) => <Index {...props} />} />
  //     </Switch>
  //   </Switch>
  // </BrowserRouter>

  <Router>
    <Routes>
      <Route element={<App />}>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/business-process-outsourcing" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog/posts/:id" element={<BlogPost />} />
        <Route path="/customer-integration-process" element={<Process/>} />
        {/* <Route path="/editor" element={ <PostEditor />} /> */}
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  </Router>

  // <BrowserRouter>
  //   <Switch>
  //     <Switch>
  //       <Route  path="/"  render={(props) => <App {...props} />}>
  //          <Route path="/" render={(props) => <Home {...props}/>} />
  //       </Route>

  //       {/* <Route path="/about" element={<About />} />
  //       <Route path="/contact" element={<Contact />} /> */}
  //     </Switch>
  //   </Switch>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
