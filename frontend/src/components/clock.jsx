import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { useOutletContext } from "react-router";



function Clock() {


    const [time, setTime] = useState("");
    const [ampm, setAmpm] = useState("");

    const { timeFormat } = useOutletContext();
    const { timeDisplay,setTimeDisplay } = useOutletContext();


    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        const formatted = now.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: timeFormat
        });

        if (timeFormat) {
            const [hm, ap] = formatted.split(" ");
            setTime(hm);
            setAmpm(ap);
        } else {
            setTime(formatted);
            setAmpm("");
        }
    };

    updateTime(); // run once immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timeFormat]);

    const [hours, minutes] = time.split(":");



  



  return (
    <div className='flex flex-col h-screen w-screen  justify-center px-2 bg-neutral-900 '>


        


        <div className='flex items-baseline-last justify-center  mb-10'>
            <div className={` break-all  p-10 flex  w-auto tabular-nums ${timeDisplay ? "flex-row" : "flex-col items-center "}`} > 
                
                <p className='text-white font-gothic leading-none  text-[57px] sm:text-[90px] md:text-[120px] lg:text-[200px] xl:text-[290px] '>{hours}:</p>
                <p className='text-white font-gothic leading-none  text-[57px] sm:text-[90px] md:text-[120px] lg:text-[200px] xl:text-[290px]'>{minutes}</p>

            </div>

            {timeFormat && (
                <div className=' break-all   ' > 
                    <p className={`text-neutral-400 font-gothic leading-none text-lg  sm:text-3xl  ${timeDisplay ? "-ml-7 sm:-ml-0 md:-ml-3 lg:-ml-0" : "-ml-10 sm:-ml-30 md:-ml-15  "}`}>{ampm}</p>
                </div>
            )}
        </div>

        

    </div>
  )
}

export default Clock