import { useContext } from "react";
import { memo } from "react";
import { DataContext } from "../../pages/_app";

const SelectFilter = (props) => {
  const filter = useContext(DataContext);

  return (
    <>
      <div className=" border border-filter px-4 rounded-[10px] ">
        <select
          defaultValue={"default"}
          className=" outline-none h-[50px] w-full"
          onChange={(e) => {
            filter.setFilter({
              ...filter.filter,
              [props.data.key]: e.target.value,
            });
          }}
        >
          <option value="default" disabled={true} hidden={true}>
            {props.data.selectName}
          </option>
          {props.data.options.map((val, key) => (
            <option value={props.data.key === "type" ? val : key} key={key}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default memo(SelectFilter);
