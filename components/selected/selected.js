import { memo } from "react";
import houseData from "../data.json";
import Image from "next/image";
import Container from "../../components/Container";
import { Info } from "../show/card";

const Selected = (props) => {
  const getStatus = (val) => {
    if (val == "for-rent") return "FOR RENT";
    if (val == "for-sale") return "FOR SALE";
    if (val == "reserved") return "RESERVED";
  };

  return (
    <div className="w-full h-[700px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        src={houseData[props.selectId].image}
        className="z-[-1]"
      />
      <Container
        className={
          "flex items-center h-full grid md:grid-cols-2 md:gap-8 gap-4"
        }
      >
        <div className="bg-white p-8 rounded-[5px]">
          <div className="bg-status inline-flex text-white px-2 rounded-[5px] mb-4">
            {getStatus(houseData[props.selectId].status)}
          </div>
          <Info
            title={houseData[props.selectId].title}
            price={houseData[props.selectId].price}
            address={houseData[props.selectId].adress}
            beds={houseData[props.selectId].beds}
            baths={houseData[props.selectId].baths}
            size={houseData[props.selectId].size}
          />
        </div>
      </Container>
    </div>
  );
};

export default memo(Selected);
