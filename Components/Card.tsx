import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Card = ({image,title}:{image:any,title:any}) => {
  return (
    <div className='rounded-xl relative overflow-hidden group hover:scale-105 hover:shadow-md duration-300'>
        <Image src={image} alt="/" className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'width={200} height={100} />
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white z-10 flex flex-col items-center gap-5  -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <h3>{title}</h3>
            <Button text={"Explore"} link={'#'}/>
        </div>
    </div>
  )
}

export default Card