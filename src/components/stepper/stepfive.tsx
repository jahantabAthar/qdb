"use client";
import React from "react";
import { BorderOuterOutlined, BellOutlined } from '@ant-design/icons';

const StepFive: React.FC = () => {
  return (
    <>
      
      <div>
          <div><span className="font-bold">Verification</span></div>
            <div className="justify-center min-h-200 max-w-4xl flex flex-col items-center mt-30">
            <div className="text-center w-10/12 justify-center items-center">
            <div className="flex items-center justify-center mb-5">
              <div className=" bg-yellow-100 rounded-full p-2 h-10 w-10  justify-center">
                <BorderOuterOutlined />
              </div>
            </div>
            <div className="font-bold text-sm">
              Your Company details have been submitted!
            </div>
            <div className="text-sm">
              Our team will review your details to ensure everything is accurate and complete. This process typically takes 1-3 business days.
            </div>
            <div className="flex items-center justify-center p-3 bg-slate-200 rounded mt-5 text-sm text-center">
              <BellOutlined className="pr-5" /> You will receive the notification once the review is complete.
            </div>
            <div className="flex items-center justify-center mt-5 text-sm">
              <div className="secondary-500 rounded-full p-3 text-white pl-10 pr-10">Go back to companies</div>
            </div>
          </div>
          </div>
      </div>

    </>
  );
};

export default StepFive;
