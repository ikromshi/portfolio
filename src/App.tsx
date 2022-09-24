import { Navigation } from "./components/Navigation";
import { Projects } from "./components/Projects";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
