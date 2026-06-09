import React, { useState } from 'react'
import { useOutletContext } from "react-router";

function Settings() {



  const handleSidebar = (id) => {
    setSidebarOpt(id)
  }

  const { sidebarOpt, setSidebarOpt } = useOutletContext();
  const { outsideClick, setOutsideClick } = useOutletContext();



  return (
    <div className='h-screen w-screen min-w-0 overflow-y-auto bg-neutral-900 px-5 py-6 text-white sm:px-8 lg:px-10 flex flex-col items-center ' 
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "gray transparent",
    }}>

      <div className='w-7xl h-full  items-center   flex flex-col gap-6'>

        <div className='flex flex-col gap-2 border-b border-white/10 pb-5  h-15 w-7xl -ml-2.5'>
          <div className='flex flex-col justify-between gap-3 sm:flex-row sm:items-end pb-9'>
            <h1 className='font-poppins text-3xl font-semibold tracking-normal text-white sm:text-4xl'>
              Settings
            </h1>
          </div>
        </div>

        

          <div className='w-full h-46 rounded-md bg-neutral-800/50 py-5 px-6 border-2 border-white/5 justify-between flex'>
            <div className=' flex flex-col gap-2'>
                <p className='font-poppins text-xl'>Sidebar Mode</p>
                <p className='font-poppins text-sm text-neutral-500 w-60 tracking-tight'>Choose how you want to open and close the sidebar.</p>

            </div>

            <div className='flex gap-3 flex-wrap  items-center'>

              <div onClick={() => handleSidebar("manual")} className={`w-70 h-35 rounded-md border-2 cursor-pointer hover:bg-neutral-800 transition-all duration-200 p-4 flex gap-4 font-poppins justify-center 
               ${sidebarOpt === "manual" ? "border-white bg-neutral-800" : " border-white/5 "} `}>
                <div>
                  <div
                    className={`size-7 rounded-full border-2 flex items-center justify-center
                      ${sidebarOpt === "manual"
                        ? "border-white"
                        : "border-neutral-700"}
                    `}
                  >
                    {sidebarOpt === "manual" && (
                      <div className="size-3 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div>
                    <p>Manual</p>
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm tracking-tight'>Open and close the sidebar manually using the toggle button.</p>
                  </div>
                </div>
              </div>

              <div  onClick={() => handleSidebar("hover")} className={`w-70 h-35 rounded-md border-2 cursor-pointer hover:bg-neutral-800 transition-all duration-200 p-4 flex gap-4 font-poppins justify-center 
               ${sidebarOpt === "hover" ? "border-white bg-neutral-800" : " border-white/5 "} `}>
                <div>
                  <div
                    className={`size-7 rounded-full border-2 flex items-center justify-center
                      ${sidebarOpt === "hover"
                        ? "border-white"
                        : "border-neutral-700"}
                    `}
                  >
                    {sidebarOpt === "hover" && (
                      <div className="size-3 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div>
                    <p className='flex items-center gap-2'>Hover <span className='px-2 py-0.5 rounded-full bg-neutral-700 text-xs text-neutral-300 '>Desktop</span> </p>
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm tracking-tight'>Hover on the left edge of the screen to open the sidebar.</p>
                  </div>
                </div>
              </div>

              <div  onClick={() => handleSidebar("mix")} className={`w-70 h-35 rounded-md border-2 cursor-pointer hover:bg-neutral-800 transition-all duration-200 p-4 flex gap-4 font-poppins justify-center 
               ${sidebarOpt === "mix" ? "border-white bg-neutral-800" : " border-white/5 "} `}>
                <div>
                  <div
                    className={`size-7 rounded-full border-2 flex items-center justify-center
                      ${sidebarOpt === "mix"
                        ? "border-white"
                        : "border-neutral-700"}
                    `}
                  >
                    {sidebarOpt === "mix" && (
                      <div className="size-3 rounded-full bg-white" />
                    )}
                  </div>
                </div>
                <div className='flex flex-col gap-2'>
                  <div>
                     <p className='flex items-center gap-2'>Mix <span className='px-2 py-0.5 rounded-full bg-neutral-700 text-xs text-neutral-300 '>Desktop</span> </p>
                  </div>
                  <div>
                    <p className='text-neutral-500 text-sm tracking-tight '>Use both hover to open and manual toggle to close.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className='w-full h-30 rounded-md bg-neutral-800/50 py-5 px-6 border-2 border-white/5 justify-between flex'>
            <div className=' flex flex-col gap-2'>
                <p className='font-poppins text-xl'>Sidebar Behavior</p>
                <p className='font-poppins text-sm text-neutral-500 w-60 tracking-tight'>Additional sidebar preferences.</p>

            </div>

              <div className='rounded-md border-2 border-white/5 w-216 min-w-0 h-full flex items-center justify-between p-5'>
                    <div className='flex flex-col gap-2  '>
                      <p className='font-poppins'>Close sidebar on outside click</p>
                      <p className='text-sm text-neutral-500 font-poppins tracking-tight'>Click anywhere outside the sidebar to close it.</p>
                    </div>

                    <div onClick={() => setOutsideClick(!outsideClick)}>
                      <div className={`relative duration-200 cursor-pointer rounded-full  w-15 h-8 flex p-1 items-center transition-all  ${outsideClick ? " bg-white " : " bg-neutral-700  "}`}>
                        <div className={` absolute size-6 rounded-full top-1  transition-transform duration-300 ease-in-out ${outsideClick ? "bg-black translate-x-7" : "bg-white  translate-x-0"}`}>

                        </div>
                      </div>
                    </div>
              </div>
            
          </div>


      </div>
      

    </div>
  )
}

export default Settings