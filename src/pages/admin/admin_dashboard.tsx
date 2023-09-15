import { AdminSidebar } from "@/components/sidebar/adminsidebar";
import SplineComponent from "@/components/spline/spline";
export default function Home() {
  return (
    <main>
    <div className="flex flex-row">
    <AdminSidebar/>
    <div className="flex w-[100%] bg-white">
        <div className="p-7">
      <h1 className="text-2xl text-black font-semibold">Admin Dashboard</h1>
    </div>
    </div>
    </div>
    </main>
  );
}