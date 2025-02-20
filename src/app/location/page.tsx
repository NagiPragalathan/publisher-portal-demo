'use client';

import React, { useState, useEffect } from 'react';
import Profile from '@/components/profile';
import ProgressBar from '@/components/progress_bar';
import { FaAngleRight } from "react-icons/fa";

const InputForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Fetching the states and cities
  useEffect(() => {
    // API call to fetch the states and cities from the internal API route
    fetch('https://edulot-api.netlify.app/location')
      .then((response) => response.json())
      .then((data) => {
        setStates(Object.keys(data)); // Store states
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }, []);


  useEffect(() => {
    let stored_data = JSON.parse(localStorage.getItem('form_data') || '{}');
    localStorage.setItem('form_data', JSON.stringify({
      ...stored_data,
      "state": selectedState,
      "city": selectedCity,
      "rankingType": "EngineeringRanking",
    }));
    console.log(localStorage.getItem('form_data'));
  }, [selectedCity, selectedState]);

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const state = event.target.value;
    setSelectedState(state);
    setSelectedCity(''); // Reset city when state changes

    if (state) {
      // Fetch cities for selected state
      fetch('https://edulot-api.netlify.app/location') // Reuse the internal API route to fetch the updated data
        .then((response) => response.json())
        .then((data) => {
          setCities(data[state] || []); // Set cities based on selected state
        })
        .catch((error) => console.error("Error fetching cities:", error));
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <>
      <Profile />
      <ProgressBar progress={18} completed_steps={[1, 0, 0, 0, 0]} />
      <div className="p-6 w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6">
          <h1 className="text-[#FFFFFF] text-[24px] font-[600] text-center mb-16">
            Preferred Study Locations
          </h1>
          <form className="w-full flex flex-col justify-between items-center">
            {/* State Dropdown */}
            <select
              className="w-full h-[57px] rounded-lg p-4 shadow-md mb-4 text-gray-500"
              value={selectedState}
              onChange={handleStateChange}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>

            {/* City Dropdown */}
            <select
              className="w-full h-[57px] rounded-lg p-4 shadow-md mb-4 text-gray-500"
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedState} // Disable city dropdown if no state is selected
            >
              <option value="">Select City</option>
              {cities.length > 0 ? (
                cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))
              ) : (
                <option value="">No cities available</option>
              )}
            </select>

            <div className="w-full flex flex-row justify-end items-center mt-16">
              <a href="/financial">
                <div className="flex flex-row justify-center items-center gap-2 w-[100px] h-[40px] bg-[#FFBD58] rounded-full p-2 shadow-md mb-4 text-gray-700 hover:bg-[#e6a84a] transition duration-300">
                  <span className="text-[16px] font-[600] text-black">Next</span>
                  <span className="w-[23px] h-[23px] text-[16px] font-[600] text-black bg-white rounded-full flex justify-center items-center font-bold">
                    <FaAngleRight />
                  </span>
                </div>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputForm;
