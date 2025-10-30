import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Agendamentos from "./pages/Agendamentos"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      

      <Header />
      <Footer />
    </>
  );
}

export default App
