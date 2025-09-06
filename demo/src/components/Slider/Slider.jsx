import Flex from "../Layouts/Flex"
import One from "../../assets/One.png"
import Two from "../../assets/Two.png"
import Three from "../../assets/Three.png"
import Four from "../../assets/Four.png"

const Slider = () => {
  return (
    <div>
      <Flex className=" justify-between">
        <img className="w-[24%] gap-[30px]" src={One} alt="" />
        <img className="w-[24%] gap-[30px]" src={Two} alt="" />
        <img className="w-[24%] gap-[30px]" src={Three} alt="" />
        <img className="w-[24%] gap-[30px]" src={Four} alt="" />
      </Flex>
    </div>
  )
}

export default Slider