import React from 'react'

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


            <div className='rounded-md border-2 border-white/10 w-full h-auto  mt-2'>

                <div className='border-b-2 border-white/10 flex  gap-10 font-poppins text-sm text-neutral-500 bg-white/5 rounded-t-md px-10 py-2 items-center justify-between h-10 w-full  '>

                    <div className='flex gap-10'>
                        <p>Rank</p>
                        <p>Name</p> 
                    </div>
                    
                    <p>Today's time</p>
                    <p>Streak</p>

                </div>


                <div className='w-full h-auto p-5 flex flex-col gap-2'>
                    
                    <div className='bg-white/2 rounded-sm border-2 border-white/10 px-3 py-1 h-15 items-center flex justify-between flex-row'>

                        <div className='flex gap-10'>
                            <div className='pl-5'>
                                <p>1</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='rounded-full size-7 bg-red-500/30 flex items-center justify-center text-xl'>
                                    <p>S</p>
                                </div>
                                <div>
                                    <p>Samiran</p>
                                </div>
                            </div>

                        </div>
                        

                        <div>
                            <p>7.23 hours</p>
                        </div>

                        <div>🔥 23 days</div>

                    </div>
                    
                    <div className='bg-white/2 rounded-sm border-2 border-white/10 px-3 py-1 h-15 items-center flex justify-between flex-row'>

                        <div className='flex gap-10'>
                            <div className='pl-5'>
                                <p>1</p>
                            </div>

                            <div className='flex gap-2'>
                                <div className='rounded-full size-7 bg-cyan-500/30 flex items-center justify-center text-xl'>
                                    <p>M</p>
                                </div>
                                <div>
                                    <p>Mike</p>
                                </div>
                            </div>

                        </div>
                        

                        <div className='flex justify-center items-center '>
                            <p>2.24 hours</p>
                        </div>

                        <div>🔥 12 days</div>

                    </div>

                </div>


            </div>

        </div>
    </div>
  )
}

export default Leaderboard