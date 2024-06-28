import React from 'react'
import Navbar from './common/Navbar'
import Hero from './Hero'
import Footer from './common/Footer'
import Login from './Login'
import Html from './component/html/Html'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Registration';

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
        </Routes>
      </Router>
      <Footer />

    </>
  )
}

export default App
