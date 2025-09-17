import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import Button from "../Layouts/button";

const About = () => {
  return (
    <div className="bg-[#F0F0F0] py-[50px] md:py-[136px]">
      <Container>
        <div className="md:flex">
          <div className="bg-[#F40404] w-[355px] md:w-[413px] md:h-[361px] text-white font-popins font-bold text-[36px]">
            <h4 className="md:w-[262px] text-center py-[20px] md:py-[100px] md:ml-[74px]">
              Learn more about our company
            </h4>
          </div>

          <div className=" relative bg-[url('./assets/eight.png')] py-[50px] px-[90px] md:py-[132px] md:px-[282px] w-[355px] md:w-[726px] bg-no-repeat bg-cover ">
            <Button className='hover:bg-[#7FFF00] hover:text-black transition duration-400'>
              LEARN MORE
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
