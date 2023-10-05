import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Card = ({image,title,x,y}:{image:any,title:any,x:any,y:any}) => {
  return (
    <div className='rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300'>
        <Image src={image} alt="/" className='md:max-h-[200px] max-h-[160px] w-full object-cover rounded-xl' width={x} height={y}/>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center gap-5'>
            <h3>{title}</h3>
            <Button text={"Explore"} link={'#'}/>
        </div>
    </div>
  )
}

export default Card