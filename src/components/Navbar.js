import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function Navbar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Lister>
        {[""].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <b>MENU</b>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Lister>
      <Divider />
      <Lister>
        {["SEE WORK   ", "SERVICES   ", "CONTACT   "].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemTexter primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Lister>
    </>
  );

  return (
    <Nav>
      <nav>
        <li>
          <a className="LogoFont" href="">
            ANIRUDH
          </a>{" "}
        </li>
      </nav>
      <NavRight>
        <li>
          <a href="#work">SEE WORK</a>
        </li>
        <li>
          <a href="#service">SERVICES</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </NavRight>
      <li className="menuHolder">
        {["right"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Buttoner onClick={toggleDrawer(anchor, true)}>
              <MenuIconer />
            </Buttoner>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </li>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.div`
  position: absolute;
  background-color: #00000089;
  opacity: 01;
  z-index: 2;
  height: 90px;
  width: 100vw;
  display: flex;

  .LogoFont {
    text-transform: uppercase;
    font-family: "Pacifico", cursive;
    font-size: 20px;
  }

  .menuHolder {
    display: none;

    @media screen and (max-width: 800px) {
      display: flex;
    }
  }

  nav {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    li {
      list-style: none;
      position: absolute;
      left: 100px;

      a {
        color: #e8e8e8b6;
        font-size: 30px;
        margin-top: 10px;
        padding: 10px;

        border-radius: 10px;

        @media screen and (max-width: 800px) {
          font-size: 18px;
        }
      }
      a:hover {
        color: #e5e5e5;
      }
    }
  }
`;

const ListItemTexter = styled(ListItemText)`
  margin-right: 80px;
  border-bottom: 1px solid grey;
`;

const Lister = styled(List)`
  position: fixed;
  right: 0;
  margin-bottom: 60px;
`;

const Buttoner = styled(Button)``;

const MenuIconer = styled(MenuIcon)`
  color: white;
  margin-bottom: 50px;
`;

const Boxer = styled(Box)``;

const NavRight = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  right: 100px;
  width: 100%;
  height: 100%;

  align-items: center;

  li {
    list-style: none;
    padding-left: 30px;

    a {
      color: #ffffff;
      font-size: 20px;
      display: inline-block;
      position: relative;
    }
    a::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0%;
      height: 2px;
      background-color: #ffffffa5;
      transition: width 0.2s ease-out;
    }
    a:hover::before {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
