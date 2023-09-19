/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SliderData } from "../imageData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import style from "./imageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleScroll = () => {
    const images = document.querySelectorAll(`.${style.image}`);
    const scrollY = window.scrollY || window.pageYOffset;

    images.forEach((image, index) => {
      // Adjust the parallax effect strength here (you can use different values for different images)
      const parallaxStrength = index === current ? 0.2 : 0.1;
      image.style.transform = `translateY(${scrollY * parallaxStrength}px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={style.slider}>
      <FaArrowAltCircleLeft className={style.left_arrow} onClick={prevSlide} />
      {SliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={index === current ? style.slide_active : style.slide}
        >
          <div>
            <div
              className={style.image}
              style={{
                backgroundImage: `url(${slide.src})`,
              }}
            ></div>
          </div>
        </div>
      ))}
      <FaArrowAltCircleRight
        className={style.right_arrow}
        onClick={nextSlide}
      />
    </section>
  );
};

export default ImageSlider;
