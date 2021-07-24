import React from "react";

import Link from "next/link";
import styled from "styled-components";

import { useRouter } from "next/router";

type Props = {
  href: string;
  activeClass: string;
  name: string;
  bgColor: string;
};

const NavLink: React.FC<Props> = ({
  href,
  activeClass,
  name,
  bgColor,
}: Props) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <LinkStyled
        className={router.pathname.includes(href) ? activeClass : ""}
        bgColor={bgColor}
      >
        {name}
      </LinkStyled>
    </Link>
  );
};

export default NavLink;

export const LinkStyled = styled.a<{ bgColor: string }>`
  padding: 8px 15px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.bgColor};
    color: white;
  }
`;
