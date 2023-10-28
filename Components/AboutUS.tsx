import React from 'react'
import HeadLine from './HeadLine'
import Image from 'next/image'


const AboutUS = () => {
  return (
    <section id='AboutUs'>
        <div className='flex flex-wrap justify-center items-center flex-col gap-6'>
                <HeadLine title={'About Us'}/>
                <div className='flex items-center justify-center flex-col gap-6 '>
                   <p className='w-3/5 text-center text-xl md:text-3xl p-6 font-airspace text-main font-bold'> Speed Bird Travel Agency is your passport to exceptional travel experiences.  Founded by passionate travelers our mission is to make your journeys stress free and unforgettable.</p>
                   <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-16'>
                    <Image src={'/img/Logo.png'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/MEA.jpg'} alt='Logo' width={200} height={200}/>
                    <Image src={'/img/QatarAirways.png'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/TurkishAirline.png'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/Emirates.png'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/ASL.jpg'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/FlyDubai.png'} alt='Logo' width={150} height={150}/>
                    <Image src={'/img/AirArabia.png'} alt='Logo' width={150} height={150}/>
                   </div>
                </div>
            </div>
        
    </section>
  )
}

export default AboutUS