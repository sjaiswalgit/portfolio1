import React from 'react'
import {connect} from "react-redux";
import {NavLink} from 'react-router-dom';
import NavBar from "../Navbar/navbar"
import styles from './styles.module.css'
import {toggle} from '../../redux/index'
function Header(props){
    return(
    <header className={styles.navbar} >
        <div className={styles.nav_brand}>
            <h1 className={styles.name}>
                <NavLink to='/' style={{color:'black',textDecorationLine:'none'}}><span className={styles.blue_dot}> </span>Subhash Kr. Jaiswal</NavLink>
            </h1>
            <h4 className={styles.job}><span className={styles.slash}>/</span>SOFTWARE DEVELOPER</h4>
        </div>

      <div className={`${styles.nav_dropdown} ${props.count===1?props.navBar?`${styles.close}`:`${styles.open}`:''}`} onClick={props.toggle}>
                <div className={`${styles.line1}`}></div>
                <div className={`${styles.line2}`}></div>
                <div className={`${styles.line3}`}></div>
      </div>
      <NavBar/>
    </header>)
}
function mapStateToProps(globalState){
    return{
      navBar:globalState.navBar,
      count:globalState.count
    }
  }
  const mapDispatchToProps={
    toggle:toggle
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Header);