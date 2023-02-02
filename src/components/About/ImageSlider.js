import { sliderData } from "../../seeds/images";
import { useState } from "react";
import "../../Styles/slider.scss";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderData.length;

  const incrementCount = () => {
    setTimeout(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 4000);
  };

  incrementCount();

  const mappedImages = sliderData.map((company, index) => (
    <div
      className={index === current ? "slide_active" : "slide"}
      key={company.name}
    >
      {index === current && (
        <img src={company.image} alt={company.name} className="image" />
      )}
    </div>
  ));

  return <section className="slider">{mappedImages}</section>;
};

export default ImageSlider;
