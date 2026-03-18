import "./navbar.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    console.log("the stored language is " + storedLanguage);

    if (storedLanguage) {
      setLanguage(storedLanguage);
      console.log("the stored language is " + storedLanguage);
      return;
    }

    const browserLanguage = navigator.language.toLowerCase();
    const defaultLanguage = browserLanguage.startsWith("it") ? "it" : "en";
    localStorage.setItem("language", defaultLanguage);
    setLanguage(defaultLanguage);
    console.log("the default language is " + defaultLanguage);
    return
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "it" : "en";
    localStorage.setItem("language", newLanguage);
    setLanguage(newLanguage);
    console.log("the new language is " + newLanguage);
  };

  const titleParts = [
    { text: "How",    cls: "tWhite" },
    { text: "2",      cls: "tAccent" },
    { text: "Stroke", cls: "tWhite" },
    { text: "Works",  cls: "tDim" },
  ];

  const titleContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };

  const wordVariant = {
    hidden: { opacity: 0, y: -14 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.div
          className="navTitle"
          variants={titleContainer}
          initial="hidden"
          animate="show"
        >
          {titleParts.map((p, i) => (
            <motion.span key={i} className={p.cls} variants={wordVariant}>
              {p.text}
            </motion.span>
          ))}
        </motion.div>
        {/* <p>${language === "en" ? "EN" : "IT"}</p>

        <motion.button
          className="languageBtn"
          onClick={toggleLanguage}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            key={language}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {language === "en" ? "Cambia lingua 🇮🇹" : "Change language 🇬🇧"}
          </motion.span>
        </motion.button> */}
      </div>
    </div>
  );
};

export default Navbar;
