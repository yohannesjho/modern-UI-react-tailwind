import React from 'react'

function Button({style}) {
  return (
    <div>
       <button type="button" className={`font-poppins py-4 px-6 font-medium text-[18px] bg-blue-gradient rounded-[10px] ${style}`}>Get Started</button>
    </div>
  )
}

export default Button
