"use client";
import React, { useState } from "react";
import { Input } from 'antd';
import Buttons from '@/components/common/Buttons'
import FileUpload from '@/components/common/Uploader'
import { FileImageOutlined } from '@ant-design/icons';
interface StepProps {
  handleSubmit: () => void;
}
const { TextArea } = Input;

const StepOne: React.FC<StepProps> = ({ handleSubmit }) => {
  
  const [textEnglish, setTextEnglish] = useState('');
  const [textArabic, setTextArabic] = useState('');
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div className="font-bold">Company Detail</div>
          <div className="min-h-30 bg-slate-200 rounded mt-5 p-5 text-sm">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <div className="text-slate-500 pb-3">Company Name (EN)</div>
                <div className="font-bold text-slate-600">Al Arab Construction</div>
              </div>
              <div className="flex flex-col">
                <div className="text-slate-500 pb-3">Company Name (AR)</div>
                <div className="font-bold text-slate-600">Al Arab Construction</div>
              </div>
              <div className="flex flex-col">
                <div className="text-slate-500 pb-3">Establishment Date</div>
                <div className="font-bold text-slate-600">19 MAY, 2018</div>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-slate-500 pb-3 pt-5">List of Activities</div>
              <div className="font-bold text-slate-600">Al Arab Construction</div>
            </div>
          </div>
          <div className="font-bold mt-8"><span className="text-red-600">* </span>Company Type:</div>
          <div className="flex flex-col mb-4 mt-4 text-sm font-medium">
            <div className="flex items-center">
              <input type="radio" value="1" id="radioo" name="default-radio" required className="w-4 h-4 text-green-700 bg-gray-100" />
              <label className="ms-2 text-sm font-medium">Contractor</label>
            </div>
            <label className="ms-2 mt-2 ml-6">Specilize in construnction, renovation.</label>
          </div>
          <div className="flex flex-col mb-4 mt-4 text-sm font-medium">
            <div className="flex items-center">
              <input type="radio" value="" name="default-radio" required className="w-4 h-4 text-green-700 bg-gray-100" />
              <label className="ms-2 text-sm font-medium">Consultant</label>
            </div>
            <label className="ms-2 mt-2 ml-6">Specilize in construnction, renovation.</label>
          </div>
          <div className="flex flex-row space-x-8">
            <div className="font-bold mt-8">Description:</div>
            <div className="font-bold pt-1 pb-1 mt-7 pl-5 pr-5 rounded-full bg-slate-300">Ai generator</div>
          </div>
          <div className="flex flex-row space-x-8  mt-8">
            <div className="w-1/2">
              <label className="font-bold"><span className="text-red-600">* </span>English</label>
              <div className="mt-5">
                <TextArea
                  rows={6}
                  maxLength={1000}
                  value={textEnglish}
                  onChange={(e) => setTextEnglish(e.target.value)}
                  required
                />
                <div className="text-right">
                  {textEnglish.length}/1000
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <label className="font-bold"><span className="text-red-600">* </span>Arabic</label>
              <div className="mt-5">
                <TextArea
                  rows={6}
                  maxLength={1000}
                  value={textArabic}
                  onChange={(e) => setTextArabic(e.target.value)}
                  required
                />
                <div className="text-right">
                  {textArabic.length}/1000
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold mt-8">Profile Picture</div>
          <div className="flex flex-col mb-4 mt-4">
            <div className="flex items-center bg-slate-100 w-full h-20 rounded">
              <FileImageOutlined className="ml-5" /><label className="ms-2">Select and image that showcase your work.</label>
            </div>
            <FileUpload />
            <Buttons />
          </div>
        </div>
      </form>
    </>
  );
};

export default StepOne;
