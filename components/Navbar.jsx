import { MdPermPhoneMsg } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import SmallStreakIcon from "../utilities/SmallStreakIcon";

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 bg-white p-4 text-black w-[92vw] flex justify-between items-center ml-[123px] pb-6 pr-11 border-[1px] border-bottom-gray-500">
      <div className="text-xl font-bold">Welcome Rahul!</div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center p-[0.6px] bg-gradient-to-r from-[#FC8026] to-[#014EE6] rounded-full ">
          <div className="flex items-center p-2 bg-white rounded-full gap-4">
            <div>
              <SmallStreakIcon/> 
            </div>
            <span>2</span>
          </div>
        </div>
        <div className="flex items-center gap-4 border-2 border-blue-500 rounded-xl p-2">
          <span className="text-blue-500 font-bold">Explore Community</span>
        </div>
        <div className="flex p-2 rounded-xl items-center gap-16 bg-gradient-to-br from-[#014ee6c4] to-[#012B80]">
          <span className="text-white"> Polity</span>
          <div className="flex gap-4">
            <div className="h-full w-4 bg-white"></div>
            <FaChevronDown color="white" />
         </div>
        </div>
        <MdPermPhoneMsg size={30} color="#012B80" />
      </div>
    </nav>
  );
}
