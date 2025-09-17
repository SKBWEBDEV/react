import Container from "../Layouts/Container"
import Flex from "../Layouts/Flex"
import Pet from "../../assets/Pet.png"
import The from "../../assets/the.png"
import Brac from "../../assets/brac.png"
import Bio from "../../assets/bio.png"
const Biosool = () => {
  return (
    <div className="py-14 md:py-[117px]">
      <Container>
        <div className=" md:flex gap-[26px] ">
          <img src={Pet} alt="" />
          <img src={The} alt="" />
          <img src={Brac} alt="" />
          <img src={Bio} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Biosool