"use client";
import React, { useState } from "react";
import { Form, Input, Radio } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';

import Button from '@/components/common/Buttons';
import FileUpload from '@/components/common/Uploader';

interface StepProps {
  handleSubmit: () => void;
}

const StepOne: React.FC<StepProps> = ({ handleSubmit, handleChange, items, uploadFile }) => {
  
  return (
    <>
      <Form
        name="basic"
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <div className="flex flex-col">
          <div className="font-bold">Company Detail</div>
          <div className="min-h-30 bg-slate-100 rounded mt-5 p-5 text-sm">
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
          <div className="font-bold mt-8 mb-5">
            <span className="text-red-600">* </span>Company Type:</div>
            <Form.Item name="companyType" rules={[{ required: true, message: 'Required' }]}>
              <Radio.Group>
                <Radio value="Contractor">Contractor</Radio>
                <div className="ml-6 mt-2 text-sm font-medium mb-5">Specialize in construction, renovation.</div>
                <Radio value="Consultant">Consultant</Radio>
                <div className="ml-6 mt-2 text-sm font-medium">Specialize in construction, renovation.</div>
              </Radio.Group>
            </Form.Item>
          <div className="flex flex-row space-x-8">
            <div className="font-bold mt-8">Description:</div>
            <div className="font-bold pt-2 pb-2 mt-6 pl-5 pr-5 rounded-full bg-slate-200 ">AI generator</div>
          </div>
          <div className="flex flex-row space-x-8 mt-8">
            <div className="w-full">
              <label className="font-bold"><span className="text-red-600">* </span>English</label>
              <div className="mt-5">
                <Form.Item
                 
                  rules={[{ required: true, message: 'Required' }]}
                >
                  <Input.TextArea  name="englishTxt" rows={4} maxLength={1000} value={items?.englishTxt || ''} onChange={handleChange} />
                </Form.Item>
                <div className="text-right">
                  {items.englishTxt?.length ?? 0}/1000
                </div>
              </div>
            </div>
            <div className="w-full">
              <label className="font-bold"><span className="text-red-600">* </span>Arabic</label>
              <div className="mt-5">
                <Form.Item
                  rules={[{ required: true, message: 'Required' }]}
                >
                  <Input.TextArea rows={4} name="arabicTxt" maxLength={1000} value={items.arabicTxt? items.arabicTxt:''} onChange={handleChange} />
                </Form.Item>
                <div className="text-right">
                  {items.arabicTxt?.length ?? 0}/1000
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold mt-8">Profile Picture</div>
          <div className="flex flex-col mb-4 mt-4">
            <div className="flex items-center bg-slate-100 w-full h-20 rounded">
              <FileImageOutlined className="ml-5" /><label className="ms-2">Select an image that showcases your work.</label>
            </div>
            <FileUpload fileName={'PP'} uploadFile={uploadFile} items={items}/>
            <div className='flex items-end justify-end mt-24'>
              <Button name={'Save & Exit'} type={'button'}/>
              <Button name={'Next'} type={'submit'}/>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};
export default StepOne;
