import './App.css'
import React from 'react'
import Intro from './components/Intro/intro'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
const App = () => {
  return (
    <div>
      <Intro/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App