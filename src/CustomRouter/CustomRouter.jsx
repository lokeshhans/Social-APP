import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SocialApp from '../Components/SocialApp'
import UserProfile from '../Components/UserProfile/UserProfile'

export default function CustomRouter() {
  return (
    <Routes>
        <Route path='/' element={<SocialApp />} />
        <Route path='/User/:id' element={<UserProfile />} />
    </Routes>
  )
}

