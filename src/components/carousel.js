import Bg1 from "./../assets/images/bg1.jpg";
import Bg2 from "./../assets/images/bg2.jpg";
import Bg3 from "./../assets/images/bg3.jpg";
import Bg4 from "./../assets/images/bg4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// var $ = require("jquery");
// if (typeof window !== "undefined") {
//    window.$ = window.jQuery = require("jquery");
// }

const images = [{ image: Bg1 }, { image: Bg2 },{ image: Bg2 },{ image: Bg2 }];

export default function CarouselMain() {
  return (
    <Carousel
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      className="flex min-h-screen flex-col items-center justify-center text-center"
    >
      {images.map((url, index) => (
        <div key={index}>
          <div className="header-carousel owl-carousel1">
            <div className="headerbg clear-blur">
              <div className={`d-none d-md-block header-carousel-item carousel-img-${index + 1}`}>
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row g-4 align-items-center">
                      <div className="col-lg-7 animated fadeInLeft">
                        <div className="text-sm-center text-md-start">
                          <h1 className="d-flex flex-column display-1 text-white mb-4 fw-bold h2">
                            <span>Real People </span>
                            <span>Your Success</span>
                          </h1>
                        </div>
                      </div>
                      <div className="col-lg-5 animated fadeInRight">
                        {/* <img
                          src={image}
                          alt="Roland Schaub - CEO & Founder"
                          className="dark:invert img-fluid w-100"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`d-md-none header-carousel-item carousel-img-${index + 5}`}>
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row g-4 align-items-center">
                      <div className="col-lg-7 animated fadeInLeft">
                        <div className="text-sm-center text-md-start">
                          <h1 className="d-flex flex-column display-1 text-white mb-4 fw-bold h2">
                            <span>Real People </span>
                            <span>Your Success</span>
                          </h1>
                        </div>
                      </div>
                      <div className="col-lg-5 animated fadeInRight">
                        {/* <img
                          src={image}
                          alt="Roland Schaub - CEO & Founder"
                          className="dark:invert img-fluid w-100"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
