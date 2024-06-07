import Link from "next/link";
import { HiEye } from "react-icons/hi";
import { LuArrowUpSquare } from "react-icons/lu";
import { LuArrowDownSquare } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";

export default function Card({ title, content }) {
  return (
    <Link href='/post'>
    <div className="bg-white border-2 border-blue-500 rounded-lg p-5 mb-4 flex flex-col gap-4 shadow-md shadow-grey-500 ">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="bg-orange-500 rounded-full p-2 w-12 h-12 relative">
            <span className=" text-white text-2xl font-bold absolute top-2 left-[14px]">
              A
            </span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-[#3a3a3a] font-bold">Rahul Singh </h2>
            <p className="text-sm">2 hours ago</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <HiEye size={20} color="grey" />
          <span className="font-bold text-lg">125</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 items-center">
          <div className="h-[10px] w-[10px] bg-blue-500 rounded-full"></div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p className=" text-[#3a3a3a]">{content}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <LuArrowUpSquare size={24} color="blue" />
            <p className="">100</p>
          </div>
          <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
          <div className="flex gap-2">
            <LuArrowDownSquare size={24} color="blue" />
            <p className="">100</p>
          </div>
          <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
          <div className="flex gap-2">
            <TbMessage2 size={24} color="blue" />
            <p className="">100</p>
          </div>
          <div className="ml-4">
            <p className="text-orange-500 text-sm">New comment 5 min ago</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="border-2 border-orange-500 bg-orange-100 px-2 py-[2px] rounded-full "><p className="text-orange-500">Strategy</p></div>
          <div className="border-2 border-orange-500 bg-orange-100 px-2 py-[2px] rounded-full "><p className="text-orange-500">Preparation</p></div>
        </div>
      </div>
    </div>
    </Link>
  );
}
