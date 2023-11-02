"use client"
import Navbar from '@/Components/navbar'
import React, { useEffect, useState } from 'react'
import Hero from '@/Components/Hero'
import Product from '@/Components/Product'
import Head from 'next/head'
import Services from '@/Components/Services'
import AboutUs from '@/Components/AboutUS'
import Footer from '@/Components/Footer'
import SplashScreen from '@/Components/SplashScreen'
import {usePathname} from 'next/navigation'
const index = () => {
  const pathname = usePathname();
  const isHome = pathname ==="/"
  const [isLoading, setisLoading] = useState(isHome);
  useEffect(() => {
    if(isLoading) return

    
  },[isLoading])
  
  return (
    <>
        <Head>
          <title>Speed Bird</title>
          <link rel="shortcut icon" href="Logo.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
          {isLoading && isHome ? (
            <SplashScreen finishLoading={()=> setisLoading(false)}/>
          ):(
            <>
            <Navbar/>
            <Hero/>
            <Product/>
            <Services/>
            <AboutUs/>
            <Footer/>
            </>
          )
          
        }

    </>

  )
}

export default index