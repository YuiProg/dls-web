"use client";

import Image from "next/image";
import styles from "./css/Navigation.module.css";
import dlslogo from "./images/dlslogo.png";
import './css/globals.css';
import { Link, Element } from "react-scroll";
import Home from "./Home";
import News from "./News";
import WhoAreWe from "./WhoAreWe";

export default function Navigation() {

    return (
        <>
        <div className={styles.Navigation}>
            <header className={styles.header}>
                <nav className={styles.navSection}>
                    <ul className={styles.list}>
                        <li><Link to="home" smooth={true} duration={500}>HOME</Link></li>
                        <li><Link to="news" smooth={true} duration={500} offset={-80}>NEWS</Link></li>
                        <li><Link to="whoarewe" smooth={true} duration={500} offset={150}>WHO WE ARE</Link></li>
                        <nav className={styles.navSection}>
                    <ul className={styles.list}>
                        <li className={styles.dropdownContainer}>
                            PROGRAMS
                            <div className={styles.dropDownContent}>
                                <ul>
                                    <li className={styles.dropDownItems}>SMART GIGA ARANETA</li>
                                    <li className={styles.dropDownItems}>ESTUDYANTE ESPORTS</li>
                                    <li className={styles.dropDownItems}>PBA ESPORTS</li>
                                    <li className={styles.dropDownItems}>REGISTER</li>
                                </ul>
                            </div>
                        </li>
                    </ul>dsa
                </nav>
                    </ul>
                </nav>

                <div className={styles.logoContainer}>
                <Link to="home" smooth={true} duration={500}>
                    <Image src={dlslogo} alt="DLS Logo" className={styles.Image} />
                </Link>
                </div>

                <nav className={styles.navSection}>
                    <ul className={styles.list}>
                        <li>EVENTS</li>
                        <li>SERVICES</li>
                        <li>CAREER</li>
                        <li>CONTACT US</li>
                    </ul>
                </nav>
            </header>
        </div>
        <Element name="home">
            <section style={{height: '110vh'}}>
                <Home/>
            </section>
        </Element>
        <Element name="news">
            <section style={{height: '220vh'}}>
                <News/>
            </section>
        </Element>
        <Element name="whoarewe">
            <section style={{height: '300vh', backgroundColor: 'white', color: 'black'}}>
                <WhoAreWe/>
            </section>
        </Element>
        </>
    );
}
