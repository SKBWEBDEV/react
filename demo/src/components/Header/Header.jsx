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
        <div className="flex py-[16px] justify-between">
          <div className="flex space-x-[50px]">
            <div className="flex itmes-center items-center">
              <IoMailUnread />
              <p>mail@yourcompany.com</p>
            </div>

            <div className=" relative content-[''] after:absolute after:top-[5px] after:left-[-20px] after:w-[3px] after:h-[16px] after:bg-[#5C6A92] flex itmes-center  items-center">
              <FaPhoneVolume />
              <p>+896 120 5889 (Toll free)</p>
            </div>
          </div>

          <div>
            <div className="flex space-x-[20px] justify-between">
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
