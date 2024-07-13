import "./App.css";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
