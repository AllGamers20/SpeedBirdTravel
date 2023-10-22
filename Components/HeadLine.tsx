import React from 'react'

const HeadLine = ({title}:{title:any}) => {
  return (
    <div className='flex gap-5 items-center justify-center'>
        <div className='bg-main w-[100px] h-[2px]'></div>
        <h1 className='text-lime-500 uppercase text-6xl font-dale'>{title}</h1>
        <div className='bg-main w-[100px] h-[2px]'></div>
    </div>
  )
}

export default HeadLine