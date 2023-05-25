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

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="about-text">
              I'm a programmer with experience in Python, C++, C#, JavaScript, SQL. Able to write sites on Flask and has
              an experience in testing of programs in different operation system and function testing of web application.
          </motion.p>
      </>
  )
}

export default About