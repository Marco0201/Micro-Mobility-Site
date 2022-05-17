
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignupPage from './pages/signup';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path='/signup' element = {<SignupPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
