import { memo } from "react";

const ProSell = () => {
  return (
    <div className="p-8 bg-blue text-white rounded-[5px]">
      <div className="text-5xl text-white font-bold  leading-5xl">
        Want to Sell
        <br /> Property?
      </div>
      <div className="mt-8">
        Let us create a tailored strategic marketing plan and keep track of the
        selling process.
      </div>
      <button className="w-[135px] h-[50px] text-white bg-green-500 rounded-full mt-8">
        Contact Us
      </button>
    </div>
  );
};

export default memo(ProSell);
