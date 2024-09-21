// css
import "./App.css";
// components
import Header from "./components/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
