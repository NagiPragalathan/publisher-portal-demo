"use client"

import Profile from '@/components/profile';
import ProgressBar from '@/components/progress_bar';
import React, { useMemo } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Chart_one from '@/components/charts/Chart_one';
import { useParams } from 'next/navigation';
import Chart_two from '@/components/charts/Chart_two';
import Chart_three from '@/components/charts/Chart_three';
import Chart_four from '@/components/charts/Chart_four';
import Chart_five from '@/components/charts/Chart_five';

const FlowChart = () => {
  const params = useParams();

  // Progress data mapping based on ID
  const progressData = useMemo(() => {
    const progressMap = {
      '1': { progress: 0, completed_steps: [1, 0, 0, 0, 0] },
      '2': { progress: 20, completed_steps: [1, 1, 0, 0, 0] },
      '3': { progress: 40, completed_steps: [1, 1, 1, 0, 0] },
      '4': { progress: 80, completed_steps: [1, 1, 1, 1, 0] },
      '5': { progress: 88, completed_steps: [1, 1, 1, 1, 1] }
    };

    return progressMap[params.id as keyof typeof progressMap] || progressMap['1'];
  }, [params.id]);

  // Component mapping
  let render_component: React.ReactNode;
  if(params.id === '1'){
    render_component = <Chart_one />
  }else if(params.id === '2'){
    render_component = <Chart_two />
  }else if(params.id === '3'){
    render_component = <Chart_three />
  }else if(params.id === '4'){
    render_component = <Chart_four />
  }else if(params.id === '5'){
    render_component = <Chart_five />
  }

  return (
    <div className="min-h-screen bg-transparent">
      <Profile />
      <ProgressBar 
        progress={progressData.progress} 
        completed_steps={progressData.completed_steps} 
      />
      {render_component}
    </div>
  )
}

export default FlowChart;
