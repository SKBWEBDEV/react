import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";

const Country = () => {
  return (
    <Container>
      <div className="md:flex justify-between items-center py-[80px] font-poppins">
        <div className="font-popins font-bold w-[289px] text-[25px] md:text-[48px]">
          <h2>The biggest supplier on the country</h2>
        </div>
        <div className="font-popins font-medium w-[350px] mt-5 md:mt-0 md:w-[651px]"><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p></div>
      </div>
    </Container>
  );
};

export default Country;
