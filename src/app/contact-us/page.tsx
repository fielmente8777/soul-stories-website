import React from "react";
import ContactData from "./components/ContactData";
import { contactData } from "./contactData";

const page = () => {
  return (
    <div>
      <ContactData {...contactData.bannerData} />
    </div>
  );
};

export default page;
