import { Navigation } from "./components/Navigation/Navigation";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { Footer } from "./components/Footer/Footer";
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
