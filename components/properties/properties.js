import { memo } from "react";
import ProInfo from "./proinfo";
import ProSell from "./prosell";
import Container from "../../components/Container";

const Properties = () => {
  return (
    <Container className={"my-16"}>
      <div className="grid md:grid-cols-2 md:gap-8 gap-4">
        <ProInfo />
        <ProSell />
      </div>
    </Container>
  );
};

export default memo(Properties);
