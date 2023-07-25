import React from "react";
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
                    <p className={styles.project_description}>It was my first project I built after learning React. It is a onditional rendering, use of hooks like useState and useEffect are used.</p>
                    <a href='' target="_blank" ><img src="" alt='project_image' className={styles.project_img}/></a>
                </>
            )
            } className={styles.card}/>
        </div>
    )
}