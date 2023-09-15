import React from "react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
export default function offerForm() {
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col ">
        <div className="flex justify-start items-start">
          <div className="w-full max-w-md h-full max-h-md rounded-2xl bg-gray-200 border-gray-900 border-1 p-4 ">
          <div className="sm:w-[20rem] lg:w-[30rem] md:inline-block lg:w-full pt-[1rem]">
          <h1 className="text-m font-bold">รายละเอียดข้อเสนอ</h1>
        <input
          id="offer"
          name="search"
          className="block w-full rounded-full border-0 bg-white py-1.5 pl-10 pr-3 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 border-gray-950 border-1 sm:leading-6 "
          placeholder="รายละเอียดข้อเสนอ"
          type="search"
        />
      </div>
    </div>
          </div>
        </div>
      </div>
  );
}
