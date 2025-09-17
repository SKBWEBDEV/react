import Flex from "../Layouts/Flex";
const Our = () => {
  return (
    <div>
      <div className=" md:flex md:mt-[28px] md:items-center md:font-poppins mt-16">
        <div className="md:pl-[390px] md:w-[50%]">
          <h1 className="font-bold font-popins text-center md:text-left text-[30px] md:text-[64px]">Our Services</h1>
          <p className="font-popins font-medium md:w-[405px] text-[16px] md:text-[18px] text-center md:text-left">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="z-[1] relative bg-[url('./assets/five.png')] md:py-[150px] md:w-[50%] bg-no-repeat bg-cover py-[30px] mt-[15px] md:mt-0">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[20px] md:text-[36px] text-center md:ml-[116px] md:text-left">Modern natural oil and gas refineries.</h1>
          <button className="bg-red-500 hover:bg-[#7FFF00] hover:text-black transition duration-400 ease-in-out py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>

        
      </div>
      
      <div className="md:flex">
         <div className="z-[1] relative bg-[url('./assets/six.png')] md:py-[150px] md:w-[50%] bg-no-repeat bg-cover py-[30px] mt-[15px] md:mt-0">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[20px] text-center md:text-left md:text-[36px] md:ml-[116px]">Supply of national industries.</h1>
          <button className="bg-red-500 hover:bg-[#7FFF00] hover:text-black transition duration-400 py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>

         <div className="z-[1] relative bg-[url('./assets/seven.png')]  md:py-[150px] md:w-[50%] bg-no-repeat bg-cover py-[30px] mt-[15px] md:mt-0">
          <div className=" z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
          <h1 className="text-white font-popins font-bold text-[20px] text-center md:text-left md:text-[36px] md:ml-[116px]">National fuel distribution and supply.</h1>
          <button className="bg-red-500 hover:bg-[#7FFF00] hover:text-black transition duration-400 py-[13px] px-[40px] text-white font-popins font-semibold ml-[116px] mt-[19px]">LEARN MORE</button>
        </div>
      </div>
    </div>
    
  );
};

export default Our;
