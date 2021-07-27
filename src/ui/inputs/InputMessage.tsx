import React from "react";

import { setCardContent } from "../../redux/data.slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { BrandingColors } from "../../utils/Colors";

import styled from "styled-components";

const InputMessage = () => {
  const dispatch = useAppDispatch();

  const content = useAppSelector((state) => state.CardData.content);

  return (
    <TextAreaStyled
      value={content}
      onChange={(e) => dispatch(setCardContent(e.target.value))}
    ></TextAreaStyled>
  );
};

export default InputMessage;

export const TextAreaStyled = styled.textarea`
  min-height: 300px;
  width: 100%;
  resize: vertical;
  font-size: 18px;
  padding: 20px;
  background-color: transparent;
  color: white;
  font-weight: bold;

  :focus {
    outline-color: ${BrandingColors.violet};
  }
`;
