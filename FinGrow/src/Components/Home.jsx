import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Carousel from './Carousel.jsx'
import Faq from '../Utils/Faq.jsx'
import News from './News.jsx'
import Chatbot from './ChatBot.jsx'

function Home() {
  return (
    <>
     
     <Body/>
     <Carousel/>
     <News/>
     <Faq/>
     <Chatbot/>
     
     </>
  )
}

export default Home