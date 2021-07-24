import React from "react";

import { BrandingColors } from "../utils/Colors";

import styled from "styled-components";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  link: string;
  icon: React.ReactNode;
};

const LargeButton: React.FC<Props> = ({ title, desc, icon, link }: Props) => {
  return (
    <Link href={`/send-appreciations/${link}`}>
      <LargeButtonStyled>
        <LargeButtonContentStyled>
          <h4>{title}</h4>
          <p>{desc}</p>
        </LargeButtonContentStyled>
        <LargeButtonIconStyled>{icon}</LargeButtonIconStyled>
      </LargeButtonStyled>
    </Link>
  );
};

export default LargeButton;

export const LargeButtonStyled = styled.div`
  background-color: ${BrandingColors.blue};
  padding: 20px;
  border-radius: 4px;
  color: white;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  justify-content: space-between;

  &:hover {
    background-color: ${BrandingColors.blue20};
  }
`;

export const LargeButtonContentStyled = styled.div`
  h4 {
    font-size: 24px;
    font-weight: bold;
    line-height: 28px;
    margin-bottom: 11px;
  }

  p {
    font-size: 14px;
    line-height: 25px;
  }
`;

export const LargeButtonIconStyled = styled.div``;
