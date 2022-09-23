import { memo, useContext } from "react";

const Title = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-white leading-5xl">
        Let us Guide You Home
      </div>
      <div className="text-white mt-4">Find the house of your dreams</div>
    </div>
  );
};

export default memo(Title);
