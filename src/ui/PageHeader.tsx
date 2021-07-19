import React from "react";

import { BrandingColors } from "../utils/Colors";

import styled from "styled-components";

type Props = {
  title: string;
  subtitle: string;
};

const PageHeader: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <PageContainer>
      <p>{subtitle}</p>
      <h1>{title}</h1>
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
