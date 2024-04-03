import { motion } from "framer-motion"

const Links = () =>{
const items=[
    "Homepage",
    "Service",
    "Portfolio",
    "Contact",
    "About",
]    
 const variants = {
        open:{
            transition :{
                staggeredChildren:0.1,
            },
        },
        closed:{
            transition :{
                staggeredChildren:0.05,
                staggeredDirection: -1,
            }
        }
    }
    return(
       <motion.div className="links" variants={variants}>
        {items.map (item =>(
        <a href={`#${item}`} key={item}>
            {item}</a>
       ))}
       </motion.div>
    )
}

export default Links