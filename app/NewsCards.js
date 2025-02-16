'use client';
import styles from './css/News.module.css'
import './css/NewsCards.css';
import Image from 'next/image';

export default function NewsCards(props){


    const items = props.topic;

    const topic = items.map((topic, index) => 
        <>
        <div className={styles.imageCard}>
            <Image alt={index} style={{width: "500px",
                                       height: "auto",
                                       position: "absolute",
                                       left: "auto"
            }} src={topic.image} width={500} height={0}/>
        </div>
        <div className={styles.textCard}>
            <h1>{topic.topic}</h1>
            <p>{topic.Date}</p>
            <p>{topic.Desc}</p>
            <button>
                <span>SEE MORE</span>
            </button>
        </div>
        </>);

    return (
        <div className="cards">
            <div className="card red">
                {topic[0]}
            </div>
            <div className="card blue">
                {topic[1]}
            </div>
            <div className="card green">
                {topic[2]}
            </div>
            <div className="card green">
                {topic[3]}
            </div>
        </div>
    );
}