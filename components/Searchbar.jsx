import React from "react";

const Searchbar = () => {
  return (
    <div className="relative">
<input type="text" 
               class="pl-10 pr-4 py-2 border rounded-lg w-full" 
               placeholder="Search for tag" /> 
        <div class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"> 
            <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.58341 1.29169C4.55634 1.29169 1.29175 4.55628 1.29175 8.58335C1.29175 12.6104 4.55634 15.875 8.58341 15.875C12.6105 15.875 15.8751 12.6104 15.8751 8.58335C15.8751 4.55628 12.6105 1.29169 8.58341 1.29169ZM0.041748 8.58335C0.041748 3.86592 3.86598 0.041687 8.58341 0.041687C13.3008 0.041687 17.1251 3.86592 17.1251 8.58335C17.1251 10.7171 16.3427 12.6681 15.0491 14.1652L17.7754 16.8914C18.0194 17.1355 18.0194 17.5312 17.7754 17.7753C17.5313 18.0194 17.1356 18.0194 16.8915 17.7753L14.1653 15.0491C12.6682 16.3426 10.7172 17.125 8.58341 17.125C3.86598 17.125 0.041748 13.3008 0.041748 8.58335Z"
            fill="#1C274C"
          />
        </svg>
        </div> 
      {/* <div
        class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.58341 1.29169C4.55634 1.29169 1.29175 4.55628 1.29175 8.58335C1.29175 12.6104 4.55634 15.875 8.58341 15.875C12.6105 15.875 15.8751 12.6104 15.8751 8.58335C15.8751 4.55628 12.6105 1.29169 8.58341 1.29169ZM0.041748 8.58335C0.041748 3.86592 3.86598 0.041687 8.58341 0.041687C13.3008 0.041687 17.1251 3.86592 17.1251 8.58335C17.1251 10.7171 16.3427 12.6681 15.0491 14.1652L17.7754 16.8914C18.0194 17.1355 18.0194 17.5312 17.7754 17.7753C17.5313 18.0194 17.1356 18.0194 16.8915 17.7753L14.1653 15.0491C12.6682 16.3426 10.7172 17.125 8.58341 17.125C3.86598 17.125 0.041748 13.3008 0.041748 8.58335Z"
            fill="#1C274C"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for tag"
        className="w-full p-2 border rounded "
      /> */}
    </div>
  );
};

export default Searchbar;
