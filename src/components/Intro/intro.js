import React from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.module.css'
export default function Intro() {
    return (
        <div className={`${styles.intro}`}>
            <p className={styles.greetings}>Hello</p>
            <h3 className={styles.starting_intro}>Here's who I am AND what I do</h3>
            <div className={styles.btn}>
                <NavLink to='/resume'><button className={styles.resume_btn}>RESUME</button></NavLink>
                <NavLink to='/projects'><button className={styles.projects_btn}>PROJECTS</button></NavLink>
            </div>
            <p className={styles.about_myself}>
                Driven by an insatiable curiosity for solving real-world challenges,
                I thrive in the intersection of technology and functionality.
                With my skills in React.js, Node.js, MongoDB, and AI problem-solving,
                I craft web applications that are not only efficient but tailored to address industrial needs.
                My background in Mechanical Engineering equips me with a unique perspective,
                enabling me to tackle complex problems with practical, scalable solutions.
            </p>
            <p className={styles.about_myself}>
                Whether building dynamic user interfaces or architecting robust backend systems,
                I am committed to continuously refining my craft. I focus on creating products that streamline processes
                and deliver meaningful outcomes, blending innovation with real-world applicability.
                Every project is an opportunity to learn, grow, and push the boundaries of what’s possible in software development
            </p>
        </div>
    )
}