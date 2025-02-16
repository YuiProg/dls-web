'use client';

import styles from './css/home.module.css';
import Image from 'next/image';
import bg1 from './images/bg1.png';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';


export default function Home () {

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControl = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControl.start("visible");
        }
    }, [isInView]);

    return (
        <>
        <div className={styles.imageContainer}>
                <Image src={bg1} alt='dlsbg' className={styles.background}/>
            </div>
                <div className={styles.textContainer}>
                <div>
                    <h1>DARK LEAGUE</h1>
                </div>
                <div>
                    <p className={styles.studio}>STUDIOS</p>
                </div>
                <motion.div
                    ref={containerRef} 
                    animate={mainControl}
                    initial = "hidden"
                    variants=
                    {
                        {
                            hidden: {opacity: 0, y: 75},
                            visible: {opacity: 1, y: 0}
                        }
                    } transition={{ delay: 0.3,  duration: 0.5 }} 
                    className={styles.popupText} id='heroes-text'>
                        <p style={{fontWeight: '50'}}>Where 
                            <span style={{fontWeight: '450'}}> Heroes 
                                </span> Come To <span style={{fontWeight: '450'}}>Light.</span></p>
                </motion.div>
        </div> 
        </>
    );
}