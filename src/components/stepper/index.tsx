"use client";
import React, { useState } from 'react';
import { Steps } from 'antd';
import StepOne from '@/components/stepper/stepone';
import StepTwo from '@/components/stepper/steptwo';
import StepThree from '@/components/stepper/stepthree';
import StepFour from '@/components/stepper/stepfour';
import StepFive from '@/components/stepper/stepfive';
import { FileAddOutlined, FolderAddOutlined, TrophyOutlined, ScheduleOutlined, DiffOutlined } from '@ant-design/icons';


const { Step } = Steps;

interface StepperProps {
  setProgress: (value: number) => 0;
}

const Index: React.FC<StepperProps> = ({ setProgress }) => {
  const [current, setCurrent] = useState(0);
  const handleSubmit = (e) => {
    setCurrent(current + 1);
    setProgress((current + 2) * 20);
  };
const steps = [
  {
    title: 'Company Details',
    content: <StepOne handleSubmit={handleSubmit} />,
    icon: <FolderAddOutlined className='stepicon' style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Contact Details',
    content: <StepTwo handleSubmit={handleSubmit}/>,
    icon: <DiffOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Documents',
    content: <StepThree handleSubmit={handleSubmit}/>,
    icon: <FileAddOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Awards & Certifications',
    content: <StepFour handleSubmit={handleSubmit}/>,
    icon: <TrophyOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Verification',
    content: <StepFive handleSubmit={handleSubmit}/>,
    icon: <ScheduleOutlined style={{ fontSize: '80%'}}/>
  },
];

  const onChange = (value: number) => {
    if(value < current){
      setCurrent(value);
      if(value===0){
        setProgress(20);
      }else{
        setProgress((value+1) * 20);
      }  
    }
  };
  return (
    <>
      <div className="flex min-h-80 ">
        <div className="w-4/12 flex-col rounded-md bg-white pb-5 pt-7.5 mt-5 mr-5 items-center shadow">
          <Steps direction="vertical" current={current} onChange={onChange} >
            {steps.map((step, index) => {
              const iconClasses = [
                index < current ? 'bg-[#008776] text-white p-2 rounded-full border-4 border-[#c1ddd9]' : '',
                index === current ? 'bg-[#1e3a88] text-white p-2 rounded-full border-4 border-[#aeccd4]' : ''
              ].join(' ');
              const icon = React.cloneElement(step.icon, {
                className: iconClasses,
              });
              
              return (
                <Step
                  style={{ 'padding-left': '40px','padding-bottom':'20px' }}
                  key={index}
                  title={step.title}
                  className='mb-5 border-b-2 border-slate-300 pl-50'
                  icon={icon}
                />
              );
            })}
          </Steps>
        </div>
        <div className="w-8/12 flex-col rounded-md bg-white px-5 pb-5 pt-7.5 mt-5 shadow">
          <div className='min-h-75 lg:overflow-auto'>
            {steps[current].content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
