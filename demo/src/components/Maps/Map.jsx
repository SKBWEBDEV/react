import Container from "../Layouts/Container"

const Map = () => {
  return (
    <div>
      <div className="bg-[url(./assets/maps.png)] py-[80px] md:py-[225px]"></div>
      
        <div className="bg-[#F40404] py-[20px] md:py-[45px]">
          <Container>
        <div className="md:flex md:items-center md:gap-[80px] font-poppins ">
          <h3 className="font-bold font-popins text-[25px] w-[300px] md:w-full md:text-[36px] text-white">Want to join as member branch in your area?</h3>
        <button className="border-2 border-solid border-white text-white py-[14px] px-[32px] mt-[15px] md:mt-0"><a href="">CONTACT</a></button>
        </div>
        </Container>
      </div>
    </div>
  )
}

export default Map