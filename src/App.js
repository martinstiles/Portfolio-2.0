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
          <Route path="/Portfolio-2.0/about">
            <About />
          </Route>

          <Route path="/Portfolio-2.0/contact">
            <Contact />
          </Route>

          <Route path="/Portfolio-2.0/Projects">
            <Projects />
          </Route>

          <Route path="/Portfolio-2.0/skills">
            <Skills />
          </Route>

          <Route path="/Portfolio-2.0">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
