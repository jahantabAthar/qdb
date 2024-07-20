"use client";
import React,{useState} from "react";
import Stepper from "../stepper/index"
import { Flex, Progress } from 'antd';

const Index: React.FC = () => {
  const [pregress, setProgress] = useState(20)
  return (
    <>
      <div className="mx-auto max-w-screen-3xl p-4 pl-50 pr-50">
        <div className="rounded-md  bg-white px-5 pb-5 pt-7.5 min-h-44 shadow-2">
          <div className="flex flex-row">
            <div className="min-w-30 max-w-4xl">
                  <div className="text-lg mb-5 flex-none">Complete Your <b>Contractor Company</b> <span className="text-cyan-700"><b>Setup</b></span></div>
                  <div className="flex-none">Upon completion of all necessary steps and approval by our team, you'll gain the ability to showcase your company on our website and enrich your profile with a portfolio of projects.</div>
            </div>
            <div className="w-1/2 text-right">
                  <Progress type="circle" percent={pregress} strokeColor={{'0%': '#008776','100%': '#008776'}} />
            </div>
          </div>
        </div>
        <Stepper setProgress={setProgress}/>
      </div>
    </>
  );
};

export default Index;
