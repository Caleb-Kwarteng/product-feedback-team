import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import UI from "./components/suggestionsPage/UI";
import UX from "./components/suggestionsPage/UX";
import Enhancement from "./components/suggestionsPage/Enhancement";
import Feature from "./components/suggestionsPage/Feature";
import Bug from "./components/suggestionsPage/Bug";
import SuggestionsPage from "./components/suggestionsPage/SuggestionsPage";
import LoginPage from "./containers/login/LoginPage";
import SignUpPage from "./containers/SignUpPage/SIgnUpPage";
import FeedbackDetailPage from "./containers/FeedbackDetailPage/FeedbackDetailPage";
//import reportWebVitals from './reportWebVitals';
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="feedback" element={<FeedbackDetailPage />} />
        <Route path="dashboard" element={<SuggestionsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
/**
   * Buttons
   * <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="All" element={<SuggestionsPage />} />
        <Route path="UI" element={<UI />} />
        <Route path="UX" element={<UX />} />
        <Route path="Enhancement" element={<Enhancement />} />
        <Route path="Bug" element={<Bug />} />
        <Route path="Feature" element={<Feature />} />
      </Route>
    </Routes>
  </BrowserRouter>
   */
/**  <React.StrictMode>
    <App />
  </React.StrictMode> */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
