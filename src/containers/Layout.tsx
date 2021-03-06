import React from "react";

import { useRouter } from "next/router";

import Header from "../ui/Header/Header";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  const router = useRouter();

  return (
    <LayoutStyled>
      {router.query.id?.includes("say-thanks") ||
      router.pathname === "/" ? null : (
        <Header />
      )}
      {children}
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
