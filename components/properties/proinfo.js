import { memo } from "react";

const ProInfo = () => {
  return (
    <div className="bg-slate-200 p-8 rounded-[5px]">
      <div className="text-5xl text-blue-600 leading-5xl">Aktas Properties</div>
      <div className="text-5xl text-blue-600 font-bold leading-5xl">
        Information
      </div>
      <div className="mt-8">
        <div>1234 Hacker St, San Francisco</div>
        <div className="mt-2">(123) 456-7890</div>
        <div className="mt-2">Mon-Sun: 8:00am - 6:00pm</div>
      </div>
    </div>
  );
};

export default memo(ProInfo);
