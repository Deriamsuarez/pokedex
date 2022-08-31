import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'

const ProtetectedRoutes = () => {

   const nameTrainer = useSelector(name => name.trainerName)

   if (nameTrainer) {
      return (
         <div className='app'>
            <Header />
            <Outlet />
         </div>
      )
   } else {
      return <Navigate to='/welcome' />
   }
}

export default ProtetectedRoutes