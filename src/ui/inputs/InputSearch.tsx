import React from "react";
import styled from "styled-components";
import SearchIcon from "../../icons/SearchIcon";

type Props = {
  placeholder: string;
};

const InputSearch: React.FC<Props> = ({ placeholder }: Props) => {
  return (
    <InputSearchStyled>
      <SearchIcon />
      <InputStyled type="text" placeholder={placeholder} />
    </InputSearchStyled>
  );
};

export default InputSearch;

export const InputSearchStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InputStyled = styled.input`
  border: none;
  border-bottom: 2px solid white;
  padding: 5px;
  color: white;
  width: 100%;
  background-color: transparent;
  font-size: 18px;
  font-weight: normal;

  &:focus {
    outline: none;
  }
`;
