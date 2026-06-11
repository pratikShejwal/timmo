import React from 'react'
import Sidebar from './sidebar'
import Clock from './clock'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import Settings from './settings'
import Analytics from './analytics'
import Login from './login'
import Stopwatch from './stopwatch'
import Countdown from './countdown'
import ProtectedRoute from "./protectedRoute"
import NoRoute from './NoRoute'
import Leaderboard from './leaderboard/leaderboard'

function Body() {

    
  return (
    <div className='flex overflow-hidden'>
        <BrowserRouter>
            <Routes >

                <Route path='/login' element={<Login />} />

                    <Route element={
                        <ProtectedRoute>
                            <Home />
                        </ProtectedRoute>
                    }>

                        <Route path='/' element={<Clock />} />
                        <Route path='/stopwatch' element={<Stopwatch />} />
                        <Route path='/countdown' element={<Countdown />} />
                        <Route path='/analytics' element={<Analytics />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/leaderboard' element={<Leaderboard />} />
                        
                    </Route>
                <Route path='*' element={<NoRoute />} />

            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Body