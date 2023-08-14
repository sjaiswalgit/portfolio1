import React from "react";
import Estore from '../../images/E-store.png'
import ChatApp from '../../images/Chat-App.png'
import Card from '../../components/Card/card'
import styles from './styles.module.css'
export default function Projects(){
    React.useEffect(()=>window.scrollTo(0,0),[])
    return(
        <div className={styles.projects}>
            <h1 className={styles.project}><span className={styles.blue_dot}> </span>Projects</h1>
            <Card render={()=>(
                <>
                    <p className={styles.project_name}><span className={styles.blue_bar}></span>E-Store</p>
                    <p className={styles.role}><span className={styles.blue_bar}></span>Developer</p>
                    <p className={styles.project_description}>This Project was created with the purpose of developing a frontend for E commerce website and implimenting concepts error handling, conditional rendering, custom validity message and React hooks. It has a client side routing. 
                    It fetches data fom an open source api name fakestore and useContext to serve data to its different childs</p>
                    <a href='https://sjaiswalgit.github.io/E-store-project' target="_blank" rel="noreferrer" ><img src={Estore} alt='project_image' className={styles.project_img}/></a>
                </>
            )
            } className={styles.card}/>
            <Card render={()=>(
                <>
                    <p className={styles.project_name}><span className={styles.blue_bar}></span>Chat App</p>
                    <p className={styles.role}><span className={styles.blue_bar}></span>Developer</p>
                    <p className={styles.project_description}>This Project was created with the purpose of integration of frontend and backend. It uses Firestore for authentication and storage of data purspose.</p>
                    <a href='https://sjaiswalgit.github.io/React-Chat-App' target="_blank" rel="noreferrer"><img src={ChatApp} alt='app link' className={styles.project_img}/></a>
                </>
            )
            } className={styles.card}/>
        </div>
    )
}