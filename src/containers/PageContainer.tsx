import React from "react";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }: Props) => {
  return <MainContainerStyled>{children}</MainContainerStyled>;
};

export default PageContainer;

const MainContainerStyled = styled.main`
  background-color: black;
  min-height: 100vh;
  padding: 80px 60px;
`;
