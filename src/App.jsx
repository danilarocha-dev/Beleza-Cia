import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Agendamentos from "./pages/Agendamentos"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
        </Routes>
      </Router>

      <Header />
      <Footer />
    </>
  );
}

export default App
