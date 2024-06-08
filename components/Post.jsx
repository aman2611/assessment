'use client'

import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa";
import postImage from "../public/postImage.png";
import pdfImage from "../public/pdfImage.png";
import { LuArrowUpSquare } from "react-icons/lu";
import { LuArrowDownSquare } from "react-icons/lu";
import { IoBookmarkOutline } from "react-icons/io5";
import Comments from "../components/Comments";
import Link from "next/link";


const Post = () => {
  return (
    <main className="flex flex-col gap-8 p-40 mr-4 ml-20 ">
      <Link className="flex gap-4 mb-4 items-center hover:underline" href='/'>
        <FaAngleLeft />
        <p>Back</p>
      </Link>
      <div className="flex gap-4 items-center">
        <div className="bg-orange-500 rounded-full p-2 w-12 h-12 relative">
          <span className="text-white text-2xl font-bold absolute top-2 left-3.5">
            A
          </span>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-[#3a3a3a] font-bold">Rahul Singh</h2>
          <p className="text-sm">2 hours ago</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-2xl">Preparation Strategy</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nunc integer quis eu odio. Ac
          purus congue donec vitae arcu non. Massa nisi netus metus volutpat nulla
          porttitor dictum sed. Cursus ipsum id scelerisque sit. Sed gravida diam
          non volutpat sed. Enim justo enim consectetur sit turpis dictumst.
          Congue suspendisse dictum adipiscing proin ac. Non volutpat eget at
          tortor sed lectus facilisi ac tincidunt. Nec pharetra quam donec cras
          aliquam cras hendrerit dignissim pulvinar.
          <br /><br />
          Cras gravida sem sed donec urna eget. Massa viverra diam lacinia
          lacinia lorem nulla nunc nibh feugiat. Facilisis urna aliquam vehicula
          amet. Mauris facilisi laoreet sed sit sed eu molestie est. At diam diam a
          neque volutpat nisi faucibus urna. Malesuada proin magna nascetur rhoncus
          molestie nunc. Eu orci id in egestas fringilla eget. Sem at proin cras
          sit velit placerat. Vel lacus laoreet cursus elementum augue magna ac
          viverra mi.
          <br /><br />
          Quis ut in viverra ipsum. Feugiat eu tortor eleifend sit neque sapien at
          viverra. Viverra sagittis ac iaculis ornare quis. Diam tellus est
          pulvinar justo nullam at. Id et nibh ac neque nam lectus tellus eros in.
          Massa sed dolor donec.
        </p>
        <div className=" flex flex-col relative">
          <Image src={postImage} alt="Post Image" width={200} height={160} />
          <div className="w-[200px] h-10 bg-[#f3f3f5] absolute bottom-2 left-0 flex gap-2 items-center">
          <Image src={pdfImage} alt="Pdf Image" width={24} height={24} />
<p>Notes.pdf</p>
          </div>
        </div>
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
            <IoBookmarkOutline size={24} color="blue" />
            <p className="">100</p>
          </div>
        </div>
      </div>
      <Comments />
    </main>
  );
};

export default Post;
