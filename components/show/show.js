import Card from "./card";
import { memo, useState, useContext, useEffect, useRef } from "react";
import houseData from "../data.json";
import { DataContext } from "../../pages/_app";
import Container from "../../components/Container";

const Show = () => {
  const filter = useContext(DataContext);
  const [showMore, setShowMore] = useState(false);
  const [showData, setShowData] = useState([]);
  let prShowMore = useRef(false);

  const getStatus = (val) => {
    if (val == 0) return "for-rent";
    if (val == 1) return "for-sale";
    if (val == 2) return "reserved";
  };

  const includeKey = (key, title, location) => {
    let text = (title + " " + location).toLowerCase();
    let keyword = key.toLowerCase();
    return text.includes(keyword);
  };

  const getOrderBy = (val) => {
    if (val == 0) return "price";
    if (val == 1) return "size";
    if (val == 2) return "beds";
    if (val == 3) return "baths";
    if (val == 4) return "default";
  };

  useEffect(() => {
    let filtedData = [];

    for (let i = 0; i < houseData.length; i++) {
      if (
        getStatus(filter.filter.status) == houseData[i].status &&
        includeKey(
          filter.filter.keyword,
          houseData[i].title,
          houseData[i].adress
        ) &&
        filter.filter.baths < houseData[i].baths &&
        filter.filter.beds < houseData[i].beds &&
        (filter.filter.type == houseData[i].type) |
          (filter.filter.type == "default") &&
        filter.filter.price[0] < houseData[i].price &&
        filter.filter.price[1] > houseData[i].price &&
        filter.filter.size[0] < houseData[i].size &&
        filter.filter.size[1] > houseData[i].size
      ) {
        filtedData.push(i);
      }
    }

    let orderBy = getOrderBy(filter.filter.orderBy);

    if (orderBy != "default") {
      filtedData.sort((a, b) => houseData[a][orderBy] - houseData[b][orderBy]);
    }

    if (showMore) {
      setShowData(filtedData);
    } else {
      setShowData(filtedData.slice(0, 6));
    }
  }, [filter, showMore]);

  return (
    <Container className={"mt-12"}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {showData.map((val, key) => (
          <div
            onClick={() => {
              filter.setFilter({ ...filter.filter, selected: val });
            }}
            key={key}
          >
            <Card data={houseData[val]} />
          </div>
        ))}
      </div>
      <div className="w-full justify-center flex mt-12">
        <button
          className="bg-blue text-white w-[150px] h-[50px] rounded-full"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </Container>
  );
};

export default memo(Show);
