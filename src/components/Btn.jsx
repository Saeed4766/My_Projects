import React from 'react'

const Btn = ({backg,children}) => {
  return (
    <div>
      <button className={`bg-${backg} text-white text-xl px-3 py-2 rounded-md`} >
        {children}
      </button>
    </div>
  )
}

export default Btn
