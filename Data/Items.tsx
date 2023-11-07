import React from 'react';
import { FaPlane } from 'react-icons/fa';
import { GrVisa } from 'react-icons/gr';
import { MdTravelExplore } from 'react-icons/md';
import { PiAirplaneTiltBold } from 'react-icons/pi';

export const jsonData = [
  {
    "type": "One Way Travel",
    "Icon": <PiAirplaneTiltBold style={{ color: '#03A9F4', 
                                          fontSize: '30px' }} />,
  },
  {
    "type": "Rounded Trip",
    "Icon": <MdTravelExplore 
    style={{ color: "#03A9F4",
              fontSize: '30px'
    }}/>,
  },
  {
    "type": "Applying Visa",
    "Icon": <GrVisa style={{
      color: '#03A9F4',
      fontSize: '30px'
    }} />,
  },
];