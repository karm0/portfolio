import Hero from "../2)hero/Hero";
import Main from "../3)main/Main";
import Contact from "../5)contact/Contact";
import AboutMe from "../6)cv/AboutMe";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
    initial={{
      x: "-100vw"
    }}
    animate={{
      x: 0,
    }}
    transition={{
      duration: 0.4
    }}
    exit={{
      y: "-100vh"
    }}
    >
      <Hero />
      <Main />
      <AboutMe />
      <Contact />
    </motion.div>
  );
};

export default Home;
