import React from "react";
import { contactDetails } from "../data";
import Block from "../Block";

const Contact = () => {
  const cDetails = contactDetails;
  return (
    <>
      <div className=" grid grid-cols-1">
        <Block
          title="CONTACT"
          img=""
          content={contactDetails}
          color="green-500"
        />
      </div>
    </>
  );
};

export default Contact;
