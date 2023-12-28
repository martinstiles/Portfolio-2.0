import './style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/navbar'
import Home from './views/home'
import About from './views/about';
import Contact from './views/contact';
import Projects from './views/projects';
import Skills from './views/skills';

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/portfolio2.0/about" element={<About/>} />

          <Route path="/portfolio2.0/contact" element={<Contact/>} />

          <Route path="/portfolio2.0/Projects" element={<Projects/>}>
            <Route path=":projectIndex" element={<Projects/>} />
          </Route>

          <Route path="/portfolio2.0/skills" element={<Skills/>} />

          <Route path="/portfolio2.0" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
