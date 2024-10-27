import React from "react";
import Card from '../../components/Card/card'
import styles from './styles.module.css'
import CV from '../../Subhash_resume.pdf'
export default function Resume() {
    React.useEffect(() => window.scrollTo(0, 0), [])
    return (
        <div className={styles.resume_section}>
            <h1 className={styles.resume}><span className={styles.blue_dot}> </span>Resume</h1>

            <div className={styles.exp_section}>
                <div className={styles.resume_access}>
                    <h3 className={styles.exp}>Experience</h3>
                    <a href={CV} target='_blank' rel="noreferrer"><button className={styles.cv}>DOWNLOAD CV</button></a>
                </div>
                <Card render={() => (

                    <>
                        <p className={styles.date}>2023-present</p>
                        <p className={styles.job_pos}>Web Developer</p>
                        <ul className={styles.job_des}>
                            <li><b>Developed APIs and Analytics Dashboards:</b>  Designed and implemented REST APIs , analytics and reporting pages in a Node.js application, enhancing data access and insights. Used MongoDB aggregation to optimize API response times, achieving a 30% efficiency boost.</li>
                            <li><b>Advanced Detection Solutions:</b> Built configurable software for face recognition, alcohol detection, and personal protective equipment (PPE) compliance, enabling the software to verify individuals' identities, assess alcohol levels, and confirm PPE adherence as required. This expanded the application’s scope to include real-time safety and compliance monitoring capabilities.</li>
                            <li><b>Interactive Detection Zone Selection UI:</b> Developed a user interface that allows users to select specific areas within the camera view by drawing detection zones. This feature enables precise configuration for face recognition, alcohol detection, and PPE compliance, focusing detection efforts only on relevant areas within the field of view.</li>
                            <li><b>Performance Optimization:</b> Optimized a face recognition API, achieving a 20% improvement in response time.</li>
                            <li><b>Mobile Application Development with Face Recognition:</b> Developed an Android app using React Native and the MobileFaceNet TensorFlow Lite face-recognition model for secure login and personalized report generation. The app also includes interactive safety training modules and assessments, utilizing facial recognition and tracking to measure user attentiveness and dynamically score users based on multiple-choice responses and engagement metrics.</li>
                            <li><b>Configurable System Integration:</b> Merged multiple projects into a unified solution through a configuration file, enhancing modularity and ease of deployment.</li>
                        </ul>
                        <p className={styles.company}>Gotisheel Tecnologies</p>
                        <p className={styles.location}>Guwahati</p>
                        <p className={styles.date}>2021-2023</p>
                        <p className={styles.job_pos}>Area Service Manager</p>
                        <ul className={styles.job_des}>
                            <li><b>Customer Complaint Reduction: </b>Analyzing the root causes of the customer complaint management data by pulling data from Centralized Data
                                Management System (CDMS) and implenting the proposed action plans against the same ,result-able to reduce
                                customer complaints by 10% in Q4 w.r.t. Q3 of F21-22.
                            </li>
                            <li><b>Dealer Service Plans: </b>Preparing Dealer Service Plan (DSP) for two dealerships including their service business KPI's and reviewed their
                                performance on the same along with senior mentor.
                            </li>
                            <li><b>Feedback Analysis: </b>Analyzing the vehicle service feedbacks - NPS (net promoter score ) dashboard -in Power BI.</li>
                            <li><b>Inventory Management: </b>Monitoring the spares ordering and inventory management i.e. physical stock v.s. system stock (Excelleon
                                software-Centralised Dealer Management System), auto order , daily order.
                            </li>
                            <li><b>Technical Issue Identification: </b>Analysing the FFRs (Field Failure Reports), and highlighting the critical technical issues to the CQA and R&D team
                                for improvement in the product durabilty and reliability.
                            </li>
                        </ul>
                        <p className={styles.company}>Bajaj Auto Ltd.</p>
                        <p className={styles.location}>Raipur</p>
                    </>
                )} className={styles.card}
                />
            </div>
            <div className={styles.edu_section}>
                <h3 className={styles.edu}>Education</h3>
                <Card render={() => (

                    <>
                        <p className={styles.date}>2017-2021</p>
                        <p className={styles.institute}>NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR</p>
                        <p className={styles.degree}>Bachelor Of Technolgy</p>
                        <p className={styles.location}>Silchar,Assam</p>

                        <p className={styles.date}>2014-2016</p>
                        <p className={styles.institute}>B.BOROOAH COLLEGE</p>
                        <p className={styles.company}>Senior Secondary</p>
                        <p className={styles.location}>Guwahati,Assam</p>

                        <p className={styles.date}>2014</p>
                        <p className={styles.institute}>PRESIDENCY SCHOOL</p>
                        <p className={styles.company}>Secondary</p>
                        <p className={styles.location}>Guwahati,Assam</p>

                    </>

                )} className={styles.card}
                />
            </div>
            <div className={styles.skills}>
                <Card render={() => (
                    <>
                        <p className={styles.prof_header}>Professional Skillset</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>Reactjs</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>React Native</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>HTML5</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>CSS</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>Javascript</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>Redux</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>Python</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>NodeJs</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>MongoDb</p>
                        <p className={styles.prof}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>OOPs</p>
                        <p className={styles.lang_header}>Languages</p>
                        <p className={styles.lang}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}> </span>English (proficient)</p>
                        <p className={styles.lang}><span className={styles.blue_dot} style={{ width: '13px', height: '13px' }}></span>Hindi (Native)</p>
                    </>
                )} className={styles.skillsCard}
                />
            </div>
        </div>
    )
}