'use client';

import styles from './css/News.module.css';
import NewsCards from './NewsCards';
import news1 from './images/news1.png';
import news2 from './images/news2.png';
import news3 from './images/news3.png';
import news4 from './images/news4.png';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function News () {

    
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });
    const mainControl = useAnimation();

    
    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    },[isInView]);


    const cardContent = [
        {
            image: news1,
            topic: 'Estudyante Esports to partner with PBA for biggest collegiate esports league in PH',
            Date: 'October 14, 2024, 9:10 pm | By Caezar Julius Cortez',
            Desc: 'WITH the Philippine Basketball Association as its official tournament partner, Dark League Studios recently introduced Estudyante Esports, the largest, most extensive and all-inclusive inter-school esports competition in the country to date. From the organizers of the recently concluded UAAP Esports Competition comes The National Championships, where it will feature 4 esports titles: Mobile Legends: Bang Bang, Valorant, League of Legends and Tekken 8.'
        },
        {
            image: news2,
            topic: 'Riot Games partners with Estudyante Esports to offer VALORANT scholarship',
            Date: 'October 10, 2024 | By from the wires',
            Desc: 'REINFORCING THEIR commitment to elevating the competitive gaming and esports scene for local grassroots gaming communities in the country,Riot Games Philippines today announced that VALORANT has partnered with Estudyante Esports in support of their nationwide campus league. In addition to a cash prize pool, VALORANT will also be covering one full semester of tuition for the winning school team–amounting to a combined prize value of nearly 1 million pesos.'
        },
        {
            image: news3,
            topic: "UAAP's venture into esports aims to promote responsible gaming",
            Date: 'August 7, 2024 | Carlos Pineda',
            Desc: "ESPORTS HAS slowly inched its way to become a competitive avenue in collegiate sports as seen from events held by AcadArena,Dark League Studios, and Collegiate Center for Esports. But with the UAAP officially incorporating esports in its list of events, the push for gaming to be a part of a school's program can lead to numerous opportunities especially for students. It was Cignal TV who pushed for esports to be included and they contacted Dark League Studios."
        },
        {
            image: news4,
            topic: "Dark League Studios’ CEO Talks About Sustainability in Esports and Support From UAAP",
            Date: 'August 15, 2024 | Ramon Domingo',
            Desc: "As one of the partners behind UAAP esports, Dark League Studios knows a thing or two about running grassroots events. CEO AC Valdenor has helped launch esports events that highlight local and academic communities. All of them have the goal of not just promoting esports but building it into a sustainable industry. Dark League Studios’ role in handling UAAP esports is vital as this is their chance to show people from all generations the influence and importance of esports."
        }
    ];

    return (
        <>
            <div className={styles.newsContainer}>
                <motion.p className={styles.happeningText} ref={containerRef} animate={mainControl} initial="hidden" variants={
                    {hidden: {opacity: 0, y: 75},
                     visible: {opacity: 1, y: 0}}
                } transition={{delay: 0.3, duration: 0.5}}>WHATS <span style={{fontWeight: "bold"}}>HAPPENING?</span></motion.p>
                <div className={styles.cardHolder}>
                    {<NewsCards topic={cardContent.map(content => content)}/>}
                </div>
            </div>            
        </>
    );
}