import React from "react";
import LoginSecond from "../components/LoginSecond/LoginSecond";
import Login from "../components/Login/Login";
import { useSelector } from "react-redux";
import FormSummary from "../components/FormSummary/FormSummary";
import Tracker from "../components/Tracker/Tracker";
const FromPage = () => {
  const tracker = useSelector((state) => state.data.tracker);

  return (
    <div className="w-full h-[100vh] flex justify-center">
      <div className="w-[95%] lg:max-w-[50%]  mt-5 ">
        <div className="bg-white boxshadow  px-4 py-5 md:px-8 md:py-10">
          <Tracker />
          {tracker === 1 && <Login />}
          {tracker === 2 && <LoginSecond />}
          {tracker === 3 && <FormSummary />}
        </div>
      </div>
    </div>
  );
};

export default FromPage;
