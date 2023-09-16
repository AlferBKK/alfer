import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill} from "react-icons/ri"
import React from "react";
const Menus = [
    {
        id: 1,
        title: "Dashboard",
        href: "/"
    },
    {
        id: 2,
        title: "ร่วมส่งข้อเสนอ",
        href: "/offer/page"
    },
    {
        id: 3,
        title: "Ideas Analyze",
        href: "/analyze/idea"
    },
    {
      id: 4,
      title: "Profile",
      href: "/profile/profile"
  }
  ]
export function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`bg-[#3bb561] max-h-full h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } duration-300 relative`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl
      rounded-full absolute -right-3 top-9 border
      border-dark-purple cursor-pointer ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex">
        <AiFillEnvironment
          className={`bg-white text-4xl
        rounded cursor-pointer block float-left mr-2 duration-500 ${
          open && "rotate-[360deg]"
        }`}
        />
        <h1
          className={`text-white origin-left font-medium text-2xl duration-300 ${
            !open && "scale-0"
          }`}
        >
          AlferBKK
        </h1>
        </div>
      <div className="pt-8">
          {
            Menus.map((menu)=>(
                <>
                    <a key={menu.id} href={menu.href} className="text-white text-sm flex
                    items-center gap-x-8 cursor-pointer  hover:bg-gray-800 rounded-md mt-6 p-2">
                        <span className="text-2xl block float-left">
                            <RiDashboardFill />
                        </span>
                        <span className={`text-base font-medium flex-1 ${!open && "scale-0"}`}> {menu.title}</span>
                    </a>
                </>
            ))
          }
        </div>
    </div>
  );
}
