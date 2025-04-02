import React from 'react'
import notfound from "../assets/notfound.gif"
const NotFound = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <img src={notfound} alt="404-NOT-FOUND" className='w-40vh' />
    </div>
  )
}

export default NotFound