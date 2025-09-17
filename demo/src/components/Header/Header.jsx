import Container from "../Layouts/Container";
import { IoMailUnread } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="text-white bg-[#282828] border-b-4 border-[#F40404] font-popins">
      <Container>
        <div className="md:flex py-[16px] justify-between">
          <div className="md:flex space-x-[50px]">
            <div className="flex items-center gap-2">
              <IoMailUnread />
              <p>mail@yourcompany.com</p>
            </div>

            <div className=" relative content-[''] after:absolute after:top-[5px] after:left-[-20px] after:w-[3px] after:h-[16px] after:bg-[#5C6A92] flex items-center gap-2 mt-2 md:mt-0">
              <FaPhoneVolume />
              <p>+896 120 5889 (Toll free)</p>
            </div>
          </div>

          <div>
            <div className="flex space-x-[20px] md:justify-between mt-2 md:mt-0">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagramSquare />
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
