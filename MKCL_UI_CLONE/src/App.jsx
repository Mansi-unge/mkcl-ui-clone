import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import KLic_Courses from './pages/KLic_Courses';
import KLic_Diploma from './pages/KLiC_Diploma';
import Admission from './pages/Admission';
import Learner_life_cycle from './pages/Learner_Life_cycle';
import Faq from './pages/Faq';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
     <div>
     <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/KLiC Courses" element={ <KLic_Courses/> } />
          <Route path="/KLic Diploma" element={<KLic_Diploma/>} />
          <Route path="/Admission" element={<Admission/>} />
          <Route path="/Learner Life Cycle" element={<Learner_life_cycle/>} />
          <Route path="/FAQs" element={<Faq/>} />
        </Routes>
        <Footer/>
     </div>
      </BrowserRouter>
    </>
  );
}

export default App;
