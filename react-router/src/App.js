import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Pages/Page1"
import Page2 from "./Pages/Page2"


function App() {
  return (
    <div className="App">
      <Router>{/* allows us to use routing functionaity */}
        <div>{/* Navbar */}
          <Link to="/">Home</Link>
          <Link to="/page2">Page2</Link>
          <Link to="/random">Error</Link>
        </div>
        <Routes>{/* consists of all routes */}
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
