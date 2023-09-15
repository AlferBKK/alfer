import {Sidebar} from "@/components/sidebar/sidebar";
export default function Home() {
  return (
    <main>
    <div className="flex flex-row">
    <Sidebar/>
    <div className="flex w-[100%] bg-white">
        <div className="p-7">
      <h1 className="text-2xl text-black font-semibold">Home Page</h1>
    </div>
    </div>
    </div>
    </main>
  );
}