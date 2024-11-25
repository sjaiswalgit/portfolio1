import React from "react";
import DragApp from '../../images/dragapp.jpeg'
import ChatApp from '../../images/chatapp.jpeg'
import Card from '../../components/Card/card'
import styles from './styles.module.css'
export default function Projects() {
    React.useEffect(() => window.scrollTo(0, 0), [])
    return (
        <div className={styles.projects}>
            <h1 className={styles.project}><span className={styles.blue_dot}> </span>Personal Projects</h1>
            <Card render={() => (
                <>
                    <p className={styles.project_name}><span className={styles.blue_bar}></span>Drag and Drop UI Builder</p>
                    <p className={styles.role}><span className={styles.blue_bar}></span>Developer</p>
                    <p className={styles.project_description}>An interactive web tool that allows users to drag and style UI components with real-time previews, enabling them to instantly copy optimized React.js code for seamless integration.
                        This platform enhances design efficiency, making it ideal for both new developers and frontend professionals.</p>
                    <a href='https://sjaiswalgit.github.io/drag-code-gen/' target="_blank" rel="noreferrer" ><img src={DragApp} alt='project_image' className={styles.project_img} /></a>
                </>
            )
            } className={styles.card} />
            <Card render={() => (
                <>
                    <p className={styles.project_name}><span className={styles.blue_bar}></span>Chat App</p>
                    <p className={styles.role}><span className={styles.blue_bar}></span>Developer</p>
                    <p className={styles.project_description}>This is one of my initial projects on my web development learning journey, where I built a real-time chat application using React for a dynamic frontend and Firebase for backend support, including authentication and real-time data synchronization.</p>
                    <a href='https://sjaiswalgit.github.io/react-chat-app' target="_blank" rel="noreferrer"><img src={ChatApp} alt='app link' className={styles.project_img} /></a>
                </>
            )
            } className={styles.card} />
        </div>
    )
}