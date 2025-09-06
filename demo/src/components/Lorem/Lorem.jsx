import Container from "../Layouts/Container";
import Flex from "../Layouts/Flex";
import { FaGreaterThan } from "react-icons/fa6";

const Lorem = () => {
  return (
    <div className="bg-[#F0F0F0] py-[130px]">
      <Container>
        <Flex className="justify-between">
          <div className="z-[1] relative bg-[url(./assets/unsplash.png)] bg-no-repeat bg-cover py-[75px] px-[44px]">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[52px] text-white font-popins">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="z-[1] relative bg-[url(./assets/uns.png)] bg-no-repeat bg-cover py-[75px] px-[44px]">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[52px] text-white font-popins">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

          <div className="z-[1] relative bg-[url(./assets/unspl.png)] bg-no-repeat bg-cover py-[75px] px-[44px] ">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[52px] text-white font-popins">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
        </Flex>
        <p className="flex items-center font-bold font-popins justify-end gap-[2px] mt-[29px] "><a href="">MORE FROM THE BLLOG</a><FaGreaterThan /></p>
        
      </Container>
    </div>
  );
};

export default Lorem;
