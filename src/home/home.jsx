import React from 'react'
import './home.css'
import HedarFrom from "../hedar/hedar"
import hero from '../assets/hero.png'
function home() {
  return (
    <>
      <HedarFrom/>
    <div className='home'>
      <div class="parent">
      <div class="div1"> <img className='heroimg' src={hero} /> </div>
      <div div class="div2 items-center "> 
      <div className='yourname flex items-stretch '>
      <h6 className='your font-bold mx-3' >Y </h6><h6 className='your font-bold mx-3' >O</h6><h6 className='your font-bold mx-3' >U</h6> <h6 className='your font-bold mx-3' >R</h6> 
      </div>
      <div className='text-t '>
      <p className='text-h font-bold '>
      Beautiful Escape
      </p>
      <p className='p-text'>
      One of the greatest things about the sport of surfing is that you need only three things: your body, 
a surfboard, and a wave.
      </p>
      </div>
      </div>

</div>
    </div>
    </>
  )
}

export default home
