import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./preloader.scss";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      clearInterval(interval);
      setProgress(100);
      setTimeout(onComplete, 700);
    };

    // Simula avanzamento progressivo fino a 90%, poi aspetta window.onload
    interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 5 + 2;
        if (next >= 90) {
          clearInterval(interval);
          return 90;
        }
        return next;
      });
    }, 110);

    const minWait = new Promise((r) => setTimeout(r, 1500));
    const loadWait = new Promise((r) => {
      if (document.readyState === "complete") r();
      else window.addEventListener("load", r, { once: true });
    });

    Promise.all([minWait, loadWait]).then(finish);

    return () => {
      clearInterval(interval);
      done = true;
    };
  }, []);

  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <div className="preloaderInner">
        <div className="preloaderLogo">
          <span className="logoNum">2</span>
          <span className="logoT">T</span>
        </div>

        <p className="preloaderLabel">Caricamento risorse</p>

        <div className="preloaderTrack">
          <motion.div
            className="preloaderFill"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </div>

        <span className="preloaderPercent">{Math.round(progress)}%</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
