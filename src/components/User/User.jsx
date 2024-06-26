import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userID}=useParams()
  return (
    <div
    className=' bg-gray-900 text-white text-center justify-center text-5xl p-5 h-screen py-56 font-bold'
    >User:{userID}</div>
  )
}

export default User