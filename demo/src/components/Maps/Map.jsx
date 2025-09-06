import Container from "../Layouts/Container"

const Map = () => {
  return (
    <div>
      <div className="bg-[url(./assets/maps.png)] py-[225px]"></div>
      
        <div className="bg-[#F40404] py-[45px]">
          <Container>
        <div className="flex items-center gap-[80px]">
          <h3 className="font-bold font-popins text-[36px] text-white">Want to join as member branch in your area?</h3>
        <button className="border-2 border-solid border-white text-white py-[14px] px-[32px]"><a href="">CONTACT</a></button>
        </div>
        </Container>
      </div>
    </div>
  )
}

export default Map