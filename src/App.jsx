import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ApplyJob } from './pages/ApplyJob';
import { Application } from './pages/Application'; 
import Home from './pages/Home'; 

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apply-job/:id' element={<ApplyJob />} />
      <Route path='/application/:id' element={<Application />} />
    </Routes>
  );
}

export default App;