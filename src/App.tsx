import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const Banner = lazy(() => import("./components/Banner/Banner"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const AboutMe = lazy(() => import("./components/About me/AboutMe"));
const Footer = lazy(() => import("./components/Footer/Footer"));


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(timer1);
    }
  }, [])


  return (
    <>
    { isLoading ? (
      <div className="spinner-div">
        <Spinner animation={"border"}/> 
      </div>) :
      (<Suspense fallback={<Spinner animation={"border"} />}>
        <div className="App">
          <Navigation />
          <Banner />
          <Skills />
          <Projects />
          <AboutMe />
          <Footer />
        </div>
      </Suspense> )
    }
  </>
  );
}

export default App;
