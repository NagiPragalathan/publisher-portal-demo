import { FaGraduationCap, FaAppleAlt } from 'react-icons/fa'; // Import multiple icons for dynamic rendering

const current_grade = [
  {
    title: 'Current Grade',
    options: [
      {
        icon: <FaGraduationCap className="text-[50px] text-[#FFFFFF]" />,
        name: 'Graduate',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: '12th Grade ',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: '11th Grade',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: '10th Grade Below ',
      },
    ],
  },
];

const entrance_exam = [
    {
      title: 'Entrance Exams',
      options: [
        {
          icon: <FaGraduationCap className="text-[50px] text-[#FFFFFF]" />,
          name: 'Engineering ',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Medical',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Law',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Design and Architecture',
        },
      ],
    },
];


const stream = [
  {
    title: 'Stream',
    options: [
      {
        icon: <FaGraduationCap className="text-[50px] text-[#FFFFFF]" />,
        name: 'Science',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: 'Commerce',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: 'Arts & Humanities',
      },
      {
        icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
        name: 'Vocational',
      },
    ],
  },
];

const specialization = [
    {
      title: 'Choose Your Specialization Preference',
      options: [
        {
          icon: <FaGraduationCap className="text-[50px] text-[#FFFFFF]" />,
          name: 'Civil',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Mechanical',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Electrical',
        },
        {
          icon: <FaAppleAlt className="text-[50px] text-[#FFFFFF]" />,
          name: 'Computer Science',
        },
      ],
    },
  ];

const field_of_interest = [
    {
        name: 'Engineering',
        icon: 'https://www.pngmart.com/files/7/SEO-Transparent-Background.png',
        courses: 28
    },
    {
        name: 'Science',
        icon: 'https://www.pngmart.com/files/7/SEO-Transparent-Background.png',
        courses: 28
    },   
]

const ranges = {
    salary_range: {
      title: "What is Your Target Salary Range?",
      image_url: "https://static.vecteezy.com/system/resources/previews/000/486/174/original/isometric-artificial-intelligence-vector-illustration.jpg",
      next_link:  '/range/budget_range'
    },
    budget_range: {
      title: "What is Your Budget Range for the Total Course?",
      image_url: "https://skyaitechnologies.com/wp-content/uploads/2022/10/kindpng_7129972-1024x703.png",
      next_link:  '/location'
    }
} 



// Export named variables
export { current_grade, stream, entrance_exam, specialization, field_of_interest, ranges };
