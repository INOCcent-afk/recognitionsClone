import React from "react";

import styled from "styled-components";
import { BrandingColors } from "../utils/Colors";

type Props = {
  children: React.ReactNode;
  additionalClassname?: string;
};

const Button: React.FC<Props> = ({ children, additionalClassname }: Props) => {
  return (
    <ButtonStyled className={additionalClassname}>{children}</ButtonStyled>
  );
};

export default Button;

export const ButtonStyled = styled.button`
  padding: 10px 30px;
  background-color: black;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  color: ${BrandingColors.salmon};
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`;
