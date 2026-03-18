import React, { useState, useEffect } from "react";
import { RiResetLeftLine } from "react-icons/ri";
import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";

function Countdown() {

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);


  // sync input with timer before starting
    useEffect(() => {
        if (!isRunning && !hasStarted) {
            const total = hours * 3600 + minutes * 60 + seconds;
            setTime(total);
        }
    }, [hours, minutes, seconds, isRunning, hasStarted]);


  useEffect(() => {

    let interval;

    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => Math.max(prev - 1, 0));
      }, 1000);
    }

    if (time === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);

  }, [isRunning, time]);


    const start = () => {
        setHasStarted(true);
        setIsRunning(true);
    };

  const pause = () => setIsRunning(false);

    const reset = () => {
        setIsRunning(false);
        setHasStarted(false);
        const total = hours * 3600 + minutes * 60 + seconds;
        setTime(total);
    };


  // convert seconds → display
  const displayHours = String(Math.floor(time / 3600)).padStart(2, "0");
  const displayMinutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const displaySeconds = String(time % 60).padStart(2, "0");



  return (
    <div className="bg-neutral-900 p-5 w-screen h-screen text-white justify-start pt-35 flex flex-col items-center">

      {/* Timer Display */}
      <p className="text-[200px] font-gothic">
        {displayHours}:{displayMinutes}:{displaySeconds}
      </p>


      {/* Time Inputs */}
      <div className="flex gap-4 mt-6">

        <input
          type="number"
          min="0"
          disabled={isRunning}
          placeholder="hh"
          value={hours}
          onChange={(e) =>
            setHours(Math.min(12, Math.max(0, Number(e.target.value))))
          }
          className="w-16 text-white px-2 bg-neutral-800 rounded"
        />

        <input
          type="number"
          min="0"
          disabled={isRunning}
          max="59"
          placeholder="mm"
          value={minutes}
          onChange={(e) =>
            setMinutes(
              Math.min(59, Math.max(0, Number(e.target.value)))
            )
          }
          className="w-16 text-white px-2 bg-neutral-800 rounded"
        />

        <input
          type="number"
          min="0"
          disabled={isRunning}
          max="59"
          placeholder="ss"
          value={seconds}
          onChange={(e) =>
            setSeconds(
              Math.min(59, Math.max(0, Number(e.target.value)))
            )
          }
          className="w-16 text-white px-2 bg-neutral-800 rounded"
        />

      </div>


      {/* Buttons */}
      <div className="flex gap-6 mt-8">

            
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
  );
}

export default Countdown;