import Link from "next/link";
import logo from "../utilities/logo";
import { icon1 } from "../utilities/sidebarIcons";
import { icon2 } from "../utilities/sidebarIcons";
import { icon3 } from "../utilities/sidebarIcons";
import { icon4 } from "../utilities/sidebarIcons";
import { icon5 } from "../utilities/sidebarIcons";
import { icon6 } from "../utilities/sidebarIcons";


export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0">
      <div className="bg-white text-black w-18 p-4 h-[100vh] flex flex-col items-center shadow-2xl  ">
        <Link href='/' className="text-2xl font-bold mb-4">{logo}</Link>
        <div className="w-full h-[0.5px] bg-[#e0d8d8]"></div>
        <div className="flex flex-col justify-between items-center my-8 h-[90vh]">
          <div className="flex flex-col gap-3 items-center my-8">
            {icon1}
            {icon2}
            {icon3}
            {icon4}
          </div>
          <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center p-[0.6px] bg-gradient-to-r from-[#FC8026] to-[#014EE6] rounded-full ">
          <div className="flex items-center p-2 bg-white rounded-full gap-4">
            <div>
            {icon5}
            </div>
          </div>
        </div>
            <div className="w-full h-[0.5px] bg-[#e0d8d8]"></div>
            {icon6}
          </div>
      </div>
    </div>
  </div>
  );
}
