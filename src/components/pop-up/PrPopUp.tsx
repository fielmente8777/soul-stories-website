"use client";

import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { MdClose } from "react-icons/md";

const PrPopUp = () => {
  const { popUpPrData, isPrPopUpOPen, setIsPrPopUpOpen } = useWebContext();
  return (
    <section
      className={`fixed inset-0 flex items-center justify-center bg-primary/40 backdrop-blur-md transition-all ease-in-out duration-300 z-50 ${isPrPopUpOPen ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95"}`}
      onClick={(e) => e.target === e.currentTarget && setIsPrPopUpOpen(false)}
    >
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl bg-white px-8 py-14 relative">
        <button
          className="absolute top-4 right-4 rounded-full bg-secondary p-2 text-white"
          onClick={() => setIsPrPopUpOpen(false)}
        >
          <MdClose />
        </button>
        <div className="relative w-full aspect-[4/4]">
          <Image
            src={popUpPrData.src}
            alt={popUpPrData.title}
            className="object-cover"
            fill
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl font-aboreto font-bold mb-4">
            {popUpPrData.title}
          </h2>
          <p className="text-lg mb-4">{popUpPrData.description}</p>
        </div>
      </div>
    </section>
  );
};

export default PrPopUp;
