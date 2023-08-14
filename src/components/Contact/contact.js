import React from "react";
import styles from './styles.module.css'
export default function Contact(){
    return(
    <div className={styles.get_in_touch}>
        <div className={styles.contacts}>
            <p className={styles.connect}>Call</p>
            <p className={styles.phone_num}>
                +91-8133933438
            </p>
        </div>
        <div className={styles.contacts}>
            <p className={styles.connect}>Write</p>
            <a href="mailto:subhashkjaiswal333@gmail.com" className={styles.email} target="_blank" rel="noreferrer">subhashkjaiswal333<br className={styles.break}/>@gmail.com</a>
        </div>
        <div className={styles.contacts}>
            <p className={`${styles.connect} ${styles.follow}`}>Follow</p>
            <div className={styles.social}>
                <a href="https://www.facebook.com/subhash.jaiswal.9699" target="_blank" rel="noreferrer"><i className={`${styles.socialLogo} fa-brands fa-facebook-f`}></i></a>
                <a href="https://www.linkedin.com/in/subhash-kumar-jaiswal" target="_blank" rel="noreferrer"><i className={`${styles.socialLogo} fa-brands fa-linkedin-in`}></i></a>
                <a href="https://www.instagram.com/subhash.jaiswal.9699" target="_blank" rel="noreferrer"><i className={`${styles.socialLogo} fa-brands fa-instagram`}></i></a>
            </div>
        </div>
    </div>
    )
}