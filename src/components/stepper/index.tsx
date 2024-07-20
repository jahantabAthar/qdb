"use client";
import React, { useState } from 'react';
import { Steps } from 'antd';
import '../../css/custom.css';
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

const steps = [
  {
    title: 'Company Details',
    content: <StepOne />,
    icon: <FolderAddOutlined className='stepicon' style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Contact Details',
    content: <StepTwo />,
    icon: <DiffOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Documents',
    content: <StepThree />,
    icon: <FileAddOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Awards & Certifications',
    content: <StepFour />,
    icon: <TrophyOutlined style={{ fontSize: '80%'}}/>
  },
  {
    title: 'Verification',
    content: <StepFive />,
    icon: <ScheduleOutlined style={{ fontSize: '80%'}}/>
  },
];

const Index: React.FC<StepperProps> = ({ setProgress }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
    setProgress((current + 2) * 20);
  };
  const onChange = (value: number, curr: number) => {
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
      <div className="flex min-h-80">
        <div className="w-4/12 flex-col rounded-md bg-white pb-5 pt-7.5 mt-5 mr-5 shadow-2 items-center">
          <Steps direction="vertical" current={current} onChange={onChange}>
            {steps.map((step, index) => {
              const icon = React.cloneElement(step.icon, {
                className: index < current ? 'stepicongreen' : index === current ? 'stepiconblue' : '',
              });
              return (
                <Step
                  key={index}
                  title={step.title}
                  className='mb-5 border-b-2 border-slate-300 pl-50'
                  icon={icon}
                />
              );
            })}
          </Steps>
        </div>
        <div className="w-8/12 flex-col rounded-md bg-white px-5 pb-5 pt-7.5 mt-5 shadow-2">
          <div className='contentDiv lg:overflow-auto'>
            {steps[current].content}
          </div>
          <div className='mt-24 float-right'>
            {current < steps.length - 1 && (
              <button type="button" className="text-white secondary-500 hover:secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Save & Exit
              </button>
            )}

            {current < steps.length - 2 && (
              <button type="button" className="text-white secondary-500 hover:secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2" onClick={next}>
                Next
              </button>
            )}
            {current === steps.length - 2 && (
              <button type="button" onClick={next} className="text-white secondary-500 hover:secondary-600 rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                Submit for Verification
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
