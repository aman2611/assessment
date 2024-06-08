import { useState } from "react";
import { LuArrowUpSquare } from "react-icons/lu";
import { LuArrowDownSquare } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";
import { BiMessageAlt } from "react-icons/bi";

const CommentCard = () => {
  const [comments, setComments] = useState([
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
      author: "Rahul Singh",
      time: "12:15 Today",
      likes: 100,
      dislikes: 13,
      replies: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Turpis nunc eget leo enim. Interdum eget morbi tristique eu eget molestie. Sapien amet senectus velit ipsum sed suspendisse. Volutpat id id turpis cursus.",
          author: "Varun Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Felis sociis nisl amet odio et lorem interdum pretium. Tincidunt sit et duis adipiscing metus magna. Amet accumsan auctor scelerisque ultricies viverra.",
          author: "Imran Zaid",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "This is a reply to the most recent comment.",
          author: "Rahul Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
      ],
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
      author: "Rahul Singh",
      time: "12:15 Today",
      likes: 100,
      dislikes: 13,
      replies: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Turpis nunc eget leo enim. Interdum eget morbi tristique eu eget molestie. Sapien amet senectus velit ipsum sed suspendisse. Volutpat id id turpis cursus.",
          author: "Varun Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Felis sociis nisl amet odio et lorem interdum pretium. Tincidunt sit et duis adipiscing metus magna. Amet accumsan auctor scelerisque ultricies viverra.",
          author: "Imran Zaid",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "This is a reply to the most recent comment.",
          author: "Rahul Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
      ],
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
      author: "Rahul Singh",
      time: "12:15 Today",
      likes: 100,
      dislikes: 13,
      replies: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Turpis nunc eget leo enim. Interdum eget morbi tristique eu eget molestie. Sapien amet senectus velit ipsum sed suspendisse. Volutpat id id turpis cursus.",
          author: "Varun Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Felis sociis nisl amet odio et lorem interdum pretium. Tincidunt sit et duis adipiscing metus magna. Amet accumsan auctor scelerisque ultricies viverra.",
          author: "Imran Zaid",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "This is a reply to the most recent comment.",
          author: "Rahul Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
      ],
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
      author: "Rahul Singh",
      time: "12:15 Today",
      likes: 100,
      dislikes: 13,
      replies: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Turpis nunc eget leo enim. Interdum eget morbi tristique eu eget molestie. Sapien amet senectus velit ipsum sed suspendisse. Volutpat id id turpis cursus.",
          author: "Varun Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Felis sociis nisl amet odio et lorem interdum pretium. Tincidunt sit et duis adipiscing metus magna. Amet accumsan auctor scelerisque ultricies viverra.",
          author: "Imran Zaid",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "This is a reply to the most recent comment.",
          author: "Rahul Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
      ],
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Vestibulum vitae sollicitudin suspendisse faucibus donec maecenas eleifend eget. Blandit auctor turpis vel malesuada lorem mattis imperdiet ornare. Venenatis.",
      author: "Rahul Singh",
      time: "12:15 Today",
      likes: 100,
      dislikes: 13,
      replies: [
        {
          text: "Lorem ipsum dolor sit amet consectetur. Turpis nunc eget leo enim. Interdum eget morbi tristique eu eget molestie. Sapien amet senectus velit ipsum sed suspendisse. Volutpat id id turpis cursus.",
          author: "Varun Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "Lorem ipsum dolor sit amet consectetur. Felis sociis nisl amet odio et lorem interdum pretium. Tincidunt sit et duis adipiscing metus magna. Amet accumsan auctor scelerisque ultricies viverra.",
          author: "Imran Zaid",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
        {
          text: "This is a reply to the most recent comment.",
          author: "Rahul Kumar",
          time: "12:15 Today",
          likes: 100,
          dislikes: 13,
          replies: [],
        },
      ],
    },
  ]);

  const toggleReplies = (index) => {
    setComments((prevComments) =>
      prevComments.map((comment, i) =>
        i === index
          ? { ...comment, showReplies: !comment.showReplies }
          : comment
      )
    );
  };

  return (
    <main className="flex flex-col gap-8 p-4 mr-4 ml-20 ">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Comments</h1>
        <div className="flex gap-4">
          <TbMessage2 />
          <h4 className="font-bold text-gray-500">Comment</h4>
        </div>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div
            key={index}
            className="p-4 mb-2 border border-gray-200 rounded-lg"
          >
            <div className="flex flex-col justify-between">
              <div className="flex gap-4 items-center">
                <div className="bg-orange-500 rounded-full p-2 w-12 h-12 relative">
                  <span className=" text-white text-2xl font-bold absolute top-2 left-[14px]">
                    A
                  </span>
                </div>
                <div className="flex flex-col">
                  <h2 className="text-xl text-[#3a3a3a] font-bold">
                    {comment.author}
                  </h2>
                  <p className="text-sm">{comment.time}</p>
                </div>
              </div>
              <div className="my-6">{comment.text}</div>
              <div className="flex space-x-2">
                <div className="flex gap-4 items-center">
                  <div className="flex gap-2">
                    <LuArrowUpSquare size={24} color="blue" />
                    <p className="">{comment.likes}</p>
                  </div>
                  <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
                  <div className="flex gap-2">
                    <LuArrowDownSquare size={24} color="blue" />
                    <p className="">{comment.dislikes}</p>
                  </div>
                  <div className="h-4 w-[1px] bg-[#fff]"></div>
                  <div className="flex gap-2">
                    <BiMessageAlt size={24} color="gray" />
                    <p className="text-gray-500">reply</p>
                  </div>
                  <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
                </div>
                <button
                  onClick={() => toggleReplies(index)}
                  className="text-gray-500 flex gap-4 hover:underline"
                >
                  <TbMessage2 size={24} color="gray" />
                  Hide {comment.replies.length} replies
                </button>
              </div>
            </div>
            {comment.showReplies && (
              <div className="mt-2 ml-4 border-l border-gray-300 pl-4">
                {comment.replies.map((reply, replyIndex) => (
                  <div
                    key={replyIndex}
                    className="p-4 mb-2 border border-gray-200 rounded-lg"
                  >
                    <div className="flex flex-col justify-between ">
                      <div className="flex gap-4 ">
                        <div className={`${replyIndex % 2 === 0 ? 'bg-purple-500' : 'bg-pink-500'} rounded-full p-2 w-12 h-12 relative`}>
                          <span className=" text-white text-2xl font-bold absolute top-2 left-[16px]">
                          {replyIndex % 2 === 0 ? 'A' : 'R'}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-xl text-[#3a3a3a] font-bold">
                            {reply.author}
                          </h2>
                          <p className="text-sm">{reply.time}</p>
                        </div>
                      </div>
                      <div className="my-6">{reply.text}</div>
                      <div className="flex space-x-2">
                        <div className="flex gap-4 items-center">
                          <div className="flex gap-2">
                            <LuArrowUpSquare size={24} color="blue" />
                            <p className="">{comment.likes}</p>
                          </div>
                          <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
                          <div className="flex gap-2">
                            <LuArrowDownSquare size={24} color="blue" />
                            <p className="">{comment.dislikes}</p>
                          </div>
                          <div className="h-4 w-[1px] bg-[#fff]"></div>
                          <div className="flex gap-2">
                            <BiMessageAlt size={24} color="gray" />
                            <p className="text-gray-500">reply</p>
                          </div>
                          <div className="h-4 w-[1px] bg-[#3a3a3a]"></div>
                        </div>
                        <button
                          onClick={() => toggleReplies(index)}
                          className="text-gray-500 flex gap-4 hover:underline"
                        >
                          <TbMessage2 size={24} color="gray" />
                          Hide {comment.replies.length} replies
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default CommentCard;
