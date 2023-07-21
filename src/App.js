import './App.css'
import React from 'react'
import Intro from './components/Intro/intro'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Card from './components/Card/card'
const App = () => {
  return (
    <div>
      <Header/>
      <Card/>
      <Intro/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App