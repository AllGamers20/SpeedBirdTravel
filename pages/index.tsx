import Navbar from '@/Components/navbar'
import React from 'react'
import Hero from '@/Components/Hero'
import Product from '@/Components/Product'
import Head from 'next/head'
const index = () => {
  return (
    <>
        <Head>
          <title>Speed Bird</title>
          <link rel="shortcut icon" href="Logo.ico" type="image/x-icon" />
        </Head>
        <Navbar/>
        <Hero/>
        <Product/>
    </>

  )
}

export default index