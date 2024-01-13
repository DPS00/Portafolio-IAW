import './App.css';
import  LandingPage  from "./pages/LandingPage.jsx";
import Contact from './pages/Contact.jsx';
import NewsLetter from './pages/NewsLetter.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path='/NewsLetter' element={<NewsLetter/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
