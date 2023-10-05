import React from 'react'
import HeadLine from './HeadLine'
import Card from './Card'

const Product = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 py-12' id='Services'>
        <HeadLine title={'Services'}/>
        <div className='grid md:grid-cols-2 lg: grid-cols-3 gap-6 px-20 py-12 -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300'>
            <Card image="/spaincard.jpg" title={'spain'} x={200} y={100}/>
        </div>
    </section>
  )
}

export default Product