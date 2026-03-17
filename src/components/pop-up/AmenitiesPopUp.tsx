"use client";
import { useWebContext } from "@/context-api/WebContext";
import { useEffect } from "react";
import { MdClose } from "react-icons/md";

const AmenitiesPopUp = () => {
  const { popUpAminityData, isAminityPopupOpen, setIsAminityPopupOpen } =
    useWebContext();

    useEffect(() => {
      if (isAminityPopupOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
  
      return () => {
        document.body.style.overflow = "unset";
      };
    })
  return (
    <section
      className={`fixed inset-0 flex items-center justify-center bg-primary/40 backdrop-blur-md transition-all ease-in-out duration-300 z-50 ${isAminityPopupOpen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95"}`}
      onClick={(e) =>
        e.target === e.currentTarget && setIsAminityPopupOpen(false)
      }
    >
      <div className=" max-w-3xl w-full md:rounded-2xl bg-white md:px-8 px-4 py-14 relative ">
        <button
          className="absolute top-4 right-4 rounded-full bg-secondary p-2 text-white "
          onClick={() => setIsAminityPopupOpen(false)}
        >
          <MdClose />
        </button>
        <h2 className="text-3xl font-aboreto font-bold">Premium amenities</h2>
        <div className="grid md:grid-cols-2 md:gap-4 gap-2 md:mt-8 mt-4 max-md:overflow-y-auto max-md:h-[65dvh] max-md:overflow-x-hidden">
          {popUpAminityData?.map((item, index) => (
            <div key={index} className="flex  gap-2">
              {/* {item.icon && <span className="text-2xl text-primary w-4">{item.icon}</span>} */}
              <span>
                <TickIcon />
              </span>
              <p className="text-base!">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesPopUp;

export const TickIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM10.09 16.72L6.29 12.91L7.77 11.43L10.09 13.76L15.94 7.89L17.42 9.37L10.09 16.72Z"
      fill="#044444"
    />
  </svg>
);
