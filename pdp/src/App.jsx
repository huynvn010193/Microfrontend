import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from 'react-router-dom';
import Footer from "home/Footer";
import Header from "home/Header";
import { BrowserRouter } from 'react-router-dom';

import PDPContent from "./PDPContent";

import "./index.scss";
import SafeComponent from "./SafeComponent";

const App = () => (
    <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route path="/product/:id" element={<PDPContent />}></Route> 
        </Routes>
      </div>
      <Footer />
    </div>                    
    </BrowserRouter>
    
);
ReactDOM.render(<App />, document.getElementById("app"));
