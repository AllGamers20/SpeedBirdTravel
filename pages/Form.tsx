import React from 'react'
import Image from 'next/image';
import DropDown from '@/Components/DropDown';

const Form = () => {
  return (
    <>
      <div className='h-screen w-full mx-auto bg-parallex bg-cover bg-no-repeat md:bg-cover'>
        <div className=' h-screen flex items-center justify-start flex-col gap-5 p-6 blur-md invert brightness-150 md:filter-none'>
          <Image src={'/img/Logo.png'} alt='Logo' width={100} height={100}/>
          <DropDown/>
        </div>
      </div>
    </>
  );
};


export default Form