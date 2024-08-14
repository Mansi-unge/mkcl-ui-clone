import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
