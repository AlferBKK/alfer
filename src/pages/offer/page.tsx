import {Sidebar} from "../../components/sidebar/sidebar";
import OfferForm from "../../components/offer/offer-form"
import React from "react";
import OfferHistory from "../../components/profile/offer-history/history";
import NameCard from "../../components/profile/name-card/name";
export default function Offer() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white justify-center pt-[4rem]">
        <div className="flex flex-col w-full items-center">
      <h1 className=" sm:text-m md:text-xl lg:text-2xl text-black font-semibold">ร่วมส่งข้อเสนอ</h1>
      <div className="flex flex-row gap-4">
      <OfferForm/>
      <div className="flex flex-col gap-4">
      <NameCard/>
      <h1 className="sm:text-m md:text-xl lg:text-2xl text-black font-semibold">ประวัติการส่งข้อเสนอ</h1>
      <OfferHistory/>
      </div>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}