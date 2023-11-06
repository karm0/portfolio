/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck
import { Container } from "react-bootstrap";
import "./main.css";
import img4 from "/public/img4.png";
import img5 from "/public/img5.png";
import img7 from "/public/img7.png";
import img8 from "/public/img8.png";
import img9 from "/public/img9.png";
import img10 from "/public/img10.png";
import img11 from "/public/img11.png";
import img12 from "/public/img12.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const imges = [img4, img5, img7, img8, img9, img10, img11, img12];
  const linkes = [
    "https://hospital-2eaf1.web.app/",
    "https://ecommers-babbb.web.app/",
    "https://saadatehayat.com/",
    "https://karm0.github.io/arabian-gadwa/",
    "https://react-movies-app-navy.vercel.app/",
    "https://karm0.github.io/landing-page/",
    "https://karm0.github.io/cruds/",
    "https://karm0.github.io/web-page2/",
  ];
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX - 450);
      setY(e.clientY - 220);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);

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
      <Container className="p-4">
        <h1 className="text-center" style={{ letterSpacing: "2px" }}>
          Projects
        </h1>
        {imges.map((e, i) => (
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            transition={{
              duration: 1.3,
            }}
            key={i}
            className="card col-md-5 col-sm-10"
            style={{
              margin: "10rem auto",
              boxShadow: "0 0 15px 3px #43e7f3",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
          <a href={linkes[i]} target="_blank">
          <motion.img
          src={e}
          className="w-100"
          style={{ borderRadius: "20px" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
                duration: 1,
              }}
              />
              <motion.div className="cursor" animate={{ x, y }}>
              {" "}
              view{" "}
              </motion.div>
              </a>
          </motion.div>
        ))}
      </Container>
    </motion.div>
  );
};

export default Main;
