import React from "react";

import styled from "styled-components";

import Header from "../ui/Header/Header";
import PageHeader from "../ui/PageHeader";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <LayoutStyled>
      <Header />
      <PageHeader />
      <MainContainerStyled>
        <MainWrapperStyled>{children}</MainWrapperStyled>
      </MainContainerStyled>
    </LayoutStyled>
  );
};

export default Layout;

const LayoutStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContainerStyled = styled.main`
  background-color: black;
  min-height: 100vh;
`;

const MainWrapperStyled = styled.div``;
