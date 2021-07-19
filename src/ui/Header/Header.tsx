import React from "react";

import Image from "next/image";
import styled from "styled-components";

import { useRouter } from "next/router";
import { ScreenSizes } from "../../utils/Screens";

import CloseIcon from "../../icons/CloseIcon";
import MenuIcon from "../../icons/MenuIcon";
import NavHeader from "./NavHeader";
import SideBar from "./SideBar";
import NavLink from "./NavLink";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setMenu(false);
  }, [router]);

  return (
    <>
      <HeaderStyled>
        <NavContainerStyled>
          <Image
            width="30"
            height="44"
            layout="fixed"
            objectFit="contain"
            src="/logo.png"
            alt="Branding_Logo"
          />
          <NavStyled>
            <NavHeader />
          </NavStyled>
        </NavContainerStyled>
        <MenuStyled>
          {menu ? (
            <CloseIcon onClick={() => setMenu(false)} width="30" height="30" />
          ) : (
            <MenuIcon onClick={() => setMenu(true)} width="30" height="30" />
          )}
        </MenuStyled>
        <SeperateLinkStyled>
          <NavLink
            href="/admin"
            activeClass="bg-black"
            name="Admin"
            bgColor="black"
          />
        </SeperateLinkStyled>
      </HeaderStyled>
      {menu ? <SideBar /> : null}
    </>
  );
};

export default Header;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
`;

export const NavContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

export const NavStyled = styled.nav`
  display: none;

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    display: block;
  }
`;

export const MenuStyled = styled.div`
  cursor: pointer;

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    display: none;
  }
`;

export const SeperateLinkStyled = styled.div`
  display: none;
  font-size: 18px;

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    display: block;
  }
`;
