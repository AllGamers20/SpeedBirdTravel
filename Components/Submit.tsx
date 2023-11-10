import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Submit = () => {
  return (
    <>
    <div className='flex items-center justify-center gap-5 border-4 border-transparent p-3 w-full rounded-lg bg-gray-200  hover:bg-main  hover:text-green-400'>
        <FaWhatsapp size={25} style={{
            color: 'rgb(37 211 102)'
        }}/>
        <button className='text-black font-bold text-lg tracking-wider hover:text-white border-0'>Continue</button>
    </div>
    </>
  )
}

export default Submit