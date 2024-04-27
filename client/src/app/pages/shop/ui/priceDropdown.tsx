'use client'
import { type ChangeEvent, useState } from 'react';

const PriceFilterDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Lowest to Highest Price');

  const options = ['Lowest to Highest Price', 'Highest to Lowest Price'];

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="gap-3 text-lg font-medium z-10">
      <label className='text-white'>Sort by Price:</label>
      <select className='bg-white ml-2 rounded-md py-3 px-2 border-r-8 border-white cursor-pointer font-medium' value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option className='font-medium' key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilterDropdown;
