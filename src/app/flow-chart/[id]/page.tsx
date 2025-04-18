"use client"

import Profile from '@/components/profile';
import ProgressBar from '@/components/progress_bar';
import React from 'react'
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
      <ProgressBar progress={11} completed_steps={[1, 0, 0, 0, 0]} />
      {render_component}
    </div>
  )
}

export default FlowChart;
