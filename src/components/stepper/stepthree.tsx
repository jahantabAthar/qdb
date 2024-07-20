"use client";
import React from "react";
import { CloudUploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'error') {
     // message.success(`${info.file.name} file uploaded successfully.`);
    } 
    // else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const StepThree: React.FC = () => {
  return (
    <>
      <div className=" min-h-120 flex flex-col">
        <div className="font-bold">Documents</div>
        <div className="mt-3 text-sm font-bold">1: Trade License:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        <div className="mt-3 text-sm font-bold">2: Establishment Card:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        <div className="mt-3 text-sm font-bold">3: MOF Clasification:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        <div className="mt-3 text-sm font-bold">4: Court clearance certificate:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        <div className="mt-3 text-sm font-bold">5: Manpower list from misistory of Labour:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        <div className="mt-3 text-sm font-bold">6: Latest audited balance Sheet:</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>

      </div>
    </>
  );
};

export default StepThree;
