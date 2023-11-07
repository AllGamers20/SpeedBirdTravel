import React from 'react'
import Image from 'next/image';
import DropDown from '@/Components/DropDown';

const Form = () => {
  return (
    <>
      <div className='mx-auto bg-gradient-to-r from-main to-lime-500'>
        <div className=' h-screen flex items-center justify-start flex-col gap-5 p-6'>
          <Image src={'/img/Logo.png'} alt='Logo' width={200} height={200}/>
          <DropDown/>
        </div>
      </div>
    </>
  );
};


export default Form