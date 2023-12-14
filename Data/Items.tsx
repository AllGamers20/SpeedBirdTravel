import React from 'react';
import { GrVisa } from 'react-icons/gr';
import { MdTravelExplore } from 'react-icons/md';
import { PiAirplaneTiltBold, PiPackageFill } from 'react-icons/pi';

export const jsonData = [
  {
    "type": "One Way Travel",
    "Icon": <PiAirplaneTiltBold style={{ color: '#03A9F4', 
                                          fontSize: '30px' }} />,
  },
  {
    "type": "Round Trip",
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