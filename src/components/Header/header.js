import React from 'react'
import {connect} from "react-redux";
import {toggle} from '../../redux/index'
function Header(props){
    return(
    <header className="App-header">
        <h1 className='name'>Subhash Kumar Jaiswal</h1>
        <h4 className='job'><div className='green_dot'></div>Web Developer</h4>
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