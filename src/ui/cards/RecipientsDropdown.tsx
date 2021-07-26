import React from "react";
import styled from "styled-components";

const RecipientsDropdown = () => {
  return <RecipientsDropdownStyled></RecipientsDropdownStyled>;
};

export default RecipientsDropdown;

export const RecipientsDropdownStyled = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  max-height: 300px;
  max-width: 500px;
`;
