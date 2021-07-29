import React from "react";

import Image from "next/image";
import styled from "styled-components";

import { useRouter } from "next/router";
import { ScreenSizes } from "../../utils/Screens";
import { signOut, useSession } from "next-auth/client";

import CloseIcon from "../../icons/CloseIcon";
import MenuIcon from "../../icons/MenuIcon";
import NavHeader from "./NavHeader";
import SideBar from "./SideBar";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [session] = useSession();
  const router = useRouter();

  React.useEffect(() => {
    setMenu(false);
  }, [router]);

  React.useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

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
          <p className="logoutBtn" onClick={() => signOut()}>
            Logout
          </p>
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
