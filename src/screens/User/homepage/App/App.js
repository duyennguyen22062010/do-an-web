import React from "react";
import Slider from "react-slick";

export default function App() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="wrap-app app">
      <div className="container" style={{ maxWidth: "940px" }}>
        <div className="row align-items-center">
          <div className="app__left col-md-6 text-center text-md-left">
            <p className="text-1">
              Ứng dụng tiện lợi dành cho người yêu điện ảnh
            </p>
            <p className="text-2">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="">App miễn phí - Tải về ngay!</button>
            <p className="text-3">
              TIX có hai phiên bản{" "}
              <a className="app-link" href="# ">
                iOS
              </a>{" "}
              &{" "}
              <a className="app-link" href="# ">
                Android
              </a>
            </p>
          </div>
          <div className="app__right col-md-6">
            <img className="mobile-img" src="images/mobile.png" alt="mobile" />
            <div className="slider-screen">
              <Slider className="h-100 w-100" {...settings}>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide1.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide2.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide3.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide4.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide5.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide6.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide7.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide8.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide9.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide10.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide11.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide12.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide13.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide14.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide15.jpg"
                    alt="screen-img"
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="images/slide16.jpg"
                    alt="screen-img"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
