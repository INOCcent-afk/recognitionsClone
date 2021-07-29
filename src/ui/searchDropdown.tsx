import React from "react";

import { useAppDispatch } from "../redux/hook";
import { step1Done, step2View } from "../redux/SendForm.slice";
import { BrandingColors } from "../utils/Colors";
import {
  setCardIcon,
  setCardReceiver,
  setCardReceiverJobDesc,
} from "../redux/data.slice";

import styled from "styled-components";

type Props = {
  data: {
    data: [];
  };
  receiver: string;
};

const SearchDropdown: React.FC<Props> = ({ data, receiver }: Props) => {
  const dispatch = useAppDispatch();

  const filteredOptions = data.data.filter((val: any) => {
    const name = `${val.first_name} ${val.last_name}`;
    if (receiver === "") {
      return val;
    } else if (name.toLowerCase().includes(receiver.toLowerCase())) {
      return val;
    }
    return false;
  });
  return (
    <SearchDropDownStyled>
      {filteredOptions.length > 0 ? (
        filteredOptions.map(
          (user: {
            email: string;
            first_name: string;
            last_name: string;
            avatar: string;
            id: number;
          }) => (
            <SearchDropdownItemStyled
              onClick={() => {
                dispatch(
                  setCardReceiver(`${user.first_name} ${user.last_name}`)
                ),
                  dispatch(setCardReceiverJobDesc(`${user.email}`)),
                  dispatch(setCardIcon(`${user.avatar}`)),
                  dispatch(step1Done()),
                  dispatch(step2View());
              }}
              key={user.id}
            >
              <SearchDropdownUserImageStyled>
                <img src={user.avatar} />
              </SearchDropdownUserImageStyled>
              <div>
                <h4>
                  {user.first_name} {user.last_name}
                </h4>
                <span>{user.email}</span>
              </div>
            </SearchDropdownItemStyled>
          )
        )
      ) : (
        <p>No Result Found</p>
      )}
    </SearchDropDownStyled>
  );
};

export default SearchDropdown;

export const SearchDropDownStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
  max-height: 300px;
  overflow: hidden;
  overflow-y: auto;
`;

export const SearchDropdownItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
  cursor: pointer;
  gap: 15px;

  &:hover {
    background-color: ${BrandingColors.blue};
  }
`;

export const SearchDropdownUserImageStyled = styled.div`
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 50%;

  img {
    width: 60px;
  }
`;
