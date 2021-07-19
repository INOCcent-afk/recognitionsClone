import React from "react";

import { BrandingColors } from "../utils/Colors";

import styled from "styled-components";

const PageHeader = () => {
  return (
    <PageContainer>
      <h1>Page Header</h1>
    </PageContainer>
  );
};

export default PageHeader;

export const PageContainer = styled.div`
  height: 150px;
  background-color: ${BrandingColors.violet};
  justify-content: space-between;
  padding: 20px;
  color: white;
`;
