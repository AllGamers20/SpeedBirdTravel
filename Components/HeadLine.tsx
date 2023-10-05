import React from 'react'

const HeadLine = ({title}:{title:any}) => {
  return (
    <div className='flex gap-5 items-center justify-center'>
        <div className='bg-main w-[100px] h-[2px]'></div>
        <h1 className='text-grey-600 uppercase text-2xl'>{title}</h1>
        <div className='bg-main w-[100px] h-[2px]'></div>
    </div>
  )
}

export default HeadLine