import React from "react";
import {connect} from 'react-redux';
import { toggle,resize } from "../../redux/index";
import {NavLink} from 'react-router-dom';
import styles from './styles.module.css'
function NavBar(props){
    React.useEffect(()=>{window.addEventListener('resize',props.resize)}
,[])
    return(
            <nav className={props.desktop?`${styles.nav_links}`:`${styles.nav_links} ${props.count?(props.navBar?`${styles.navAppear}`:`${styles.navDisappear}`):''}`}>
                <NavLink to ='/' className={({isActive})=>`${styles.navItem} ${isActive?`${styles.selected}`:''}`}  onClick={props.toggle}>ABOUT ME</NavLink>
                <NavLink to ='/resume' className={({isActive})=>`${styles.navItem} ${isActive?`${styles.selected}`:''}`} onClick={props.toggle}>RESUME</NavLink>
                <NavLink to='/projects' className={({isActive})=>`${styles.navItem} ${isActive?`${styles.selected}`:''}`} onClick={props.toggle}>PROJECTS</NavLink>
                <NavLink to='/contact' className={({isActive})=>`${styles.navItem} ${isActive?`${styles.selected}`:''}`} onClick={props.toggle}>CONTACT</NavLink>
            </nav>
    );
}
function mapStateToProps(globalState){
    return {
        navBar:globalState.navBar,
        count:globalState.count,
        desktop:globalState.desktop
    }
}
const mapDispatchToProps={
    toggle:toggle,
    resize:resize
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);