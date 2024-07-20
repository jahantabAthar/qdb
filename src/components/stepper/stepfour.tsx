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
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const StepFour: React.FC = () => {
  return (
    <>
      <div className="min-w-47.5 min-h-120 max-w-4xl flex flex-col">
        <div><span className="font-bold">Award & Certificates</span> (Optional)</div>
        <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined />
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

export default StepFour;
