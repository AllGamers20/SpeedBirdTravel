import React, { useState } from 'react'
import Submit from './Submit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form4 = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [travelCountry, setTravelCountry] = useState("");
  const [passengernumber, setPassengerNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const handlesubmit =() =>{
    if(!fullName||!phoneNumber||!travelCountry||!passengernumber||!startDate){
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
          const message = `Full Name: ${fullName}%0APhone Number: ${phoneNumber}%0ATravel Country: ${travelCountry}%0APassengers(inc.Childrens): ${passengernumber}%0AStart Date: ${startDate}%0AOne Way Travel`
          window.open(`https://wa.me/+96171367510?text=${message}`, '_blank');

          // Reset the form fields
          setFullName("");
          setPhoneNumber("");
          setTravelCountry("");
          setPassengerNumber("");
          setStartDate("");
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
          placeholder="Passengers(inc.Childrens)"
          value={passengernumber}
          onChange={(e) => setPassengerNumber(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
        <input
          type="text"
          id=""
          placeholder="Start Date"
          onFocus={(e) => (e.target.type = 'date')}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
        <ToastContainer />
        <Submit onClick={handlesubmit}/>
      </div>
    </div>
    </>
  )
}

export default Form4