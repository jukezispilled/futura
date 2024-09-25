import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import SAC from './SAC';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import WebDev from './WebDev';
import AdCreative from './AdCreative';
import LeadGen from './LeadGen';
import Chatbot from './Chatbot';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/scheduleacall" element={<SAC />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Websites" element={<WebDev />} />
        <Route path="/Graphics" element={<AdCreative />} />
        <Route path="/LeadGen" element={<LeadGen />} />
        <Route path="/Chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
