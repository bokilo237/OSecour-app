import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AgentInscription from './pages/AgentInscription';
import 'leaflet/dist/leaflet.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscription-agent" element={<AgentInscription />} />
      </Routes>
    </Router>
  );
};

export default App;