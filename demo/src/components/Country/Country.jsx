import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";

const Country = () => {
  return (
    <Container>
      <Flex className="justify-between items-center py-[80px]">
        <div className="font-popins font-bold w-[289px] text-[48px]">
          <h2>The biggest supplier on the country</h2>
        </div>
        <div className="font-popins font-medium w-[651px]"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p></div>
      </Flex>
    </Container>
  );
};

export default Country;
