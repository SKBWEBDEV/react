import Container from "../Layouts/Container"
import logo from "../../assets/logo.png"
// import Flex from "../Layouts/Flex"

const Navber = () => {
  return (
    <div className="bg-[#F40404] py-[30px] items-center text-white">
      <Container>
        <div className="flex justify-between">
          <div>
            <img src={logo} alt="" />
          </div>

          <div>
            {/* <Flex> */}
              <ul className="flex items-center space-x-[47px] text-white text-[16px] font-semibold font-popins">
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Gallery</a></li>
              <li><a href="">Blog</a></li>
            

              <li className="border py-[14px] px-[32px]"><a href="">CONTACT</a></li>
              </ul>
              {/* </Flex> */}
            
          </div>

        </div>

      </Container>
    </div>
  )
}

export default Navber
