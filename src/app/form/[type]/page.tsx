import React from 'react';
import Profile from "@/components/profile";
import ProgressBar from "@/components/progress_bar";
import { current_grade, stream, entrance_exam, specialization } from "@/components/constants/form_data";

const Step1Form = ({params}: {params: any}) => {

  let form_list_data: any, redirect_link: string, progress: number, completed_steps: number[];

  if (params.type === "current-grade") {
    form_list_data = current_grade;
    redirect_link = "/form/stream";
    progress = 3;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "stream") {
    form_list_data = stream;
    redirect_link = "/cgpa";
    progress = 7;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "entrance-exam") {
    form_list_data = entrance_exam;
    redirect_link = "/exam-score";
    progress = 15;
    completed_steps = [1, 0, 0, 0, 0];
  } else if (params.type === "specialization") {
    form_list_data = specialization;
    redirect_link = "/range/salary_range";
    progress = 28;
    completed_steps = [1, 1, 0, 0, 0];
  }

  return (
    <>
      <Profile />
      <ProgressBar progress={progress} completed_steps={completed_steps} />
      <div className="p-6 w-full flex flex-col justify-center items-center">
        {form_list_data.map((form: any, index: any) => (
          <div key={index} className="w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6">
            <h1 className="text-[#FFFFFF] text-[24px] font-[600] text-center mb-6">
              {form.title}
            </h1>

            <div className="w-full flex flex-col justify-center items-center">
              {form.options.map((option: any, i: any) => (
                <a href={redirect_link}
                  key={i}
                  className="w-full h-[57px] flex flex-row justify-start items-center gap-4 bg-white rounded-full p-4 shadow-md mb-4"
                >
                  <div className="w-[44px] h-[44px] bg-[#C388F0] rounded-full flex justify-center items-center p-2">
                    {option.icon}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">{option.name}</div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Step1Form;
