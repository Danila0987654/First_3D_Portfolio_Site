import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="navbarSection">
      <div className={`${styles.paddingX} textSection`}>
        <div className="decoration">
            <div className="dot_begin"/>
            <div className="dot_end violet-gradient"/>
        </div>
      </div>
    </section>
  )
}

export default Hero