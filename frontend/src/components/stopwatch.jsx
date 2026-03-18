import React from 'react'
import { useState, useEffect } from 'react'
import { RiResetLeftLine } from "react-icons/ri";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

function Stopwatch() {

    const [time, setTime] = useState(0); // seconds
    const [isRunning, setIsRunning] = useState(false);

    
    useEffect(() => {

        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunning]);



    const start = () => {
        setIsRunning(true);
    };

    const pause = () => {
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setTime(0);
    };


    const hours = String(Math.floor(time / 3600)).padStart(2, "0");

    const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");

    const seconds = String(time % 60).padStart(2, "0");




  return (
    <div className='bg-neutral-900 p-5 w-screen h-screen text-white justify-start pt-35 flex flex-col items-center '>
        
        <p className="text-[200px] font-gothic">
            {hours}:{minutes}:{seconds}
        </p>

        <div className="flex gap-6 mt-10 justify-center">


            {
                isRunning ? (
                     <button onClick={pause} className='rounded-md bg-neutral-800 w-40 h-11 font-poppins active:scale-98 cursor-pointer hover:bg-neutral-700/60 transition-all duration-100 flex items-center justify-center  text-xl border-2 border-neutral-700/60 hover:border-neutral-600/60'>
                        <FaPause className='mr-2 text-[21px]' />
                        Pause
                    </button>
                ) : (
                    <button onClick={start} className='rounded-md bg-neutral-800 w-40 h-11 font-poppins active:scale-98 cursor-pointer hover:bg-neutral-700/60 transition-all duration-100 flex items-center justify-center  text-xl border-2 border-neutral-700/60 hover:border-neutral-600/60'>
                        <FaPlay className='mr-2 text-[16px]' />
                        Start
                    </button>
                )
            }
            

           




            <button onClick={reset} className='rounded-md bg-neutral-800 w-40 h-11 font-poppins active:scale-98 cursor-pointer hover:bg-neutral-700/60 transition-all duration-100 flex items-center justify-center text-xl border-2 border-neutral-700/60 hover:border-neutral-600/60'>
            <RiResetLeftLine className='mr-2 text-[20px]' />
            Reset
            </button>

        </div>


    </div>
  )
}

export default Stopwatch