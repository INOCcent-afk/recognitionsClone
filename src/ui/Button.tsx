import React from "react";

import styled from "styled-components";
import { BrandingColors } from "../utils/Colors";

type Props = {
  children: React.ReactNode;
  additionalClassname?: string;
  buttonType?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<Props> = ({
  children,
  additionalClassname,
  buttonType,
  disabled,
  type,
}: Props) => {
  return (
    <ButtonStyled
      disabled={disabled}
      squared={buttonType}
      className={additionalClassname}
      type={type}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

export const ButtonStyled = styled.button<{ squared: string | undefined }>`
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

  &:disabled {
    opacity: 0.2;
  }

  ${(props) =>
    props.squared &&
    `
      border-radius: 4px;
      border: 2px solid ${BrandingColors.blue};
      background-color: ${BrandingColors.blue};
      color: white;
      letter-spacing: unset;

      &:hover { 
        background-color: white;
        color: ${BrandingColors.blue};
      }
  `}
`;
