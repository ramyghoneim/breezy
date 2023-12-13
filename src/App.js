import logo from './logo.svg';
import './App.css';
import { LandingPage, Breathe, Calendar, Notes } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/breathe" element={<Breathe />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}

export default App;