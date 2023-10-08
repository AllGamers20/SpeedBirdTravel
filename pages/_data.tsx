import { FaTicketAlt, FaHotel, FaCcVisa } from 'react-icons/fa';
import { PiAirplaneTilt, PiAirplaneTiltBold } from 'react-icons/pi';

export const data = {
  items: {
    firstService: {
      title: "Best Travel",
      description: "We make with the Package the best airplane and best airline for your safety",
      icon: <PiAirplaneTiltBold style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    secondService: {
      title: "Best Hotels",
      description: "Taking the best hotel with the best customer services and highly hotel rating",
      icon: <FaHotel style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    thirdService: {
      title: "Best Tickets",
      description: "This also contains the best prices for the ticket",
      icon: <FaTicketAlt style={{ fontSize: '40px' }} /> // Set the desired font size
    },
    fourthService: {
      title: "Best Visa",
      description: "With the best visa, you can take it with different types",
      icon: <FaCcVisa style={{ fontSize: '40px' }} /> // Set the desired font size
    },
  }
}
