import { FaTicketAlt, FaHotel} from 'react-icons/fa';
import { PiAirplaneTiltBold } from 'react-icons/pi';
import {MdHealthAndSafety} from 'react-icons/md'
import {GrVisa} from 'react-icons/gr'

export const data = {
  items: {
    firstService: {
      title: "Exploring the World",
      description: "Your Guide to the Best Travel Experiences",
      icon: <PiAirplaneTiltBold style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    secondService: {
      title: "Ultimate Comfort and Luxury",
      description: "Discovering the Best Hotels Worldwide",
      icon: <FaHotel style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    thirdService: {
      title: "Seamless Adventures",
      description: "Finding the Best Tickets for Your Next Journey",
      icon: <FaTicketAlt style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    fourthService: {
      title: "Visa Solutions",
      description: "Navigating the Best Visa Options for Your Travel Plans",
      icon: <GrVisa style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    fifthService: {
      title:"Peace of Mind on Your Travels",
      description: "Finding the Best Insurance Coverage",
      icon: <MdHealthAndSafety style={{ fontSize: '40px'}}/>
    },
  }
}
