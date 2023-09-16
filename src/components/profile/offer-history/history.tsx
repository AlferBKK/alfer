import React from "react";
import Image from 'next/image'
export default function OfferHistory() {
  return (
    <div className="rounded-l border-[0.1rem] border-gray-900">
    <div className="flex">
        <div className="">
            <div className="bg-white shadow-md">
                <table className=" table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 text-sm leading-normal">
                            <th className="py-3 px-6 text-left">ชื่อข้อเสนอ</th>
                            <th className="py-3 px-6 text-left">วันที่</th>
                            <th className="py-3 px-6 text-center">สถานะ</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-1">
                                    
                                    </div>
                                    <span className="font-medium">สร้างสวนสาธารณะ</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <span>10 สิงหาคม 2566</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <span className="font-medium">สร้าง co-working space</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                <div className="flex items-center">
                                    <span>21 กันยายน 2566</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>  );
}
