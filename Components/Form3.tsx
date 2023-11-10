import React from 'react'
import Submit from './Submit'

const Form3 = () => {
  return (
    <>
    <div className='flex flex-col items-center w-full h-screen rounded gap-6'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <input type="text" id="" placeholder='Full Name' className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'/>
        <input type="tel" id="" placeholder='Telephone Number' className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'/>
        <input type="text" id="" placeholder='Travel Country' className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'/>
        <input type="date" id="" placeholder='Visa Start Date' className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'/>
        <Submit/>
      </div>
    </div>
    </>
  )
}

export default Form3