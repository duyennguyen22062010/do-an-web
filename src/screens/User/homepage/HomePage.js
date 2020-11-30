import React, { useRef, useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import Footer from "./Footer/Footer";
// import Navbar from "../../../components/User/Navbar/Navbar";
import ListMovie from "./ListMovie/ListMovie";
import News from "./New/New";
import Cinema from "./Cinema/Cinema";
import App from "./App/App";
import Loader from "../../../components/User/Loader/Loader";
import Navbar from "../../../components/User/Navbar/Navbar";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop - 60, behavior: "smooth" });

export default function HomePage(props) {
  const listMovie = useRef(null);
  const groupCinema = useRef(null);
  const app = useRef(null);
  const news = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (document.getElementById("loader")) {
        document.getElementById("loader").style.opacity = "0";
        document.getElementById("loader").style.zIndex = "-999";
      }
      switch (props.scroll) {
        case "listMovie":
          scrollToRef(listMovie);
          break;
        case "groupCinema":
          scrollToRef(groupCinema);
          break;
        case "news":
          scrollToRef(news);
          break;
        case "app":
          scrollToRef(app);
          break;
        default:
          break;
      }
    }, 500);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar {...props} />
      <Carousel history={props.history}></Carousel>
      <div ref={listMovie}>
        <ListMovie></ListMovie>
      </div>
      <div ref={groupCinema}>
        <Cinema history={props.history}></Cinema>
      </div>
      <div ref={news}>
        <News history={props.history} />
      </div>
      <div ref={app}>
        <App></App>
      </div>
      <Footer />
      <Loader />
    </>
  );
}
