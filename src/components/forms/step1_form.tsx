import React from 'react';
import { FaGraduationCap, FaAppleAlt, FaBeer } from 'react-icons/fa'; // Import multiple icons for dynamic rendering

const Step1Form = () => {
  // Dynamically handling multiple items
  const form_list_data = [
    {
      title: 'Current Grade',
      options: [
        {
          icon: <FaGraduationCap className="text-[50px] text-[#FFFFFF]" />,
          name: 'Graduate',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Apple',
        },
      ],
    },
  ];

  return (
    <div className="p-6 w-full flex flex-col justify-center items-center">
      {form_list_data.map((form, index) => (
        <div key={index} className="w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6">
          <h1 className="text-[#FFFFFF] text-[24px] font-[600] text-center mb-6">
            {form.title}
          </h1>

          <div className="w-full flex flex-col justify-center items-center">
            {form.options.map((option, i) => (
              <div
                key={i}
                className="w-full h-[57px] flex flex-row justify-start items-center gap-4 bg-white rounded-full p-4 shadow-md mb-4"
              >
                <div className="w-[44px] h-[44px] bg-[#C388F0] rounded-full flex justify-center items-center p-2">
                  {option.icon}
                </div>
                <div className="text-lg font-semibold text-gray-800">{option.name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step1Form;
