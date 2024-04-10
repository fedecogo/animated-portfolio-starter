import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "fs"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #0c0c1d, #111132)",
      }}
    >
      <motion.h1 style={{ y: yBg }}>
        {type === "fs" ? "La Mia Filosofia" : "Competenze"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets"></motion.div>
      <motion.div className="stars"></motion.div>
      <motion.div className="socrate"></motion.div>
      <motion.div className="brain"></motion.div>
      <motion.div className="object"></motion.div>
    </div>
  );
};

export default Parallax;
