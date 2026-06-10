import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router'
import Task from "./task"
import { useNavigate } from 'react-router'

function Home() {

  const navigate = useNavigate()
  const token = localStorage.getItem("token");

  if(!token){
      navigate("/login")
  }

  const [sidebarOpt, setSidebarOpt] = useState(() => {
    return localStorage.getItem("sidebarOpt") || "mix";
  });


  useEffect(() => {
    localStorage.setItem("sidebarOpt", sidebarOpt);
  }, [sidebarOpt]);



  const [outsideClick, setOutsideClick] = useState(() => {
    const saved = localStorage.getItem("outsideClick");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "outsideClick",
      JSON.stringify(outsideClick)
    );
  }, [outsideClick]);



  const [timeDisplay,setTimeDisplay] = useState(() => {
    const saved = localStorage.getItem("timeDisplay");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "timeDisplay",
      JSON.stringify(timeDisplay)
    );
  }, [timeDisplay]);


  const [timeFormat, setTimeFormat] = useState(() => {
    const saved = localStorage.getItem("timeFormat");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "timeFormat",
      JSON.stringify(timeFormat)
    );
  }, [timeFormat]);


  
  const [textColor, setTextColor] = useState(() => {
    return localStorage.getItem("textColor") || "white";
  });


  useEffect(() => {
    localStorage.setItem("textColor", textColor);
  }, [textColor]);




  const [showSeconds , setShowSeconds ] = useState(() => {
    const saved = localStorage.getItem("showSeconds ");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "showSeconds ",
      JSON.stringify(showSeconds )
    );
  }, [showSeconds ]);




  return (

    <div className='flex h-screen w-screen overflow-hidden bg-neutral-900'>
        <Sidebar
          sidebarOpt={sidebarOpt} 

          outsideClick={outsideClick}
        />
        <main className='min-w-0 flex justify-center'>
            <Outlet  context={{ 
              sidebarOpt, setSidebarOpt,
              outsideClick, setOutsideClick, 
              timeDisplay, setTimeDisplay,
              timeFormat, setTimeFormat,
              textColor, setTextColor,
              showSeconds , setShowSeconds
              }}  />
        </main>

    </div> 
  )
}

export default Home
