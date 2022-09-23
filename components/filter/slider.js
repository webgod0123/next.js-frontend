import { useEffect, useRef, useContext } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { memo } from "react";
import { DataContext } from "../../pages/_app";
import wNumb from "wNumb";

const SliderPrice = (props) => {
  let slider = useRef();
  const filter = useContext(DataContext);

  const round = (val) => Math.round(val);

  useEffect(() => {
    if (slider.current && slider.current.noUiSlider) {
      slider.current.noUiSlider.destroy();
    }
    noUiSlider.create(slider.current, {
      range: {
        min: props.data.limit[0],
        max: props.data.limit[1],
      },
      start: [props.data.startEnd[0], props.data.startEnd[1]],
      connect: [false, true, false],
      tooltips:
        props.data.key == "price"
          ? [
              wNumb({
                decimal: 0,
                thousand: ",",
                prefix: "$",
                //edit: (val) => round(val),
              }),
              wNumb({
                decimal: 0,
                thousand: ",",
                prefix: "$",
                //edit: (val) => round(val),
              }),
            ]
          : [
              wNumb({
                decimal: 0,
                edit: (val) => round(val),
              }),
              wNumb({
                decimal: 0,
                edit: (val) => round(val),
              }),
            ],
      step: props.data.step,
    });
  }, []);
  useEffect(() => {
    slider.current.noUiSlider.on("end", (val, handle) => {
      filter.setFilter({ ...filter.filter, [props.data.key]: val });
    });
  }, [filter]);
  return (
    <div>
      <div className="text-2xl font-bold">{props.data.sliderName}</div>
      <div ref={slider} className="mt-8"></div>
    </div>
  );
};

export default memo(SliderPrice);
