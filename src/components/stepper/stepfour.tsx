"use client";
import React from "react";
import Buttons from '@/components/common/Buttons'
import FileUpload from '@/components/common/Uploader'
interface StepProps {
  handleSubmit: () => void;
}
const StepFour: React.FC<StepProps> = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="min-w-47.5 min-h-120 max-w-4xl flex flex-col">
          <div><span className="font-bold">Award & Certificates</span> (Optional)</div>
          <div className="mt-5">
            <FileUpload />
          </div>
          <Buttons />
        </div>
      </form>
    </>
  );
};

export default StepFour;
