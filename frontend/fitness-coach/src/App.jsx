import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FitnessAI from './pages/FitnessAI';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          // ... existing routes ...
          <Route path="/fitness-ai" element={<FitnessAI />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 