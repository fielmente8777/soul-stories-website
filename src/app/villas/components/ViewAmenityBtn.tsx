"use client";
import { useWebContext } from "@/context-api/WebContext";
import { JSX } from "react";

interface Props {
  amenitiesData: {
    icon?: JSX.Element | string;
    name: string;
  }[];
}
const ViewAmenityBtn: React.FC<Props> = ({ amenitiesData }) => {
  const { setIsAminityPopupOpen, setPopUPAminityData } = useWebContext();
  return (
    <button
      className="w-fit underline underline-offset-4 uppercase"
      onClick={() => {
        setIsAminityPopupOpen(true);
        setPopUPAminityData(amenitiesData);
      }}
    >
      View Amenities
    </button>
  );
};

export default ViewAmenityBtn;
