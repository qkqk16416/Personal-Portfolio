// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js'
import { Banner } from './components/Banner.js'
import { Skill } from './components/Skill.js';
import { Projects } from './components/Projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
