import Container from "../Layouts/Container"
import logo from "../../assets/logo.png"
import Flex from "../Layouts/Flex"

const Navber = () => {
  return (
    <div className="bg-[#F40404] py-[30px] items-center text-white font-poppins">
      <Container>
        <div className="md:flex justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div>
            
             <div className="">
              <ul className=" md:flex  items-center space-x-[47px] text-white text-[16px] font-semibold font-popins list-none">
              <li className="py-3 md:py-0"><a href="">Home</a></li>
              <li className="py-3 md:py-0"><a href="">About</a></li>
              <li className="py-3 md:py-0"><a href="">Services</a></li>
              <li className="py-3 md:py-0"><a href="">Gallery</a></li>
              <li className="py-3 md:py-0"><a href="">Blog</a></li>
              <li className="border py-2 px-4  md:py-[14px] md:px-[32px] w-fit "><a href="">CONTACT</a></li>
              </ul>
              </div>
            
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Navber
