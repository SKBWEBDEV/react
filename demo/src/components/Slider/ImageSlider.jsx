
import One from "../../assets/One.png"
import Two from "../../assets/Two.png"
import Three from "../../assets/Three.png"
import Four from "../../assets/Four.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = () => {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div>
 

         <div className="slider-container">
      <Slider {...settings}>
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={One} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Two} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Three} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Four} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={One} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Two} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Three} alt="" />
        <img className="w-[24%] px-1 md:px-3 h-[180px] md:h-[426px]" src={Four} alt="" />
      </Slider>
    </div>
    </div>
  )
}

export default ImageSlider




