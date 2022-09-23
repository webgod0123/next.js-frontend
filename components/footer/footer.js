import Image from "next/image";
import { memo } from "react";
import Container from "../../components/Container";

const Footer = () => {
  return (
    <Container className={"flex justify-center py-8"}>
      <Image
        src={"/assets/images/Logo (1).png"}
        width="160px"
        height={"42px"}
      />
    </Container>
  );
};

export default memo(Footer);
