import React from 'react'

function Box({boxData}) {
  return (
    <div className='text-white w-70 h-35 p-5 rounded-md  mb-5 bg-neutral-800/50 text-xl border-2 border-neutral-700/50'>

    <p className='text-md text-neutral-500 font-poppins '>{boxData.title}</p>
    <p className='text-3xl mt-2 font-poppins'>{boxData.time}</p>

    </div>
  )
}

export default Box