/* eslint-disable react/no-unescaped-entities */

import "./loading.css";
import Lottie from "lottie-react";
import scan from "../../../public/scan-gif.json";
import { motion } from "framer-motion";

const Loading = () => {
  const text1 = "Welcome to my Website";

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
    <div className="loading p-3 d-flex flex-column justify-content-center gap-5 align-items-center">
      <div className="col-md-8 col-sm-10">
        <Lottie style={{ height: 200 }} animationData={scan} />
      </div>
      <div className=" col-md-6 col-sm-10">
        <motion.div
          variants={textAnimation}
          initial="hidden"
          animate="visible"
          className=" m-auto mt-4 text-loagin"
        >
          <h1 className="text-center">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
