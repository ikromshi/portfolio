import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import {AboutMe} from "./components/About me/AboutMe";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

import ReactGA from 'react-ga';
  const TRACKING_ID = "G-4T7F9CKR2D"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);

function App() {
  return (
        <div className="App">
          <Navigation />
          <Banner />
          <Skills />
          <Projects />
          <AboutMe />
          <Footer />
        </div>
  );
}

export default App;
