"use client";
import { createContext, JSX, useContext, useState } from "react";

interface IWebContextProps {
  isOpenPopup: boolean;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;

  isOpenImagePopup: boolean;
  setIsOpenImagePopup: React.Dispatch<React.SetStateAction<boolean>>;

  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;

  activeImageIndex: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  roomName: string;
  setRoomName: React.Dispatch<React.SetStateAction<string>>;

  popUpPrData: {
    logo: string;
    src: string;
    title: string;
    description: string;
  };

  setPopUpPrData: React.Dispatch<
    React.SetStateAction<{
      logo: string;
      src: string;
      title: string;
      description: string;
    }>
  >;
  isPrPopUpOPen: boolean;
  setIsPrPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;

  openImagePopup: (imgs: string[], index?: number, roomName?: string) => void;

  isAminityPopupOpen: boolean;
  setIsAminityPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  popUpAminityData: {
    icon?: JSX.Element | string;
    name: string;
  }[];
  setPopUPAminityData: React.Dispatch<
    React.SetStateAction<
      {
        icon?: JSX.Element | string;
        name: string;
      }[]
    >
  >;
}

const WebContext = createContext<IWebContextProps | undefined>(undefined);

export const WebProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [isPrPopUpOPen, setIsPrPopUpOpen] = useState(false);
  const [isAminityPopupOpen, setIsAminityPopupOpen] = useState(false);
  const [popUpAminityData, setPopUPAminityData] = useState<
    { icon?: JSX.Element | string; name: string }[]
  >([]);
  const [popUpPrData, setPopUpPrData] = useState({
    logo: "",
    src: "",
    title: "",
    description: "",
  });

  const openImagePopup = (
    imgs: string[],
    index: number = 0,
    roomName?: string
  ) => {
    setImages(imgs);
    setActiveImageIndex(index);
    if (roomName) setRoomName(roomName);
    setIsOpenImagePopup(true);
  };

  // pr Data handler

  return (
    <WebContext.Provider
      value={{
        isAminityPopupOpen,
        setIsAminityPopupOpen,
        popUpAminityData,
        setPopUPAminityData,
        isPrPopUpOPen,
        setIsPrPopUpOpen,
        popUpPrData,
        setPopUpPrData,
        isOpenPopup,
        setIsOpenPopup,
        isMobile,
        setIsMobile,
        images,
        setImages,
        activeImageIndex,
        setActiveImageIndex,
        isOpenImagePopup,
        setIsOpenImagePopup,
        openImagePopup,
        roomName,
        setRoomName,
      }}
    >
      {children}
    </WebContext.Provider>
  );
};

// ✅ Custom hook (recommended)
export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context)
    throw new Error("useWebContext must be used within WebProvider");
  return context;
};
