import React from "react";

import { ScreenSizes } from "../../utils/Screens";
import { BrandingColors } from "../../utils/Colors";

import NavLink from "./NavLink";

import styled from "styled-components";

const NavHeader: React.FC = () => {
  return (
    <>
      <NavHeaderStyled>
        <li>
          <NavLink
            href="/appreciations-livewall"
            activeClass="bg-purple"
            name="Appreciations live"
            bgColor={BrandingColors.violet}
          />
        </li>
        <li>
          <NavLink
            href="/my-appreciations"
            activeClass="bg-pink"
            name="My appreciations"
            bgColor={BrandingColors.pink}
          />
        </li>
        <li>
          <NavLink
            href="/send-appreciations"
            activeClass="bg-blue"
            name="Send appreciations"
            bgColor={BrandingColors.blue}
          />
        </li>
        <li>
          <NavLink
            href="/announcements"
            activeClass="bg-purple"
            name="Announcements"
            bgColor={BrandingColors.violet}
          />
        </li>
        <li>
          <NavLink
            href="/admin"
            activeClass="activelink-black"
            name="Admin"
            bgColor="black"
          />
        </li>
      </NavHeaderStyled>
    </>
  );
};

export default NavHeader;

export const NavHeaderStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  width: 100%;

  li {
    display: flex;
    justify-content: start;
  }

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    flex-direction: row;

    li:last-child {
      display: none;
    }
  }
`;
