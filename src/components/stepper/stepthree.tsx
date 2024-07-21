"use client";
import React from "react";
import Button from '@/components/common/Buttons'
import FileUpload from '@/components/common/Uploader'
interface StepProps {
  handleSubmit: () => void;
}
const sections = ['Trade License','Establishment Card', 'MOF Clasification','Court clearance certificate','Manpower list from misistory of Labour','Latest audited balance Sheet'];

const StepThree: React.FC<StepProps> = ({handleSubmit}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className=" min-h-120 flex flex-col">
        <div className="font-bold">Documents</div>
        {sections.map((section, index) => {
          return (
            <>
              <div className="mt-5 text-sm font-bold">{index + 1}: {section}</div>
              <div className="mt-5">
                <FileUpload />
              </div>
            </>
          );
        })}
        <div className='flex items-end justify-end mt-24'>
            <Button name={'Save & Exit'} type={'button'}/>
            <Button name={'Next'} type={'submit'}/>
        </div>
      </div>
      </form>
    </>
  );
};

export default StepThree;
