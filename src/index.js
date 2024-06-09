import React, {useEffect}from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route,useLocation} from 'react-router-dom';
import './index.css';
import Home from './pages/home/home';
import About from './pages/About/about';
import MainCauses from './pages/Causes/maincauses';
import Event from './pages/Event/event';
import MeetTeam from './pages/Team/meetteam';
import Faq from './pages/Faq/faq';
import Contact from './pages/contact/contact';
import Joinus from './pages/JoinUs/joinus';
import reportWebVitals from './reportWebVitals';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/maincauses" element={<MainCauses />} />
        <Route path="/event" element={<Event />} />
        <Route path="/team" element={<MeetTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/joinus" element={<Joinus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
