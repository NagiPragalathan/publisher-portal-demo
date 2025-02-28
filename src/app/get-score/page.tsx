'use client';

import { redirect } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const colors = ['#D30027', '#F87501', '#F8B300', '#89D421', '#44BC38'];

const questionData = [
  {
    key: "campusLifeScore",
    image: 'https://ouch-cdn2.icons8.com/2Q2lX6dXeKehcc62zXUkmHilb6sFftY3MkpINoBxihs/rs:fit:368:294/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzYy/L2FjNzdmZjlmLTJj/MTMtNDNiMy1hMWY4/LTZmMjZkYTdlNWFk/ZS5zdmc.png'
  },
  {
    key: "internationalExposureScore",
    image: 'https://png.pngtree.com/png-clipart/20230811/original/pngtree-expo-center-color-icon-vector-picture-image_7867463.png'
  }
];

const GetScore = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState("Loading...");

  useEffect(() => {
    setCurrentQuestion(questionData[questionIndex].key.replace(/([A-Z])/g, ' $1').trim());
  }, [questionIndex]);

  const handleSelect = (e: React.MouseEvent<HTMLElement>, score: number) => {
    e.preventDefault();

    if (selectedScore !== null) return; // Prevent multiple selections

    const formData = JSON.parse(localStorage.getItem('form_data') || '{}');
    const updatedData = {
      ...formData,
      [questionData[questionIndex].key]: score
    };

    localStorage.setItem('form_data', JSON.stringify(updatedData));
    setSelectedScore(score);

    // Move to the next question after a short delay
    setTimeout(() => {
      if (questionIndex + 1 < questionData.length) {
        setSelectedScore(null);
        setHoverIndex(null);
        setQuestionIndex(prev => prev + 1);
      } else {
        redirect('/multiselect');
      }
    }, 500);
  };

  return (
    <div className="p-6 w-full flex flex-col justify-center items-center">
      <div className="w-full max-w-md flex flex-col items-center p-6 bg-gray-300 bg-opacity-50 backdrop-blur-md rounded-2xl shadow-lg">
        <h1 className="text-white text-2xl font-semibold text-center mb-10">
          {currentQuestion}
        </h1>

        {/* Question Image */}
        <Image 
          src={questionData[questionIndex].image} 
          alt="Question Illustration"
          width={200}
          height={200}
          className="mb-6 object-contain"
        />

        {/* Score Selection */}
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              className="w-10 h-10 rounded text-white font-bold transition-all duration-300"
              style={{
                backgroundColor:
                  selectedScore !== null
                    ? selectedScore === index + 1
                      ? color
                      : '#9ca3af' // Grey out unselected ones after selection
                    : hoverIndex !== null && index <= hoverIndex
                    ? colors[index] // Apply hover animation
                    : '#9ca3af',
              }}
              onClick={(e) => handleSelect(e, index + 1)}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetScore;
