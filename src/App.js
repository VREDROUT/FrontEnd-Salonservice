import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import FetchAllSalonservices from './components/FetchAllSalonservices';
import FetchSalonservice from './components/FetchSalonservice';
import AddSalonservice from './components/AddSalonservice';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/salonservice/get/:id" element={<FetchSalonservice />} />
        <Route path="/salonservice/all" element={<FetchAllSalonservices />} />
        <Route path="/salonservice/add" element={<AddSalonservice />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;