import React from 'react'
import List from "../leaderboard/list"

function Leaderboard() {
  return (
    <div className='w-screen h-screen bg-neutral-900  justify-center flex pt-10 font-poppins'>
        <div className='w-7xl min-w-0 h-full flex gap-2 flex-col'>
            
            <div className='flex flex-col gap-2 border-b border-white/10 pb-5  h-15 w-7xl '>
                <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-end pb-9'>
                    <h1 className='font-poppins text-3xl font-semibold tracking-normal text-white sm:text-4xl'>
                        Leaderboard
                    </h1>
                </div>


            </div>


            <div className='w-full  mt-2'>
                <div className=' border-2 border-white/10 rounded-lg w-35 h-10.5 cursor-pointer active:scale-99 transition-all duration-200 bg-neutral-900 flex justify-center items-center'>
                    <p className='font-poppins tracking-tight px-3 py-1 border border-white/20 rounded-sm w-33 bg-white/10 '>Last 24 hours</p>
                </div>
            </div>


            <div>
                <List />
            </div>
            

        </div>
    </div>
  )
}

export default Leaderboard