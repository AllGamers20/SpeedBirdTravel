import React from 'react'
import HeadLine from './HeadLine'
import Card from './Card'

const Product = () => {
  return (
    <section className='max-w-[1640px] mx-auto p-4 px-4 py-16' id='Packages'>
        <HeadLine title={'Packages'}/>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-16'>
            <Card image="/assets/spain.png" title='Spain'/>
            <Card image="/assets/Bali.png" title='Bali'/>
            <Card image="/assets/dubai.png" title='Dubai'/>
            <Card image="/assets/Paris.png" title='Paris'/>
            <Card image="/assets/china.png" title='China'/>
            <Card image="/assets/antalya.png" title='Antalya'/>
            <Card image="/assets/cyprus.png" title='Cyprus'/>
            <Card image="/assets/georgia.png" title='Georgia'/>
            <Card image="/assets/Maldive.png" title='Maldive'/>
        </div>
    </section>
  )
}
export default Product