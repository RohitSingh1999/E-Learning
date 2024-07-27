import React from 'react'
import Navbar from './common/Navbar'
import Hero from './Hero'
import Footer from './common/Footer'
import Login from './Login'
import Html from './component/html/Html'
import Css from './component/css/Css'
import Java from './component/java/Java'

import MySql from './component/mySql/MySql'
import Python from './component/python/Python'
import ReactJs from './component/react/ReactJs'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import JavaScript from './component/javaScript/JavaScript'
import AboutUs from './component/AboutUs'


function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Hero />} />
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/html" element={<Html/>}></Route>
          <Route path="/css" element={<Css/>}></Route>
          <Route path="/javaScript" element={<JavaScript/>}></Route>
          <Route path="/java" element={<Java/>}></Route>
          <Route path="/react" element={<ReactJs/>}></Route>
          
          <Route path="/mySql" element={<MySql/>}></Route>
          <Route path="/python" element={<Python/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
         
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
