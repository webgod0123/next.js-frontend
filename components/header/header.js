import NavBar from "./navbar";
import Title from "./title";
import Search from "./search";
import { memo } from "react";
import Container from "../../components/Container";

const Header = () => {
  return (
    <div className="h-[485px]">
      <div
        style={{ backgroundImage: "url(../assets/images/background.png)" }}
        className="h-full bg-[length:100%_100%]"
      >
        <div className="relative h-full">
          <NavBar />
          <div className="absolute md:bottom-[15%] bottom-[10%] w-full">
            <Container>
              <Title />
              <Search />
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
