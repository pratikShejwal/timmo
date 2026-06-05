import React from 'react'
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

  return (

    <div className='flex h-screen w-screen overflow-hidden bg-neutral-900'>
        <Sidebar />
        <main className='min-w-0 flex justify-center'>
            <Outlet />
        </main>
        <Task />

    </div> 
  )
}

export default Home
