import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-cyan-600 hover:bg-cyan-400 font-[poppings] text-white px-6 py-2 mx-4 rounded md:ml-8  '>
      {props.children}
    </div>
  )
}

export default Button
