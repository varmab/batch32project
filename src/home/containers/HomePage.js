import React, { useState, useEffect } from 'react'
import Header from '../../shared/components/Header'
import Footer from '../../shared/components/Footer'
import Home from '../components/Home'

const HomePage=()=>{
    return(
       <React.Fragment>
           <Header/>
           <Home/>
           <Footer/>
       </React.Fragment>
    )
}

export default HomePage;