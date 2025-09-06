import Container from "../Layouts/Container"
import Flex from "../Layouts/Flex"
import Pet from "../../assets/Pet.png"
import The from "../../assets/the.png"
import Brac from "../../assets/brac.png"
import Bio from "../../assets/bio.png"
const Biosool = () => {
  return (
    <div className="py-[117px]">
      <Container>
        <Flex className="gap-[26px] itmes-center">
          <img src={Pet} alt="" />
          <img src={The} alt="" />
          <img src={Brac} alt="" />
          <img src={Bio} alt="" />
        </Flex>
      </Container>
    </div>
  )
}

export default Biosool