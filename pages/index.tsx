import Navbar from '@/Components/navbar';
import React, { useEffect, useState } from 'react';
import Hero from '@/Components/Hero';
import Product from '@/Components/Product';
import Head from 'next/head';
import Services from '@/Components/Services';
import AboutUs from '@/Components/AboutUS';
import Footer from '@/Components/Footer';
import SplashScreen from '@/Components/SplashScreen';
import { usePathname } from 'next/navigation';

const index = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setisLoading] = useState(isHome);

  useEffect(() => {
    // Check if the splash screen has been shown before
    const hasSplashScreenShown = localStorage.getItem("hasSplashScreenShown");

    if (!hasSplashScreenShown && isHome) {
      // If the splash screen hasn't been shown before, set isLoading to true.
      // You can add a delay if needed.
      setisLoading(true);

      // Mark the splash screen as shown
      localStorage.setItem("hasSplashScreenShown", "true");
    }
  }, [isHome]);

  return (
    <>
      <Head>
        <title>Speed Bird</title>
        <link rel="shortcut icon" href="/Logo.ico" type="image/x-icon" />
      </Head>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setisLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Product />
          <Services />
          <AboutUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default index;
