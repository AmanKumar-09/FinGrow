import React from 'react'
import img3d from '../assets/img/img3d.gif'
import bodyimg2 from "../assets/img/bodyimg2.png"

// import Faq from '../Utils/Faq';

// import  FAQ from "../Utils/Faq"

// import {Spline} from '../Utils/Spline'
// import {SplinePhone} from '../Utils/SplinePhone'





const Body = () => {
  return (
    <>
     
      <div className='px-32  mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
          <div className='  h-96 gap-2 rounded-xl p-6 text-center'>
            {/* <Spline scene="https://prod.spline.design/xcfYvtnDP37ZExAb/scene.splinecode" /> */}
            <img src={img3d} className='h-full w-full object-cover' alt="" />
          </div>
          <div className=' gap-2 rounded p-6  pt-16'>
            <h1 className='text-xl font-bold'>We are growing n how!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum reprehenderit, nulla voluptas id ratione debitis aspernatur officia consequuntur facilis quaerat ullam at libero earum voluptatem facere quas maxime a iste animi amet officiis nemo dignissimos accusantium sapiente. Cumque, distinctio illo quia alias aut esse quidem!</p>
            <button className='bg-yellow-500 py-1 px-3 rounded-xl mt-2'>Know Us</button>
          </div>
        </div>

        {/* grid 2 */}


        <div className='grid grid-cols-1 md:grid-cols-2 mt- gap-3 pt-8'>
          <div className=' gap-2 rounded p-6  pt-16'>
            <h1 className='text-xl font-bold'>Getting started with personalize financial planing !</h1>
            <ol>
              <li>one</li>
              <li>two</li>
              <li>three</li>
            </ol>
            <button className='bg-yellow-500 py-1 px-3 rounded-xl mt-2'>Know Us</button>
          </div>
          <div className='h-96 gap-2 rounded p-6 text-center'>
            {/* <Spline scene="https://prod.spline.design/9kd8l5wjUn79cBxq/scene.splinecode" /> */}
             <img src={bodyimg2} alt="" />
          </div>
        </div>

        {/* frequently ask question  */}

       


      </div>
      
      

    </>
  )
}

export default Body