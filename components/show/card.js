import Image from "next/image";
import { memo } from "react";

export const Info = ({ title, price, address, beds, baths, size }) => {
  return (
    <>
      <div className="text-xl">{title}</div>
      <div className="text-blue text-xl">${Number(price).toLocaleString()}</div>
      <div className="mt-2">{address}</div>
      <div className="flex items-center flex-wrap">
        <div className="flex items-center mr-4 mt-2">
          <Image
            src={"/assets/icons/bed-icon.svg"}
            width="20px"
            height={"20px"}
          />
          <div className="ml-4">{beds} Beds</div>
        </div>
        <div className="flex items-center mr-4 mt-2">
          <Image
            src={"/assets/icons/bath-icon.svg"}
            width="20px"
            height={"20px"}
          />
          <div className="ml-4">{baths} Baths</div>
        </div>
        <div className="flex items-center mt-2">
          <Image
            src={"/assets/icons/size-icon.svg"}
            width="20px"
            height={"20px"}
          />
          <div className="ml-4">{size} SqFt</div>
        </div>
      </div>
    </>
  );
};

const Card = (props) => {
  return (
    <div className="w-full">
      <div className="w-full h-[250px] relative pointer">
        <Image src={props.data.image} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <Info
          title={props.data.title}
          price={props.data.price}
          address={props.data.adress}
          beds={props.data.beds}
          baths={props.data.baths}
          size={props.data.size}
        />
      </div>
    </div>
  );
};

export default memo(Card);
