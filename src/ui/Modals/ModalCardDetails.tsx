import React, { FC } from "react";

import { useAppDispatch } from "../../redux/hook";

import styled from "styled-components";

type Props = {
  DispatchEvent?: any;
};

const ModalCardDetails: FC<Props> = ({ DispatchEvent }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <ModalCardDetailsStyled>
      <button onClick={() => dispatch(DispatchEvent)}>HELLO !</button>
    </ModalCardDetailsStyled>
  );
};

export default ModalCardDetails;

export const ModalCardDetailsStyled = styled.div`
  background-color: yellow;
  min-width: 375px;
  min-height: 400px;
  z-index: 200;
`;
