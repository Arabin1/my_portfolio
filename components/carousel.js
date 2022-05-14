import { Carousel, Image } from "react-bootstrap";
import { useState } from "react";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="home-container w-100">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="w-100 home-container">
          <Image
            layout="responsive"
            src="/images/carousel/image1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 home-container">
          <Image
            layout="responsive"
            src="/images/carousel/image2.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="w-100 home-container">
          <Image
            layout="responsive"
            src="/images/carousel/image3.jpg"
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
