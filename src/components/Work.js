import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Work.css";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import Fade from "react-reveal/Fade";

function Work() {
  const [image, setimage] = useState("");

  var settings = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var settings2 = {
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="work">
      <Container>
        <Quote>
          <p>
            That frame of mind that you need to make fine pictures of a very
            wonderful subject; you cannot do it by not being lost yourself."
          </p>
        </Quote>

        <MyWork>
          <Fade bottom>
            <div id="image-viewer">
              <span
                onClick={() => {
                  document.getElementById("image-viewer").style.display =
                    "none";
                }}
                class="close"
              >
                &times;
              </span>
              <img src={image} class="modal-content" id="full-image" />
            </div>
            <h1>My Recent Works</h1>
            <div className="showHold">
              <h2>Potraits</h2>

              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">See More</span>
              </button>
            </div>

            <div>
              <Crousel {...settings}>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img1.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img2.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img3.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img4.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img5.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img6.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img7.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
                <div className="blur-load">
                  <img
                    className="img-zoom-thing"
                    src="/images/img2.jpg"
                    alt=""
                    onClick={(e) => {
                      console.log(e.target.src.slice(24));
                      setimage(e.target.src.slice(24));
                      console.log(image);
                      document.getElementById("image-viewer").style.display =
                        "block";
                    }}
                  />
                </div>
              </Crousel>
            </div>
            <div className="showHold">
              <h2>Fauna</h2>

              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">See More</span>
              </button>
            </div>
            <Crousel {...settings2}>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img8.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img9.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img10.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img11.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img12.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img13.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img14.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img15.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
            </Crousel>
            <div className="showHold">
              <h2>Atmosphere/ Places</h2>

              <button class="learn-more">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">See More</span>
              </button>
            </div>
            <Crousel {...settings}>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img16.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img17.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img18.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img19.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img20.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img21.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img16.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
              <div className="blur-load">
                <img
                  className="img-zoom-thing"
                  src="/images/img19.jpg"
                  onClick={(e) => {
                    console.log(e.target.src.slice(24));
                    setimage(e.target.src.slice(24));
                    console.log(image);
                    document.getElementById("image-viewer").style.display =
                      "block";
                  }}
                  alt=""
                />
              </div>
            </Crousel>
          </Fade>
        </MyWork>
      </Container>
    </div>
  );
}

export default Work;

const Container = styled.div`
  min-height: 100vh;
  background: fixed;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    #131317 66%,
    #111111 100%
  );
  min-width: 100vh;
`;

const Quote = styled.div`
  background-color: #0000002b;
  height: 20vh;
  width: auto;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    position: absolute;
    color: white;
    font-size: 20px;
    font-style: italic;
    font-family: "Cedarville Cursive", cursive;

    @media screen and (max-width: 800px) {
      font-size: 12px;
      width: 50vh;
    }
  }
`;

const MyWork = styled.div`
  h1 {
    color: #ffffffb1;
    font-size: 30px;
    margin-left: 13vh;
    margin-top: 6vh;
    margin-bottom: 30px;
    border-bottom: 1px solid #ffffffb1;
    margin-right: 65vh;
    padding-bottom: 10px;

    @media screen and (max-width: 800px) {
      font-size: 24px;
      width: 50vh;
    }
  }

  h2 {
    color: #ffffffb1;
    font-size: 25px;
    margin-left: 12vh;
  }
`;

const Crousel = styled(Slider)`
  margin: 0 80px;
  padding: 0 50px;

  padding-bottom: 60px;
  img {
    height: 50vh;
    width: 35vh;
  }
`;
