import Container from "../Layouts/Container"
import Flex  from "../Layouts/Flex"
import Okey from "../../assets/logoOne.png"
import { IoIosMailUnread } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import Item from "../../assets/carbon.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Cert from "../../assets/cert.png"
import CertOne from "../../assets/certOne.png"

const Footer = () => {
  return (
    <div className="bg-[#1F1F1F] text-white py-[50px] md:py-[160px] font-poppins">
      <Container>
        <div className= "md:flex  justify-between">
          <div>
            <img src={Okey} alt="" />
            <div className="flex items-center mt-[33px] gap-[7px] font-popins font-reguler md:text-[18px]">
              <IoIosMailUnread />
              <p>mail@yourcompany.com</p>
              </div>
              <div className="flex items-center mt-[15px] gap-[7px] font-popins font-reguler md:text-[18px]">
              <FaPhoneVolume />
              <p>+896 120 5889 (Toll free)</p>
              </div>
              <div className="flex items-center mt-[15px] gap-[7px] font-popins font-reguler md:text-[18px]">
              <img src={Item} alt="" />
              <p>101 Baker Street, New York, USA, 12345</p>
              </div>

              <div className="flex gap-[15px] mt-[34px]">
                <p className="bg-[#F40404] py-[7px] px-[7px]  rounded-full"><a href=""><FaFacebookF /></a></p>
                <p className="bg-[#F40404] py-[7px] px-[7px]  rounded-full"><a href=""><FaTwitter /></a></p>
                <p className="bg-[#F40404] py-[7px] px-[7px]  rounded-full"><a href=""><FaLinkedinIn /></a></p>
                <p className="bg-[#F40404] py-[7px] px-[7px]  rounded-full"><a href=""><FaInstagramSquare /></a></p>
              </div>
            
          </div>

{/* ------------------------------------------------------------------------------------------ */}

          <div className="mt-[20px] ">
            <h3 className="font-bold font-popins text-[30px] md:text-[20px]">Company</h3>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00]  text-[18px]">Home</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00]  text-[18px]">About</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00]  text-[18px]">Services</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00]  text-[18px]">Gallery</p>
          </div>

{/* ------------------------------------------------------------------------------------------ */}

          <div className="mt-[20px] ">
            <h3 className="font-bold font-popins text-[30px] md:text-[20px]">Others</h3>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00] text-[18px]">Home</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00] text-[18px]">Blog</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00] text-[18px]">Terms & Conditions</p>
            <p className="mt-[20px] font-popins hover:text-[#7FFF00] text-[18px]">Privacy Policy</p>
          </div>

{/* ------------------------------------------------------------------------------------------ */}

          <div className="mt-[20px] text-[20px]">
            <h3 className="font-bold font-popins text-[30px] md:text-[20px]">Certificate</h3>
          <div className="flex gap-[7px] mt-[21px]">
            <img src={Cert} alt="" />
            <img src={CertOne} alt="" />
          </div>
          </div>
          


        </div>
      </Container>
    </div>
  )
}

export default Footer