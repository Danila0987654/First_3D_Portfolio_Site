import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { ComputersCanvas } from "./canvas"
import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import {OrbitControls, Preload} from "@react-three/drei";
import Computers from "./canvas/Computers.jsx";

const Hero = () => {
    return (
        <section className="navbarSection">
            <div className={`${styles.paddingX} textSection`}>
                <div className="decoration">
                    <div className="dot_begin"/>
                    <div className="dot_end violet-gradient"/>
                </div>
                <div className="text">
                    <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span>Danila</span></h1>
                    <p className={`${styles.heroSubText} subtext`}>
                        I develop web application, console application <br/> and working with databases, API
                    </p>
                </div>
            </div>
            <ComputersCanvas/>
        </section>
    )
}

export default Hero