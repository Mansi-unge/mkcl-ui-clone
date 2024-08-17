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
import LearnerLifeCycle from './pages/LearnerLifeCycle';
import Faq from './pages/Faq';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
     <div>
     <Navbar />
        <Routes>
          <Route path="Home-MKCLs-KLic" element={<Home />}  />
          <Route path="KLiC-Courses-MKCLs-KLic" element={ <KLic_Courses/> } />
          <Route path="KLic-Diploma-MKCLs-KLic" element={<KLic_Diploma/>} />
          <Route path="Admission-MKCLs-KLic" element={<Admission/>} />
          <Route path="Learner-Life-Cycle-MKCLs-KLic" element={<LearnerLifeCycle/>} />
          <Route path="FAQs-MKCLs-KLic" element={<Faq/>} />
        </Routes>
        <Footer/>
     </div>
      </BrowserRouter>
    </>
  );
}

export default App;
