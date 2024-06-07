import { HiEye } from "react-icons/hi";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Tags from "../components/Tags";
import { RxPencil2 } from "react-icons/rx";

export default function Community() {
    return (
        <main className="flex gap-8 p-4 mr-4 ml-20 ">
            <div className="flex gap-8 p-4 ">
                <div className="flex flex-col mt-16">
                    <h3 className="text-xl font-bold mb-8 px-8">Community</h3>
                    <div className="flex justify-between px-8">
                        <div className="flex gap-3">
                            <button className=" my-button px-4 border-2 border-blue-500 rounded-full">
                                All
                            </button>
                            <button className=" my-button px-4 border-2 border-grey-500 rounded-full">
                                Preparation Strategy
                            </button>
                            <button className=" my-button px-4 border-2 border-grey-500 rounded-full">
                                Interview Experience
                            </button>
                        </div>
                        <button className=" my-button px-4 bg-blue-500 text-white rounded-full flex gap-2 py-2">
                            <RxPencil2 size={24} color="white" />
                            Write
                        </button>
                    </div>
                    <div className=" border-dashed border-r-4 border-b-4 border-purple-600 rounded-lg p-8">
                        <Card
                            title="Preparation Strategy"
                            content="Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae  bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum."
                        />
                        <Card
                            title="Preparation Strategy"
                            content="Lorem ipsum dolor sit amet consectetur. Vitae vel sed non luctus ipsum amet mattis nulla sagittis. Ultricies consectetur vitae  bibendum volutpat at. Odio ut urna risus cras nunc facilisis a ipsum."
                        />
                    </div>
                    <div className="flex justify-between p-4 shadow-md  rounded-lg">
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
                </div>
            </div>
            <div className=" pl-4 border-l-2 border-grey-500 pt-10 mt-12">
                <div className="bg-gradient-to-r from-yellow-300 to-yellow-100 w-full aspect-video flex gap-6">
                    {/* <StreakBigIcon />                
                    <StreakSmallIcon />                
                    <StreakIcon />                 */}
                    <div className="flex flex-col gap-4">
                        <p className="text-lg font-bold">Achieve Your Goals with Keep The Streak Alive</p>
                        <div className="block">
                            <button className="bg-orange-500 p-2 rounded-full text-white font-bold text-md ">Start Practicing</button>
                        </div>
                    </div>

                </div>
                <SearchBar />
                <Tags />
            </div>
        </main>
    );
}
