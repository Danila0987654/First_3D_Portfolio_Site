import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { services} from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const About = () => {
  return (
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introducing</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>
      </>
  )
}

export default About