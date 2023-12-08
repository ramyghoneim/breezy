import logo from './logo.svg';
import './App.css';
import { LandingPage, Breathe, Calendar } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/breathe" element={<Breathe />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  )
}

export default App;