import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

const Navigation = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleButton = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <section className="p-6 relative ">
        <div className="flex flex-row">
          {/* Hamburger icon */}
          {!isOpen && (
            <div
              className="flex justify-center items-start cursor-pointer"
              onClick={toggleButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}

          {/* Youtube icon */}
          <div
            className={`ml-3 md:ml-10 flex justify-center items-start ${
              !isOpen ? "ml-3" : "ml-3"
            }`}
          >
            {/* <img
              src="../assets/Youtubevideo_15047410.png"
              alt="youtube.png"
              className="object-contain "
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
            <p className="ml-3 text-red-900 font-bold">Youtube</p>
          </div>

          {/* search bar */}
          <div className="ml-10 flex justify-center items-center flex-grow">
            <SearchBar />
          </div>

          <div className="flex justify-center items-end cursor-pointer">
            {/* Notification icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <div className="ml-3 md:ml-10">
              {/* profile icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {isOpen ? (
          <div>
            <SideBar />
          </div>
        ) : (
          <div>
            <p></p>
          </div>
        )}
      </section>
    </>
  );
};

export default Navigation;
