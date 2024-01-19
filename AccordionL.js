// LeftContent.js
import React from "react";

const LeftContent = () => {
  return (
    <div className="justify-center h-screen w-full overflow-hidden bg-white">
      <div className="justify-center h-full overflow-hidden mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="justify-center mt-10 md:w-[100%] md:mr-9">
            <h2 className="text-2xl md:text-5xl mt-44 mb-2 tracking-tight font-light-gray mb-4 text-center md:text-left">
              Frequently Asked Question
            </h2>
            <p className="text-neutral-700 text-lg md:text-xl text-center md:text-left">
              A frequently asked question (FAQ) is a concise list of common inquiries and their answers, typically found on websites or documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
