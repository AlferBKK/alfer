import {Sidebar} from "@/components/sidebar/sidebar";
import OfferForm from "@/components/card/offer-form"
import { OfferType } from "@/components/card/offer-type/offer-type";
export default function Offer() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white justify-center pt-[4rem]">
        <div className="flex flex-col">
      <h1 className="text-2xl text-black font-semibold">ร่วมส่งข้อเสนอ</h1>
      <OfferForm/>
    </div>
    </div>
    </div>
    </main>
  );
}