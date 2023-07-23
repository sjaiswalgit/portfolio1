import React from "react";
import {connect} from 'react-redux';
import {toggle} from '../../redux/index'
function NavBar(props){
    return(
        <div>
            <nav className={`nav_links ${props.count?props.navBar?'nav-page':'nav-items':''}`}>
                <p className='nav-item'>ABOUT ME</p>
                <p className='nav-item'>RESUME</p>
                <p className='nav-item'>PROJECTS</p>
                <p className='nav-item'>CONTACT</p>
            </nav>
        </div>
    );
}
function mapStateToProps(globalState){
    return {
        navBar:globalState.navBar,
        count:globalState.count
    }
}
const mapDispatchToProps={
    toggle:toggle
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);