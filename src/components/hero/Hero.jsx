import "./hero.scss"
import {motion} from "framer-motion"

const  textVariants = {
 initial:{
x:-500,
opacity:0,
 },
 animate:{
    x:0,
    opacity:1,
    transition:{
        duration: 1,
        staggerChildren: 0.1,
    }
 },
 scrollButton:{
    opacity:0,
    y:10,
    transition:{
        duration:2,
        repeat: Infinity,
    }

 }
}

const  sliderVariants = {
    initial:{
   x:-0,
    },
    animate:{
       x:"-220%",
       transition:{
            repeat:Infinity,
           duration: 30,
       },
    },
   };

const Hero = ()=>{

  
    return(
        <div className="hero">
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants} >FEDERICO CAPIZZI</motion.h2>
            <motion.h1 variants={textVariants} >Web developer and Full-Stack-Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
                <motion.button variants={textVariants}>See the Latest Works</motion.button>
                <motion.button variants={textVariants}>Contact Me </motion.button>
            </motion.div>
            <motion.img variants={textVariants} src="/scroll.png" alt="" animate="scrollButton"/>
          </motion.div>
          </div>
          <motion.div className="SLIDINGtEXTcONTAINER" variants={sliderVariants} initial="initial" animate="animate">
            Front-End-Developer     Back-End-Developer
          </motion.div>
          <div className="imageContainer">
          <iframe src="https://modelcapizz.netlify.app/" title="Modello 3D" className="model-iframe" />
          </div>
        </div>
        
    )
}
export default Hero