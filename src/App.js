import logo from './logo.svg';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HeroBanner from './Components/HeroBanner';
import HomePage from './Components/HomePage';


import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
import About from './Pages/About';
import Services from './Pages/Services';
import Gallery from './Pages/Gallery';

function App() {
    return (
        <Router>
            <Routes>
                {/* <Route exact path="/medicine/:id" element={<MedicinePage />} /> */}
                <Route exact path="/gallery" element={<Gallery />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/" element={<HomePage />} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </Router>

    );
}

export default App;
