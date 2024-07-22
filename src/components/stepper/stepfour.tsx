"use client";
import React from "react";
import Button from '@/components/common/Buttons'
import FileUpload from '@/components/common/Uploader'
interface StepProps {
  handleSubmit: () => void;
}
const StepFour: React.FC<StepProps> = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full min-h-120 flex flex-col">
          <div><span className="font-bold">Award & Certificates</span> (Optional)</div>
          <div className="mt-5">
            <FileUpload />
          </div>
          <div className='flex items-end justify-end mt-36'>
              <Button name={'Save & Exit'} type={'button'}/>
              <Button name={'Next'} type={'submit'}/>
          </div>
        </div>
      </form>
    </>
  );
};

export default StepFour;
