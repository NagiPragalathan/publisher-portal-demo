import Image from 'next/image';
import { useState, useEffect } from 'react';
import { HtmlHTMLAttributes } from 'react';

const GetScore = () => {

    const colors = ['#D30027' ,'#F87501', '#F8B300', '#89D421', '#44BC38']
    const [question, setQuestion] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState("Loading...");  
    const [currentQuestionID, setCurrentQuestionID] = useState(0);

    let questionScore: string[] = [
        "campusLifeScore",
        "internationalExposureScore",
        "placementRecordScore",
        "academicScore",
        "infrastructureScore",
        "researchOpportunitiesScore",
        "industryConnectionScore",
        "costEffectivenessScore",
        "influenceFactor"
    ]

    let make_question_title = (text: string)=>{
        return text.replace(/([A-Z])/g, ' $1').trim();
    }

    useEffect(() => {
        setCurrentQuestion(make_question_title(questionScore[question]));
        setCurrentQuestionID(0);
    }, []);

    const handleColorClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault();
        let get_local_storage = JSON.parse(localStorage.getItem('form_data') || '{}');
        let store_data = {
            ...get_local_storage,
            [questionScore[question]]: index
        }
        localStorage.setItem('form_data', JSON.stringify(store_data));
        if(question < questionScore.length){
            setCurrentQuestionID((prev)=>{return prev + 1});
            setQuestion((prev)=>{return prev + 1});
            setCurrentQuestion(make_question_title(questionScore[question]));
        }
    }
    const handleHover = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        e.preventDefault();
        for (let i = 0; i < index; i++) {
            const element = document.getElementById(i.toString()) as HTMLButtonElement;
            element.style.backgroundColor = colors[i];
        }
        for (let i = index; i < colors.length; i++) {
            const element = document.getElementById(i.toString()) as HTMLButtonElement;
            element.style.backgroundColor = '#9ca3af';
        }
        const element = document.getElementById(index.toString()) as HTMLButtonElement;
        element.style.backgroundColor = colors[index];
    }
    return (
        <div className="p-6 w-full flex flex-col justify-center items-center">
        <div className="w-full max-w-[400px] flex flex-col justify-center items-center p-6 bg-[#9f9f9f87] backdrop-blur-md rounded-[20px] shadow-lg mb-6">
            <h1 className="text-[#FFFFFF] text-[24px] font-[600] text-center mb-16">
                {currentQuestion}
            </h1>
            <form className="w-full flex flex-col justify-between items-center">
                <Image 
                    src="https://ouch-cdn2.icons8.com/2Q2lX6dXeKehcc62zXUkmHilb6sFftY3MkpINoBxihs/rs:fit:368:294/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzYy/L2FjNzdmZjlmLTJj/MTMtNDNiMy1hMWY4/LTZmMjZkYTdlNWFk/ZS5zdmc.png"
                    alt="Campus Life Illustration"
                    width={368} 
                    height={294}
                />
                <div className="flex flex-row gap-2">
                    {
                        Array.from(colors, (_, index) => (
                            <button key={index} id={index.toString()} className="w-10 h-10 bg-gray-400 rounded text-white font-bold" onClick={(e) => handleColorClick(e, index+1)} onMouseEnter={(e) => handleHover(e, index)}>{index+1}</button>
                        ))
                    }
                </div>
            </form>
        </div>
        </div>
    );
};

export default GetScore;
