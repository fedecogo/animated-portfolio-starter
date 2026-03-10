import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language")

    if (storedLanguage) {
      setLanguage(storedLanguage)
      return
    }

    const browserLanguage = navigator.language.toLowerCase()
    console.log("browserLanguage") 
    console.log(browserLanguage)

    const defaultLanguage = browserLanguage.startsWith("it") ? "it" : "en"

    localStorage.setItem("language", defaultLanguage)
    setLanguage(defaultLanguage)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "it" : "en"
    localStorage.setItem("language", newLanguage)
    setLanguage(newLanguage)
  }

  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          How2StrokeWorks
        </motion.span>
        <p>${language === "en" ? "EN" : "IT"}</p>

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
            {language === "en" ? "🇬🇧 EN" : "🇮🇹 IT"}
          </motion.span>
        </motion.button>
      </div>
    </div>
  )
}

export default Navbar