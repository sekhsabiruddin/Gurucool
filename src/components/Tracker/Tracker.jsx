import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoCheckmarkSharp } from "react-icons/io5";
const Tracker = () => {
  const tracker = useSelector((state) => state.data.tracker);
  console.log("Tracker is", tracker);

  return (
    <div>
      <div className="flex justify-between items-center  mb-4">
        {/* step-1 start here  */}
        <div className="min-w-[45%]">
          <div className="w-[100%] flex justify-start items-center">
            <div className={`step ${tracker >= 1 ? "active" : ""}`}>
              <span className="text">
                {tracker >= 2 ? <IoCheckmarkSharp /> : 1}
              </span>
            </div>
            <span
              className={`w-[100%] progress ${tracker >= 2 ? "active" : ""}`}
            ></span>
          </div>
          <div>
            <span className="text-[0.8rem]">Personal Info</span>
          </div>
        </div>
        {/* step-1 end here  */}
        {/* step-2  start here */}
        <div className="min-w-[45%]">
          <div className="w-[100%] flex justify-start items-center">
            <div className={`step ${tracker >= 2 ? "active" : ""}`}>
              <span>{tracker >= 3 ? <IoCheckmarkSharp /> : 2}</span>
            </div>
            <span
              className={`w-[100%] progress ${tracker >= 3 ? "active" : ""}`}
            ></span>
          </div>
          <div>
            <span className="text-[0.8rem]">Address Info</span>
          </div>
        </div>
        {/* step-2  end here */}
        <div>
          <div className="flex justify-start items-center">
            <div className={`step ${tracker >= 3 ? "active" : ""}`}>
              <span>3</span>
            </div>
          </div>
          <div>
            <span className="text-[0.8rem]">Confirm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
