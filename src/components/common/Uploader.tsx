import React, { useState } from "react";
import { UploadChangeParam } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


import { CloudUploadOutlined, FileJpgOutlined } from '@ant-design/icons';

const Uploader = () => {
  const [uploadStatus, setUploadStatus] = useState('');
  const [fileName, setFileName] = useState('');

  const props = {
    name: 'file',
    multiple: true,
    action: '',
    onChange(info: UploadChangeParam<UploadFile<any>>) {
      const { status } = info.file;
      if (status === 'done') {
        setFileName(info.file.name);
        setUploadStatus('done');
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e : React.DragEvent<HTMLDivElement>) {
    },
  };
  return (
    <>
      
      <div className="mt-5">
        {uploadStatus !== 'done' ? (
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined  style={{ fontSize: '16px', color: '#008776' }} className=" bg-secondary-100 p-4 rounded-full" />
            </p>
            <p className="ant-upload-text">
              <span className="text-green-700 font-bold">Click to upload</span> or drag and drop
            </p>
            <p className="ant-upload-hint">
              PDF, DOC, XLSX or JPG
            </p>
          </Dragger>
        ) : (
          <div className="w-full bg-secondary-100 pt-1 pb-1 rounded">
            <div className="flex flex-row m-5">
              <div className="p-2 text-center rounded-full bg-secondary-200 mr-5 h-10 w-10" ><FileJpgOutlined /></div>
              <div className="pt-2">{fileName}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Uploader;