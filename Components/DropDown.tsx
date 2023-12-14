import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { jsonData as Items } from "@/Data/Items";
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import Button from './Button';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<any | null>(null);

  const toggleDropDown = (items: any) => {
    setIsSelected(items);
    setIsOpen(false);
  };

  const renderSelectedComponent = () => {
    if (isSelected) {
      // Determine which component to render based on the selected item.
      if (isSelected.type === 'One Way Travel') {
        return <Form4 />;
      } else if (isSelected.type === 'Round Trip') {
        return <Form2 />;
      } else if(isSelected.type ==='Applying Visa') {
        return <Form3/>
      }
    }
    return null; // Render nothing if no selection is made.
  };

  return (
    <div className="relative flex flex-col items-center w-[340px] h-screen rounded gap-6">
      <button
        className="bg-gray-200 text-gray-500 w-full p-3 flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-main duration-300 active:text-main"
        onClick={() => setIsOpen((prev) => !prev)}
        disabled={isSelected !== null} // Disable the button when an item is selected
      >
        {isSelected ? isSelected.type : "Choose Your Travel Type"}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-200 absolute top-20 flex flex-col items-start rounded-lg p-4 w-full z-10">
          {Items.map((item, i) => (
            <div
              className="flex w-full justify-between p-4 hover:bg-main cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={i}
              onClick={() => toggleDropDown(item)}
            >
              <h3>{item.type}</h3>
              <h3>{item.Icon}</h3>
            </div>
          ))}
        </div>
      )}
      <div className='flex items-center justify-between w-full'>
        {renderSelectedComponent()} {/* Render the selected component */}
      </div>
    </div>
  );
};

export default DropDown;
