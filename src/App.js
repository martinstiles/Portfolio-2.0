import './style.scss';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from './components/navbar/navbar'
import Home from './views/home'
import About from './views/about';
import Contact from './views/contact';
import Projects from './views/projects';
import Skills from './views/skills';

const App = () => {
  return (
    <HashRouter>
      <div className="App">
        <div>
          <Navbar />
        </div>

        <Routes>
          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/Projects" element={<Projects/>}>
            <Route path=":projectIndex" element={<Projects/>} />
          </Route>

          <Route path="/skills" element={<Skills/>} />

          <Route path="/" element={<Home/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
