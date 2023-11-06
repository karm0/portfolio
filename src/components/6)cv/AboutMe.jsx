import { Container } from "react-bootstrap";
// @ts-ignore
import cv from "/public/karm_shaker_(cv).pdf";
import "./AboutMe.css";
import Lottie from "lottie-react";
import developer from "../../../public/developer-gif.json";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      exit={{
        y: "-100vh",
      }}
    >
      <Container style={{ overflow: "hidden" }}>
        <div className="row p-2">
          <motion.h1
            className="text-center"
            initial={{
              y: "30vh",
            }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.5,
            }}
          >
            Skills
          </motion.h1>
          <motion.div
            className="col-md-6 col-sm-10 m-auto"
            initial={{
              y: "30vh",
            }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.6,
            }}
          >
            <Lottie style={{ height: 350 }} animationData={developer} />
          </motion.div>
          <div className="col-md-6 col-sm-10 m-auto p-5">
            <motion.h2
              initial={{
                y: "25vh",
              }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.7,
              }}
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{
                y: "25vh",
              }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.8,
              }}
            >
              I am a qualified and Front-End with year of experience in building
              sites and landing pages, E-commerce, and website design—strong
              creative and analytical skills. Focus on details and time
              management.
            </motion.p>
            <motion.ul
              className="d-flex gap-3 flex-wrap skills"
              initial={{
                y: "20vh",
              }}
              whileInView={{ y: 0 }}
              transition={{
                duration: 0.9,
              }}
            >
              <li>
                <span className="icon-html5"></span>HTML
              </li>
              <li>
                <span className="icon-css3"></span>CSS
              </li>
              <li>
                <span className="icon-javascript"></span>JavaScript
              </li>
              <li>
                <span className="icon-bootstrap"></span>Bootstrap
              </li>
              <li>
                <span className="icon-sass"></span>Sass
              </li>
              <li>
                <span className="icon-figma"></span>Figma
              </li>
              <li>
                <span className="icon-wordpress"></span>WordPress
              </li>
              <li>
                <span className="icon-git"></span>Git
              </li>
              <li>
                <span className="icon-github"></span>GitHub
              </li>
              <li>
                <span className="icon-react"></span>React JS
              </li>
              <li>
                <span className="icon-materialdesign"></span>Material Ui
              </li>
              <li>
                <span></span>API
              </li>
              <li>
                <span className="icon-next-dot-js"></span>Next JS
              </li>
              <li>
                <span className="icon-adobephotoshop"></span>Ps
              </li>
            </motion.ul>

            <div className="d-flex align-items-center flex-wrap">
              <motion.button
                className="btn-cv"
                initial={{
                  y: "18vh",
                }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 1,
                }}
              >
                <a href={cv} download="karm_shaker_(cv)">
                  My Resume
                  <span className="icon-cloud-download"></span>
                </a>
              </motion.button>
              <ul className="d-flex gap-4 mt-3">
                <motion.a
                target="_blank"
                  initial={{
                    y: "18vh",
                  }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  className="social"
                  href="https://www.linkedin.com/in/karm-shaker-798907212/"
                >
                  <li className="icon-linkedin-square fs-4"></li>
                </motion.a>
                <motion.a
                target="_blank"
                  initial={{
                    y: "18vh",
                  }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                  className="social"
                  href="https://github.com/karm0"
                >
                  <li className="icon-github fs-4"></li>
                </motion.a>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default AboutMe;
