import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Carousel from './Carousel.jsx'
import Faq from '../Utils/Faq.jsx'

function Home() {
  return (
    <>
     
     <Body/>
     <Carousel/>
     <Faq/>
     <Footer/>
     </>
  )
}

export default Home