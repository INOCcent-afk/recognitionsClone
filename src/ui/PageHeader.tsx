import React from "react";

import { useAppDispatch } from "../redux/hook";

import styled from "styled-components";

import Button from "./Button";
import CloseIcon from "../icons/CloseIcon";
import { useRouter } from "next/router";

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
        <CloseIcon
          onClick={() => router.push("/send-appreciations")}
          style={{ cursor: "pointer" }}
        />
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
