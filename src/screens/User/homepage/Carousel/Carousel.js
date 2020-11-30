import React from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import HomeTool from "../../../../components/User/HomeTool/HomeTool";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon style={{ fontSize: 45 }} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon style={{ fontSize: 45 }} />
    </div>
  );
};

export default function Carousel(props) {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        <div>
          <img src="./images/movie-0.png" alt="movie-0" />
          <a
            href="https://www.youtube.com/watch?v=DMTVg0QtCUg"
            target="blank"
            className="play-trailer"
          >
            <img src="./images/play-video.png" alt="Play" />
          </a>
        </div>
        <div>
          <img src="./images/movie-1.png" alt="movie-1" />
          <a
            href="https://www.youtube.com/watch?v=DMTVg0QtCUg"
            target="blank"
            className="play-trailer"
          >
            <img src="./images/play-video.png" alt="Play" />
          </a>
        </div>
        <div>
          <img src="./images/movie-2.png" alt="movie-2" />
          <a
            href="https://www.youtube.com/watch?v=DMTVg0QtCUg"
            target="blank"
            className="play-trailer"
          >
            <img src="./images/play-video.png" alt="Play" />
          </a>
        </div>
        <div>
          <img src="./images/movie-3.png" alt="movie-3" />
          <a
            href="https://www.youtube.com/watch?v=DMTVg0QtCUg"
            target="blank"
            className="play-trailer"
          >
            <img src="./images/play-video.png" alt="Play" />
          </a>
        </div>
        <div>
          <img src="./images/movie-4.jpg" alt="movie-4" />
          <a
            href="https://www.youtube.com/watch?v=DMTVg0QtCUg"
            target="blank"
            className="play-trailer"
          >
            <img src="./images/play-video.png" alt="Play" />
          </a>
        </div>
      </Slider>
      <HomeTool history={props.history} />
    </div>
  );
}
