'use client'
import { type ChangeEvent, useState } from 'react'

const PriceFilterDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Lowest to Highest Price')

  const options = ['Lowest to Highest Price', 'Highest to Lowest Price']

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value
    setSelectedOption(selectedValue)
  }

  return (
    <div className="z-10 gap-3 text-lg font-medium">
      <label className="text-white">Sort by Price:</label>
      <select
        className="ml-2 cursor-pointer rounded-md border-r-8 border-white bg-white px-2 py-3 font-medium"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        {options.map((option) => (
          <option className="font-medium" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PriceFilterDropdown
