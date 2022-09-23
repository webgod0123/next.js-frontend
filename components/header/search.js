import Image from "next/image";
import { useState, useContext } from "react";
import { memo } from "react";
import { DataContext } from "../../pages/_app";

const Search = () => {
  const [options, setOptions] = useState(["For Rent", "For Sale", "Reserved"]);

  const filter = useContext(DataContext);

  return (
    <div className="mt-10 md:bg-white md:flex md:w-3/5 w-4/5 md:h-[50px] md:rounded-[10px] overflow-hidden">
      <select
        className="outline-none md:w-1/3 px-4 w-full h-[50px] md:h-auto md:rounded-0 rounded-[10px]"
        onChange={(e) => {
          filter.setFilter({ ...filter.filter, status: e.target.value });
        }}
      >
        {options.map((val, key) => (
          <option value={key} key={key}>
            {val}
          </option>
        ))}
      </select>
      <div className="w-full flex items-center relative md:px-8 px-4 bg-white md:bg-transparent h-[50px] md:h-auto md:rounded-0 rounded-[10px] md:mt-0 mt-4">
        <Image src={"/assets/icons/search.png"} width="30px" height={"30px"} />
        <input
          type="text"
          className="w-full outline-none px-2"
          placeholder="Search for properties or keywords.."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              filter.setFilter({
                ...filter.filter,
                keyword: e.target.value,
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default memo(Search);
