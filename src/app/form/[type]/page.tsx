'use client';

import React from 'react';
import Profile from "@/components/profile";
import ProgressBar from "@/components/progress_bar";
import { current_grade, stream, entrance_exam, specialization, graduate } from "@/components/constants/form_data";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IoArrowForward } from "react-icons/io5";

const Step1Form = () => {
  const params = useParams();

  let form_list_data: any, progress: number = 0, completed_steps: number[] = [];

  if (params.type === "current-grade") {
    form_list_data = current_grade;
    progress = 3;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "stream") {
    form_list_data = stream;
    progress = 7;
    completed_steps = [1, 0, 0, 0, 0];
  }else if (params.type === "stream10") {
    form_list_data = stream;
    progress = 7;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "entrance-exam") {
    form_list_data = entrance_exam;
    progress = 15;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "specialization") {
    form_list_data = specialization;
    progress = 28;
    completed_steps = [1, 1, 0, 0, 0];
  } else if (params.type === "graduate") {
    form_list_data = graduate;
    progress = 3;
    completed_steps = [1, 0, 0, 0, 0];
  }

  return (
    <>
      <Profile />
      <ProgressBar progress={progress || 0} completed_steps={completed_steps || []} />
      <div className="p-6 w-full flex flex-col justify-center items-center">
        {form_list_data.map((form: any, index: any) => (
          <div key={index} className="w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6">
            <h1 className="text-[#FFFFFF] text-[24px] font-[600] text-center mb-6">
              {form.title}
            </h1>

            <div className="w-full flex flex-col justify-center items-center">
              {form.options.map((option: any, i: any) => (
                <Link 
                  href={params.type === "stream10" ? "/field-interest" : option.next_link}
                  key={i}
                  className="w-full h-[57px] flex flex-row justify-between items-center gap-4 bg-white rounded-full p-4 shadow-md mb-4 
                    group hover:pr-2 transition-all duration-300 hover:bg-gray-50"
                >
                  <div className="flex flex-row items-center gap-4">
                    <div className="w-[44px] h-[44px] bg-[#C388F0] rounded-full flex justify-center items-center p-2">
                      {option.icon}
                    </div>
                    <div className="text-lg font-semibold text-gray-800">{option.name}</div>
                  </div>
                  
                  <div className="opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <IoArrowForward className="text-black text-xl" />
                  </div>
                </Link>
              ))}
            </div>
            {
              params.type === "entrance-exam" && (
                <p className="text-[#FFFFFF] text-[12px] font-[400] text-center mt-4">Haven't Taken Entrance Exams Yet? <Link href="/field-interest" className="text-[#FFBD58] text-[12px] font-[400] text-center mt-4">Skip This for Now!</Link></p>
              )
            }
          </div>
        ))}
      </div>
    </>
  );
};

export default Step1Form;
