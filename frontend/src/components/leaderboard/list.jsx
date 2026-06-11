import React from 'react'

function List() {
  return (
    <div className='w-full h-full bg-neutral-900 '>


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
  )
}

export default List