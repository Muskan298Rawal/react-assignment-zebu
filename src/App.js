import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Label from './components/Label';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/create-project" element={<Home/>}/>
        <Route exact path="/label-images" element={<Label/>}/>
        <Route path="*" element={<Navigate to="/create-project" />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
