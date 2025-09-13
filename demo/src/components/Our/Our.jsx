import Flex from "../Layouts/Flex";
const Our = () => {
  return (
    <div>
      <Flex className="mt-[28px] items-center font-poppins">
        <div className="pl-[390px] w-[50%]">
          <h1 className="font-bold font-popins text-[64px]">Our Services</h1>
          <p className="font-popins font-medium w-[405px] text-[18px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="z-[1] relative bg-[url('./assets/five.png')] py-[150px] w-[50%] bg-no-repeat bg-cover ">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[36px] ml-[116px]">Modern natural oil and gas refineries.</h1>
          <button className="bg-red-500 py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>

        
      </Flex>
      
      <Flex>
         <div className="z-[1] relative bg-[url('./assets/six.png')] py-[150px] w-[50%] bg-no-repeat bg-cover ">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[36px] ml-[116px]">Supply of national industries.</h1>
          <button className="bg-red-500 py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>

         <div className="z-[1] relative bg-[url('./assets/seven.png')] py-[150px] w-[50%] bg-no-repeat bg-cover ">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[36px] ml-[116px]">National fuel distribution and supply.</h1>
          <button className="bg-red-500 py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>
      </Flex>
    </div>
    
  );
};

export default Our;
