import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./Footer.css";

function Footer() {
  return (
    <Container>
      <IconGrp>
        <a className="insta" href="https://www.instagram.com/an_i.007/">
          <InstagramIcon />
        </a>
        <a className="fb" href="https://www.facebook.com/anirudh.ajikumar.7/">
          <FacebookIcon />
        </a>
        <a className="wap" href="">
          <WhatsAppIcon />
        </a>
      </IconGrp>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
        exercitationem consequatur dolores esse nemo! Voluptatibus, quos quis.
        &copy;
      </p>
      <p>MADE WITH REACT</p>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 10vh;
  background-color: black;
  border: 1px solid #212121;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconGrp = styled.div`
  width: 200px;
  display: flex;

  a {
    padding: 6px;
    transition: all 0.2s ease-in;
  }
  .insta:hover {
    transform: scale(1.3);
    color: #e64473;
  }
  .fb:hover {
    transform: scale(1.3);
    color: #44bbe6;
  }
  .wap:hover {
    transform: scale(1.3);
    color: #44e695;
  }
`;
