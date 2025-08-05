import MarqueeItem from "./MarqueeItem";
import image1 from "../assets/images/img1.png";
import image2 from "../assets/images/img2.png";
import image3 from "../assets/images/img3.png";
import image4 from "../assets/images/img4.png";
import image5 from "../assets/images/img5.png";
const Marquee = () => {
  //upper images
  const upperMarquee = [
    image1,
    image3,
    image2,
    image4,
    image1,
    image2,
    image5,
    image3,
    image2,
    image4,
  ];
  //lower images
  const lowerMarquee = [
    image5,
    image4,
    image3,
    image2,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
  ];

  return (
    //control speed animations
    <div className="container mx-auto">
      <MarqueeItem images={upperMarquee} from={0} to={"-100%"} /> 
      <MarqueeItem images={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
