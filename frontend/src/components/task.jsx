import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdEditNote } from "react-icons/md";

function Task() {


      const [sidebar, setSidebar] = useState(false);
    
      const handleSidebar = () => {
        setSidebar(!sidebar);
      };
    

  return (

    <div className='overflow-hidden flex'>


        <div className=' text-neutral-400 w-full h-auto bg-amber-200 z-33 '>

            <div onClick={handleSidebar} className='bg-neutral-700/50  rounded-md flex justify-center items-center p-0.5 cursor-pointer hover:text-white transition-all duration-100 absolute z-11 right-5 top-4.5 '>
                <MdEditNote className='text-2xl ' /> 
            </div>

        </div>



        <div className={`h-screen bg-neutral-900/98 w-95  text-neutral-400 px-3 py-3 absolute flex flex-col   p-3    right-0 border border-y-0 border-r-0 border-l-neutral-700/50 transition-all z-10 duration-300 ${sidebar ? "-ml-none opacity-100" : " opacity-0 "}`}>

            <div className='flex items-center justify-between  border-2 border-neutral-700/40 border-x-0 border-t-0'>
                <p className='font-poppins font-semibold  text-2xl text-neutral-400 pb-3 px-3 pt-1'>Tasks</p>

                
                
            </div>
            

            <form action="" className=''>
                <div className='flex flex-row  items-center justify-center mt-5 mb-5 border-2 border-neutral-600/50 rounded-lg focus-within:border-2 focus-within:border-neutral-600 transition-all duration-100'>
                    
                    <button className='size-9 hover:bg-neutral-700/50 text-white rounded-md  cursor-pointer active:scale-98 transition-all duration-100 text-2xl justify-center items-center -ml-6 '>+</button>
                
                    <input type="text" className='outline-0 rounded-md w-73 h-11  px-3 font-poppins text-lg placeholder:text-neutral-500 -ml-2' placeholder='Add tasks' />

                </div>
            </form>



            <div className='pb-5 border border-b-neutral-600/40 border-t-0 border-x-0 '>


                <div className='flex gap-2 justify-between px-5 pt-2'>

                    <div className='flex gap-3 items-center'>
                        <p className='rounded-sm   cursor-pointer    transition-all duration-100 text-2xl text-neutral-500'><MdCheckBoxOutlineBlank /></p>
                    <p className='font-poppins '>Fix bugs</p> 
                    </div>
                    

                    <button className=' text-red-600/40 text-xl w-7 h-7 rounded-full ml-2 cursor-pointer active:scale-98 transition-all duration-100 text- justify-center items-center hover:bg-red-500/10 flex '><p className='pb-0.5'><RxCross2 /></p></button>

                </div>
                <div className='flex gap-2 justify-between px-5 pt-2'>

                    <div className='flex gap-3 items-center'>
                        <p className='rounded-sm   cursor-pointer    transition-all duration-100 text-2xl text-neutral-500'><MdCheckBoxOutlineBlank /></p>
                    <p className='font-poppins '>improve UI</p> 
                    </div>
                    

                    <button className=' text-red-600/40 text-xl w-7 h-7 rounded-full ml-2 cursor-pointer active:scale-98 transition-all duration-100 text- justify-center items-center hover:bg-red-500/10 flex '><p className='pb-0.5'><RxCross2 /></p></button>

                </div>
                <div className='flex gap-2 justify-between px-5 pt-2'>

                    <div className='flex gap-3 items-center'>
                        <p className='rounded-sm   cursor-pointer    transition-all duration-100 text-2xl text-neutral-500'><MdCheckBoxOutlineBlank /></p>
                    <p className='font-poppins '>complete project work</p> 
                    </div>
                    

                    <button className=' text-red-600/40 text-xl w-7 h-7 rounded-full ml-2 cursor-pointer active:scale-98 transition-all duration-100 text- justify-center items-center hover:bg-red-500/10 flex '><p className='pb-0.5'><RxCross2 className='text-[19px] ' /></p></button>

                </div>


            </div>

        </div>
    </div>
    
  )
}

export default Task