import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion"
//import IconCloudContainer from "./Globe.jsx"
const About =()=>{
    return(
        <div className="border-b border-neutral-500">
            <h1 className="my-20 pl-8 text-center-900 pb-4 font-thin tracking-tight lg:mt-16 lg:text-6xl">
                About
            <span className="text-neutral-500 text-center"> Me</span>    
            </h1>
            <div className="flex flex-wrap">
                <motion.div 
                whileInView={{opacity:1, x:0}}
                initial={{opacity: 0,x: -100}}
                transition={{ delay: 0.5, duration:0.75}}
                className="w-full lg:w-1/2 lg:p-8">
                   <div className="flex items-center justity-center">                    
                     <img src={aboutImg} alt="about"/>
                   </div>
                </motion.div>
                <motion.div whileInView={{opacity: 1, x:0}}
                initial={{opacity: 0, x:100}}
                transition={{duration: 0.5}}
                className="w-full lg:w-1/2">
                   <div className="flex justify-center lg:justify-start">
                      <p className="my-2 maxw-xl py-16">{ABOUT_TEXT}</p>
                   </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About; 