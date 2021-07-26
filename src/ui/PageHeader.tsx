import React from "react";

import { useAppDispatch } from "../redux/hook";
import { useRouter } from "next/router";
import { BrandingColors } from "../utils/Colors";

import styled from "styled-components";

import Button from "./Button";
import CloseIcon from "../icons/CloseIcon";

type Props = {
  title: string;
  subtitle: string;
  bgColor: string;
  isButton?: boolean;
  isButtonClose?: boolean;
  DispatchEvent?: any;
};

const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  bgColor,
  isButton = true,
  isButtonClose = false,
  DispatchEvent,
}: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <PageContainerStyled bgColor={bgColor}>
      <PageTitleContainerStyled>
        <p>{subtitle}</p>
        <h1>{title}</h1>
      </PageTitleContainerStyled>
      {isButton ? (
        <FilterContainerStyled onClick={() => dispatch(DispatchEvent)}>
          <Button additionalClassname="btn-extend">Filter</Button>
        </FilterContainerStyled>
      ) : null}
      {isButtonClose ? (
        <CloseButtonContainerStyled>
          <CloseIcon
            onClick={() => router.push("/send-appreciations")}
            width="40"
            height="40"
            style={{ cursor: "pointer" }}
          />
        </CloseButtonContainerStyled>
      ) : null}
    </PageContainerStyled>
  );
};

export default PageHeader;

export const PageContainerStyled = styled.div<{ bgColor: string }>`
  min-height: 150px;
  background-color: ${(props) => props.bgColor};
  justify-content: space-between;
  padding: 20px 30px;
  flex-wrap: wrap;
  gap: 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitleContainerStyled = styled.div`
  font-weight: bold;

  h1 {
    margin-top: 10px;
    font-size: 36px;
  }
`;

export const FilterContainerStyled = styled.div``;

export const CloseButtonContainerStyled = styled.div`
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;

  &:hover {
    background-color: ${BrandingColors.violet};
  }
`;
