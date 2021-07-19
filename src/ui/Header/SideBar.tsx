import React from "react";

import { ScreenSizes } from "../../utils/Screens";

import styled from "styled-components";

import NavHeader from "./NavHeader";

const SideBar = () => {
  return (
    <SidebarStyled>
      <NavHeader />
    </SidebarStyled>
  );
};

export default SideBar;

export const SidebarStyled = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  background-color: white;
  top: 84px;
  bottom: 0;
  right: 0;
  width: 100%;
  padding: 30px;

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    display: none;
  }
`;
