import React from 'react'
import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'
import Carousel from './Carousel.jsx'
import Faq from '../Utils/Faq.jsx'
import News from './News.jsx'
import Chatbot from './ChatBot.jsx'
import GeneralCalculator from './General-Calculator.jsx'

function Home() {
  return (
    <>
      <div className=' bg-[#ffffe6] '>

        <Body />
        <Carousel />
        <GeneralCalculator />
        <News />

        <Faq />
        <Chatbot />
      </div>
    </>
  )
}

export default Home