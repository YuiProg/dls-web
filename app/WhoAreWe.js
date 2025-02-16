'use client';

import styles from './css/whoarewe.module.css';
import WAE from './Contents/WAE.json'
import Image from 'next/image';
import image1 from './images/wwa/1.png';
import image2 from './images/wwa/2.png';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function WhoAreWe(){

    const containerRef = useRef(null);
    const mainControl = useAnimation();
    const isInView = useInView(containerRef, { once : true});


    useEffect(() => {
        if (isInView) {
            mainControl.start('visible');
        }
    },[isInView]);

    const descriptions = WAE;

    const contentLeft = descriptions.map((items, index) => 
        <div className={styles.container} key={index}>
            <h1>{items.header}</h1>
            <p>{items.desc}</p>
        </div>);

    const contentRight = descriptions.map((items, index) => 
        <div style={{
            fontSize: "20px",
            width: "25%",
            marginLeft: "0%",
            marginBottom: "0%",
            paddingTop: "10%"
            }} key={index}>
            <h1>{items.header}</h1>
            <p>{items.desc}</p>
        </div>);

    return (
        <>
        <div className={styles.wweContainer}>
            <motion.div style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginBottom: "0px",
                height: "200px",
                paddingTop: "200px",
                zIndex: "999"
            }} ref={containerRef} animate={mainControl} initial="hidden" variants={
                {
                    hidden: {opacity: 0, x: -75},
                    visible: { opacity: 1, x: 0}
                }
            } transition={{delay: .3, duration: 1}}>
                {contentLeft[0]}
                <div style={{
                     paddingTop: "10%",
                     paddingBottom: "30px"
                     }}>
                    <Image src={image1} alt='wwa' width={500}/>
                </div>
            </motion.div>
            <motion.div style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginBottom: "0px",
                height: "700px",
            }} ref={containerRef} animate={mainControl} initial="hidden" variants={
                {hidden: {opacity: 0 , x: 75},
                 visible: {opacity: 1, x:0}
                }
            } transition={{delay: .3, duration: 1}}>
                <div style={{
                     paddingTop: "20%",
                     marginLeft: "23%",
                     marginBottom: "80px"
                     }}>
                    <Image src={image2} alt='wwa' width={500}/>
                </div>
                {contentRight[1]}
            </motion.div>
        </div>
            
        </>
    );
}