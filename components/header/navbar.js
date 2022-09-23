import { memo, useState } from "react";
import Link from "next/link";
import Container from "../Container";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const menus = [
    { menu: "Home Page", link: "" },
    { menu: "About Us", link: "" },
    { menu: "For Rent", link: "" },
    { menu: "For Sale", link: "" },
    { menu: "Our Agents", link: "" },
    { menu: "Contact Us", link: "" },
  ];

  return (
    <Container className="flex items-center flex-wrap w-full justify-between relative">
      <div className="flex items-center py-[40px]">
        <div className="mr-4">
          <img src={"../assets/images/Object.png"} className="w-[135px]" />
        </div>
        <div
          className={`block absolute lg:relative w-full top-[100%] left-0 shadow-lg lg:py-0 lg:shadow-none items-center bg-blue z-[999] lg:flex menus lg:max-h-full overflow-hidden lg:overflow-visible duration-300 ${
            show ? "max-h-[240px]" : "max-h-0"
          }`}
        >
          {menus.map((menu, index) => (
            <Link href={menu.link} key={index}>
              <div className="text-white px-4 py-2 lg:py-0">{menu.menu}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center py-[40px]">
        <div className="mr-4">
          <img src={"../assets/icons/Compare.png"} />
        </div>
        <div className="mr-4">
          <img src={"../assets/icons/Loved.png"} />
        </div>
        <div className="lg:hidden flex" onClick={() => setShow(!show)}>
          <div className="menu-icon">
            <span className="navicon"></span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default memo(NavBar);
