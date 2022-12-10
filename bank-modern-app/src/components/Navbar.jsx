import React from 'react'
import { useState } from 'react'
import { logo,menu,close} from '../assets'
import { navLinks } from "../constants"
function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between items-center py-6 navbar w-full '>
       <img src={logo} alt="hoobank" className='w-[124px] h-[32px] '/>

       <ul className=' sm:flex   justify-end  flex-1 items-center hidden '>
        {navLinks.map((nav,index)=>(
          <li className={`font-poppins font-normal text-[16px]  text-white ${index===navLinks.length-1 ? 'mr-0':'mr-10'}`} >
           <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
       </ul>

       <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" onClick={()=>setToggle((prev)=>!prev)} />
       </div>

       <div className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar sm:hidden`}
        >
           <ul className=' flex  flex-col  justify-end  flex-1 items-center sm:hidden '>
        {navLinks.map((nav,index)=>(
          <li key={nav.id} className={`font-poppins font-normal text-[16px] text-white ${index===navLinks.length-1 ? 'mr-0':'mb-10'} cursor-pointer`} >
           <a href={`#${nav.id}`}> {nav.title}</a>
          </li>
        ))}
       </ul>
        </div>
    </nav>
  )
}

export default Navbar
