import Navbar from '@/Components/navbar'
import React from 'react'
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
  return (
    <>
        <Head>
          <title>Speed Bird</title>
          <link rel="shortcut icon" href="Logo.ico" type="image/x-icon" />
        </Head>
        <Navbar/>
        <Hero/>
        <Product/>
        <Services/>
        <AboutUs/>
        <Footer/>
    </>

  )
}

export default index