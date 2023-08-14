import React from "react";
import styles from './styles.module.css'
export default function Socials(){
    return(
    <div className={styles.social}>
        <a href="https://www.facebook.com/subhash.jaiswal.9699" target="_blank" rel="noreferrer" ><i className={`${styles.socialLogo} fa-brands fa-facebook-f`}></i></a>
        <a href="https://www.linkedin.com/in/subhash-kumar-jaiswal" target="_blank" rel="noreferrer" ><i className={`${styles.socialLogo} fa-brands fa-linkedin-in`}></i></a>
        <a href="https://www.instagram.com/subhash.jaiswal.9699" target="_blank" rel="noreferrer" ><i className={`${styles.socialLogo} fa-brands fa-instagram`}></i></a>

    </div>
    )
}