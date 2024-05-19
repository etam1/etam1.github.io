import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navigationBar/NavBar';
import Home from './components/home/home';
import ComputerScience from './components/computerScience/computerScience';
import Art from './components/art/art';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="NavBar">
            <NavBar/>
        </div>

          <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route path = "/csPortfolio" element={<ComputerScience/>}/>
            <Route path = "/artPortfolio" element={<Art/>}/>
          </Routes>
      </div>
      {/* <Home /> */}
      useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    </Router>
  );
}

export default App;
