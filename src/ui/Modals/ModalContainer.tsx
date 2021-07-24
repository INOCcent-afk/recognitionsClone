import React from "react";

import { useAppDispatch } from "../../redux/hook";
import { closeAllModal } from "../../redux/Modal.slice";

import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ModalContainer: React.FC<Props> = ({ children }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <ModalContainerStyled>
      <OverlayStyled
        onClick={() => {
          dispatch(closeAllModal());
        }}
      ></OverlayStyled>
      {children}
    </ModalContainerStyled>
  );
};

export default ModalContainer;

export const ModalContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 200;
`;

export const OverlayStyled = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`;
