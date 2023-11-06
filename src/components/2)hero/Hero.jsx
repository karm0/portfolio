/* eslint-disable react/jsx-no-target-blank */
import { Container } from "react-bootstrap";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const text1 = "Front-End  Develober,";
  const text2 = "React.JS";
  const text3 =
    "I am a qualified and Front-End with year of experience in building sites and landing pages,";
  const text4 =
    "E-commerce, and website design—strong creative and analytical skills. Focus on details and time management.";
  const textAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const spanText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        id="top"
      >
        <Container className="p-3 hero-section ">
          <div className="ddd">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                type: "spring",
                stiffness: 200,
                damping: 5,
              }}
              style={{ width: "200px" }}
              className=" m-auto"
            >
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-b7e89.appspot.com/o/img1.png?alt=media&token=fe1dd8a9-d2cd-43f6-b233-8390c61d658a" className="w-100" />
            </motion.div>

            <motion.div
              variants={textAnimation}
              initial="hidden"
              animate="visible"
              className=" m-auto mt-4 text-hero"
            >
              <h1>
                {text1.split("").map((e, i) => (
                  <motion.span
                    key={i}
                    variants={spanText}
                    style={{ letterSpacing: "4px" }}
                  >
                    {e}
                  </motion.span>
                ))}
              </h1>

              <h1>
                {text2.split("").map((e, i) => (
                  <motion.span
                    key={i}
                    variants={spanText}
                    style={{ letterSpacing: "4px" }}
                  >
                    {e}
                  </motion.span>
                ))}
              </h1>
              <p>
                {text3.split("").map((e, i) => (
                  <motion.span
                    key={i}
                    variants={spanText}
                    style={{ letterSpacing: "1px", fontWeight: "bold" }}
                  >
                    {e}
                  </motion.span>
                ))}
              </p>
              <p>
                {text4.split("").map((e, i) => (
                  <motion.span
                    key={i}
                    variants={spanText}
                    style={{ letterSpacing: "1px", fontWeight: "bold" }}
                  >
                    {e}
                  </motion.span>
                ))}
              </p>
              <div>
                <ul className="d-flex gap-5">
                  <a href="https://www.linkedin.com/in/karm-shaker-798907212/" target="_blank">
                    <motion.li
                      initial={{ x: -500 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 2 }}
                      className="icon-linkedin-square fs-4"
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                    </motion.li>
                  </a>

                  <a href="https://github.com/karm0" target="_blank">
                    <motion.li
                      initial={{ x: 1000 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 2 }}
                      className="icon-github fs-4"
                      style={{ cursor: "pointer" }}
                    ></motion.li>
                  </a>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.main>
    </motion.div>
  );
};

export default Hero;
