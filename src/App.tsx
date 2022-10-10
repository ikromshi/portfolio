import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/About me/AboutMe";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";


function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   let timer1 = setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1750);

  //   return () => {
  //     clearTimeout(timer1);
  //   }
  // }, [])


  return (
    // <>
    // { isLoading ? (
    //   <div className="spinner-div">
    //     <Spinner animation={"border"}/> 
    //   </div>) :
    //   (
        <div className="App">
          <Navigation />
          <Banner />
          <Skills />
          <Projects />
          <AboutMe />
          <Footer />
        </div>
      // )
    // }
  // </>
  );
}

export default App;
