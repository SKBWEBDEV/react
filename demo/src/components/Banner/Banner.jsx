
import Container from "../Layouts/Container"

const Banner = () => {
  return (
    <div>
      <div className="z-[1] relative bg-[url(./assets/banner.png)] py-[257px] bg-no-repeat bg-cover font-poppins">
      <div className="z-[-1] absolute h-full w-full top-0 left-0 bg-black/50"></div>
        
            <Container>
              <h1 className="text-white font-popins font-[700] text-[64px] w-[842px] ">We exist since 1975 on the oil and gas industry.</h1>
              <button className="py-[13px] px-[40px] bg-[#F40404] text-white font-semibold mt-[31px]">LEARN MORE</button>
            </Container>
            
      </div>
    </div>
  )
}

export default Banner