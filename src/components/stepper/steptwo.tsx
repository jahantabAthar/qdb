"use client";
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Input, Select, Space } from 'antd';
const { Search } = Input;
const StepTwo: React.FC = () => {
    const [divs, setDivs] = useState([{ id: 0 }]);

    const addDiv = () => {
        setDivs([...divs, { id: divs.length }]);
      };
      const removeDiv = (id: number) => {
        setDivs(divs.filter((div) => div.id !== id));
      };
  return (
    <>
      <div className="w-full min-h-120 flex flex-col">
        <div className="font-bold">Company Detail</div>
        <div className="mt-3 text-sm">Please provide the necessary contact information.</div>
            {divs.map((div) => (
                <div key={div.id} id={`mainDiv${div.id}`} className="relative overflow-x-auto shadow-md rounded mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" colSpan={3} className="px-6 py-5 bg-slate-200">
                                    <div className="flex justify-between items-center">
                                        <span>Representative {div.id + 1}</span>
                                        <div>
                                        <Image
                                            width={16}
                                            height={16}
                                            src={"/images/remove.png"}
                                            style={{
                                            width: "auto",
                                            height: "auto",
                                            }}
                                            alt="remove"
                                            onClick={() => removeDiv(div.id)}
                                        />
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-slate-100">
                            <tr className="dark:border-gray-700">
                                <td className="px-6 py-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                                    <Space.Compact>
                                        <Input type="text" id="fullname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required/>
                                    </Space.Compact>
                                </td>
                                <td className="px-6 py-4">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <Space.Compact>
                                        <Input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required/>
                                    </Space.Compact>
                                </td>
                                <td className="px-6 py-4">
                                    
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile number</label>
                                    <Space direction="vertical" size="middle">
                                        <Space.Compact>
                                            <Input style={{ width: '20%' }} defaultValue="+974" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required/>
                                            <Input type="number" style={{ width: '60%' }}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required/>
                                        </Space.Compact>
                                    </Space>
                                </td>
                            </tr>
                            <tr className="dark:border-gray-700">
                                <td className="px-6 py-4" colSpan={3}>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whatsapp number</label>
                                    <Space.Compact>
                                        <Input type="number" id="whatsapp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-fit p-2.5  dark:text-white" required/>
                                    </Space.Compact>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           ))}
          <div className="text-sm color-500 mt-10">
            <Link className="block flex-shrink-0" href="#" onClick={(e) => { e.preventDefault(); addDiv(); }}>
                + Add another representative
            </Link>
          </div>                          
      </div>
    </>
  );
};

export default StepTwo;
