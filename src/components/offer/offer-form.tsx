import React from "react";
import OfferInput from "./offer-input/offer-input";
import { OfferType } from "./offer-type/offer-type";
import OfferDialog from "./offer-dialog/offer-dialog";
export default function offerForm() {
  return (
    <div className="pt-[1rem]">
      <div className="flex flex-col ">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md h-full max-h-md rounded-2xl bg-white border-gray-900 border-[0.1rem] p-4 ">
            <div className="sm:w-[20rem] lg:w-[30rem] md:inline-block lg:w-full pt-[0.5rem]">
              <h1 className="text-m font-bold">รายละเอียดข้อเสนอ</h1>
              <OfferType />
              <div className="pt-[0.5rem]">
                <OfferInput />
                <div className="pt-[0.5rem]">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ยืนยันการส่งข้อเสนอ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
