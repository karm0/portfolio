import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/1)header/Header";
import Hero from "./components/2)hero/Hero";
import Main from "./components/3)main/Main";
import Contact from "./components/5)contact/Contact";
import AboutMe from "./components/6)cv/AboutMe";
import Footer from "./components/7)footer/Footer";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "./components/loading/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadingPage = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4500);
    };
    loadingPage();
  }, []);

  const location = useLocation();
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/projects" element={<Main />} />
          <Route path="/skills" element={<AboutMe />} />
          <Route path="/contactUs" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
