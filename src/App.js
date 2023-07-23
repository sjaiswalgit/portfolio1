import './App.css'
import React from 'react'
import Intro from './components/Intro/intro'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Card from './components/Card/card'
import NavBar from './components/Navbar/navbar';
import {connect} from "react-redux";
import {toggle} from './redux/index'
const App = (props) => {
  return (
    <div className={`App ${props.navBar?'stop_overflow':''}`}>
      <NavBar/>
      <div className='about'>
        <Header />
        <Card/>
        <Intro/>
      </div>
      <div className="contact">
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
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
export default connect(mapStateToProps,mapDispatchToProps)(App);