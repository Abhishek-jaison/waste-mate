import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Upload from './pages/Upload';
import Workflow from './pages/Workflow';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
    </Router>
  );
}

export default App
