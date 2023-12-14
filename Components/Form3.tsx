import React, { useState } from 'react'
import Submit from './Submit'
import { ToastContainer, toast } from 'react-toastify';

const Form3 = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [travelCountry, setTravelCountry] = useState("");
  const [BankAccount, setBankAccount] = useState("");
  const [startVisaDate, setStartVisaDate] = useState("");
  const handlesubmit =() =>{
    if(!fullName||!phoneNumber||!travelCountry||!BankAccount||!startVisaDate){
      toast.error('All Fields Required', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
          const message = `Full Name: ${fullName}%0APhone Number: ${phoneNumber}%0ATravel Country: ${travelCountry}%0ABank Account from 3years(answer yes if you have): ${BankAccount}%0AStart Date: ${startVisaDate}%0AApply Visa (this is small form when the message seen by office it will continue with you dear client)`
          window.open(`https://wa.me/+96171367510?text=${message}`, '_blank');

          // Reset the form fields
          setFullName("");
          setPhoneNumber("");
          setTravelCountry("");
          setBankAccount("");
          setStartVisaDate("");
    }
  };
  return (
    <>
    <div className='flex flex-col items-center w-full rounded gap-6 overflow-auto'>
      <div className='flex flex-col items-center justify-center gap-6'>
        <input 
          type="text" 
          id="" 
          placeholder='Full Name' 
          className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}/>
        <input 
          type="tel" 
          id="" 
          placeholder='Telephone Number' 
          className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}/>
        <input 
          type="text" 
          id="" 
          placeholder='Travel Country' 
          className='bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main  w-[340px] placeholder:text-gray-500 font-bold'
          value={travelCountry}
          onChange={(e) => setTravelCountry(e.target.value)}/>
        <input
          type="text"
          id=""
          placeholder="BankAccountfrom3years(yes if you have)"
          value={BankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
        <input
          type="text"
          id=""
          placeholder="Date of Visa you need"
          onFocus={(e) => (e.target.type = 'date')}
          value={startVisaDate}
          onChange={(e) => setStartVisaDate(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
        <ToastContainer />
        <Submit onClick={handlesubmit}/>
      </div>
    </div>
    </>
  )
}

export default Form3