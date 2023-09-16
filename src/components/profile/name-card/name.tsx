import React from "react";
import Image from 'next/image'
export default function NameCard() {
  return (
    <div className="w-full pt-[1rem]">
      <div className="flex flex-col ">
        <div className="flex justify-start items-start">
          <div className="w-full max-w-md h-full max-h-md rounded-2xl bg-white drop-shadow-lg border-gray-900 border-[0.1rem] p-4 ">
          <div className="md:inline-block lg:w-full pt-[0.5rem]">
          <div className="flex flex-row gap-4 ">
                <Image
            src="/profile.jpg"
            width={150}
            height={150}
            alt="Picture of the author"
            className="rounded-2xl"
            />
            <div className="flex flex-col justify-center">
          <h1 className="text-m font-bold ">{`นายชัดชัด แน่ชัดแน่แน่`}</h1>
          <h1 className="text-m font-bold ">อายุ: {`24 ปี`}</h1>
          <h1 className="text-m font-bold ">เขต: {`ทุ่งครุ`}</h1>
          <div className="pt-4">
          <h1 className="text-m">จำนวนข้อเสนอ: {`6 ข้อเสนอ`}</h1>
          <h1 className="text-m">สถิติการโหวต: {`84 ครั้ง`}</h1>
          <h1 className="text-m font-bold text-green-700">ได้รับการยืนยันตัวตนแล้ว ✅</h1>
          </div>
          </div>
          </div>

        </div>
       </div>
      </div>
    </div>
          </div>
  );
}
