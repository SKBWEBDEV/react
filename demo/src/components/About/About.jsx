import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Button from "../Layouts/button";

const About = () => {
  return (
    <div className="bg-[#F0F0F0] py-[136px]">
      <Container>
        <Flex>
          <div className="bg-[#F40404] w-[413px] h-[361px] text-white font-popins font-bold text-[36px]">
            <h4 className="w-[262px] text-center py-[100px] ml-[74px]">
              Learn more about our company
            </h4>
          </div>

          <div className=" relative bg-[url('./assets/eight.png')] py-[132px] px-[282px] bg-no-repeat bg-cover ">
            <Button>
              LEARN MORE
            </Button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
