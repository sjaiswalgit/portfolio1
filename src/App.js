import './App.css'
import React from 'react'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import About from './pages/About/about'
import ContactForm from './pages/ContactForm/contactform'
import Resume from './pages/Resume/resume'
import Project from './pages/Project/project'
import {Routes as Switch,Route} from 'react-router-dom'
import {connect} from "react-redux";
import {toggle} from './redux/index'
const App = (props) => {
  const [app,setApp]=React.useState('')
  function show(){
    if(document.documentElement.scrollHeight-window.innerHeight===Math.ceil(window.scrollY)){
      setApp('show')
    }
    // else{
    //   if(app==='show'){
    //     setApp('');
    //   }
    // }
  }
  React.useEffect(()=>{
  window.addEventListener('scroll',show)},[])
  return (<div className={`App ${props.navBar?'stop_overflow':''}`}>
    <Header/>
    <Switch>
        <Route exact path="/" element={<About/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<ContactForm/>}/>
    </Switch>
    <div className='contact'>
        <Contact/>
        <Footer/>
      </div>
      <button className={`backToTop ${app}`} onClick={()=>window.scrollTo(0,0)}> <i className="fa-solid fa-arrow-up"></i></button>
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