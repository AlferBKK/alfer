import {Sidebar} from "../../components/sidebar/sidebar";
import OfferForm from "../../components/offer/offer-form"
import NameCard from "../../components/profile/name-card/name";
import React from "react";
export default function Offer() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white justify-center pt-[4rem]">
        <div className="flex flex-col w-full items-center">
      <h1 className="text-2xl text-black font-semibold">ร่วมส่งข้อเสนอ</h1>
      <div className="flex flex-row gap-4">
      <OfferForm/>
      <NameCard/>
      </div>
    </div>
    </div>
    </div>
    </main>
  );
}