
import { FaTicketAlt, FaHotel } from 'react-icons/fa';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import { MdHealthAndSafety } from 'react-icons/md';
import { GrVisa } from 'react-icons/gr';
import React from 'react';


  export const data = {
    items: {
      firstService: {
        title: "Exploring the World",
        description: "Your Guide to the Best Travel Experiences",
        icon: (
          <PiAirplaneTiltBold
            style={{
              fontSize: '40px',

            }}
          />
        ),
      },
      secondService: {
        title: "Ultimate Comfort and Luxury",
        description: "Discovering the Best Hotels Worldwide",
        icon: (
          <FaHotel
            style={{
              fontSize: '40px',

            }}
          />
        ),
      },
      thirdService: {
        title: "Seamless Adventures",
        description: "Finding the Best Tickets for Your Next Journey",
        icon: (
          <FaTicketAlt
            style={{
              fontSize: '40px',

            }}
          />
        ),
      },
      fourthService: {
        title: "Visa Solutions",
        description: "Navigating the Best Visa Options for Your Travel Plans",
        icon: (
          <GrVisa
            style={{
              fontSize: '40px',

            }}
          />
        ),
      },
      fifthService: {
        title: "Peace of Mind on Your Travels",
        description: "Finding the Best Insurance Coverage",
        icon: (
          <MdHealthAndSafety
            style={{
              fontSize: '40px',

            }}
          />
        ),
      },
    },
  };


