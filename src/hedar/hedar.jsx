import React from 'react'
import './hedar.css'
import Logo from '../assets/logo.svg'
function hedar() {
  return (
    <>
      <nav class="bg-white border-gray-200">
  <div class="max-w-screen-xl flex flex-wrap items-center  mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} class="h-8" alt="Flowbite Logo" />
        
    </a>
    
    <div class="hidden w-full md:block md:w-auto justify-start ml-12 " id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  items-start">
        <li>
          <a href="#" class="block py-2 px-3  font-bold  text-white  rounded md:bg-transparent  md:p-0 dark:text-black  " aria-current="page">STORIES</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">EVENTS</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">PLACES</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 font-bold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-black  dark:hover:bg-gray-700  md:dark:hover:bg-transparent">BOARDS</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default hedar
