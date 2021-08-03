import './style.scss';
import {
  BrowserRouter as Router,
  Switch,
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

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/Projects">
            <Projects />
          </Route>

          <Route path="/skills">
            <Skills />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
