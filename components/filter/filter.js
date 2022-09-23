import SelectFilter from "./selectfilter";
import Slider from "./slider";
import { memo, useState } from "react";
import slider from "./slider";
import Container from "../../components/Container";

const Filter = () => {
  const [selectFilterData, setSelectFilterData] = useState([
    {
      selectName: "Baths",
      options: [
        "Above 1 Baths",
        "Above 2 Baths",
        "Above 3 Baths",
        "Above 4 Baths",
      ],
      key: "baths",
    },
    {
      selectName: "Beds",
      options: [
        "Above 1 Beds",
        "Above 2 Beds",
        "Above 3 Beds",
        "Above 4 Beds",
        "Above 5 Beds",
        "Above 6 Beds",
        "Above 7 Beds",
      ],
      key: "beds",
    },
    {
      selectName: "Types of estate",
      options: ["Apartment", "House"],
      key: "type",
    },
    {
      selectName: "Order by",
      options: [
        "Order by Price",
        "Order by Size",
        "Order by Beds",
        "Order by Baths",
      ],
      key: "orderBy",
    },
  ]);

  const [slider, setSlider] = useState([
    {
      sliderName: "Price range",
      startEnd: [150000, 1000000],
      limit: [50000, 1500000],
      step: 1000,
      key: "price",
    },
    {
      sliderName: "Square footage",
      startEnd: [400, 1500],
      limit: [100, 2000],
      step: 10,
      key: "size",
    },
  ]);

  return (
    <Container className={"py-[65px]"}>
      <div className="text-3xl font-bold">Filters</div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4 mt-4">
        {selectFilterData.map((val, key) => (
          <SelectFilter data={val} key={key} />
        ))}
      </div>

      <div className="mt-4 grid md:grid-cols-2 md:gap-8 gap-16">
        {slider.map((val, key) => (
          <Slider data={val} key={key} />
        ))}
      </div>
    </Container>
  );
};

export default memo(Filter);
