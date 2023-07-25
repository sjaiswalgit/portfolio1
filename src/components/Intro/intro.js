import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css'
export default function Intro(){
    return(
    <div className={`${styles.intro}`}>
        <p className={styles.greetings}>Hello</p>
        <h3 className={styles.starting_intro}>Here's who I am AND what I do</h3>
        <div className={styles.btn}>
                <NavLink to='/resume'><button className={styles.resume_btn}>RESUME</button></NavLink>
                <NavLink to='/projects'><button className={styles.projects_btn}>PROJECTS</button></NavLink>
        </div>
        <p className={styles.about_myself}>
            I am a web development enthusiast. I am on a journey to learn and polish my frontend skills. I have acquired skills in HTML, CSS, React and JavaScript .
        </p>
        <p className={styles.about_myself}>
            I am actually a Mechnaical Engineer by degree. But the addictive nature of coding got me and here I am developing and learning frontend of web to create some efficient and functional interfaces.
        </p>
    </div>
    )
}