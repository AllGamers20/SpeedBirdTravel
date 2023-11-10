
import React, { useState } from 'react';
import Submit from './Submit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WhatsAppWidget from "react-whatsapp-widget";
import 'react-whatsapp-widget/dist/index.css';



const Form2 = () => {
  // State variables for form fields and error message
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [travelCountry, setTravelCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  // Form submission handler
  const handleSubmit = () => {
    // Check if any of the fields are empty
    if (!fullName || !phoneNumber || !travelCountry || !startDate || !endDate) {
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
      // Prepare the message
      const message = `Full Name: ${fullName}%0APhone Number: ${phoneNumber}%0ATravel Country: ${travelCountry}%0AStart Date: ${startDate}%0AEnd Date: ${endDate}`;

      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/+96171367510?text=${message}`, '_blank');

      // Reset the form fields
      setFullName("");
      setPhoneNumber("");
      setTravelCountry("");
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center w-full h-screen rounded gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <input
            type="text"
            id=""
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
          <input
            type="tel"
            id=""
            placeholder="Telephone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
          <input
            type="text"
            id=""
            placeholder="Travel Country"
            value={travelCountry}
            onChange={(e) => setTravelCountry(e.target.value)}
            className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
          <input
            type="date"
            id=""
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
          <input
            type="date"
            id=""
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="bg-gray-200 p-3 rounded-lg flex items-center justify-between border-4 border-transparent focus:border-main w-[340px] placeholder:text-gray-500 font-bold"
          />
          {/* Display the error message */}
          <ToastContainer />
          <Submit onClick={handleSubmit} />
          {/* WhatsApp Widget */}
          <WhatsAppWidget phoneNumber="+96171367510" message="Hello! I'm interested in your services." />
        </div>
      </div>
    </>
  );
};

export default Form2;
