import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
