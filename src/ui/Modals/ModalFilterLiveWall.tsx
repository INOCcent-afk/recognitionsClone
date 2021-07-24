import React, { FC } from "react";

import { useAppDispatch } from "../../redux/hook";

import styled from "styled-components";

type Props = {
  DispatchEvent?: any;
};

const ModalFilterLiveWall: FC<Props> = ({ DispatchEvent }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <ModalCardDetailsStyled>
      <button onClick={() => dispatch(DispatchEvent)}>HELLO !</button>
    </ModalCardDetailsStyled>
  );
};

export default ModalFilterLiveWall;

export const ModalCardDetailsStyled = styled.div`
  background-color: violet;
  min-width: 375px;
  min-height: 400px;
  z-index: 200;
`;
