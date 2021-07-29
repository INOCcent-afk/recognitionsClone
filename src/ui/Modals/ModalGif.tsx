import React from "react";

import styled from "styled-components";
import { setCardGif } from "../../redux/data.slice";
import { useAppDispatch } from "../../redux/hook";
import { closeAllModal } from "../../redux/Modal.slice";

import InputSearch from "../inputs/InputSearch";

type Props = {
  data: {
    data: [];
  };
};

const ModalGif: React.FC<Props> = ({ data }: Props) => {
  const [input, setInput] = React.useState("");
  const dispatch = useAppDispatch();

  const filteredOptions = data.data.filter((val: any) => {
    if (input === "") {
      return val;
    } else if (val.title.toLowerCase().includes(input.toLowerCase())) {
      return val;
    }
    return false;
  });

  return (
    <ModalCardContainerStyled>
      <InputSearchContainer>
        <InputSearch
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          value={input}
          placeholder="Search a Gif"
        />
      </InputSearchContainer>
      <ModalCardGifStyled>
        <ModalCardGifsDataStyled>
          {filteredOptions.length > 0 ? (
            filteredOptions.map(
              (item: {
                id: string;
                images: {
                  original: {
                    url: string;
                  };
                };
              }) => (
                <GifItem
                  key={item.id}
                  onClick={() => {
                    dispatch(setCardGif(item.images.original.url)),
                      dispatch(closeAllModal());
                  }}
                >
                  <img src={item.images.original.url} />
                </GifItem>
              )
            )
          ) : (
            <NoResultsStyled>
              <p>No Result Found</p>
            </NoResultsStyled>
          )}
        </ModalCardGifsDataStyled>
      </ModalCardGifStyled>
    </ModalCardContainerStyled>
  );
};

export default ModalGif;

export const ModalCardContainerStyled = styled.div`
  background: white;
  border-radius: 8px;
  z-index: 300;
  margin: 20px;
  overflow: hidden;
`;

export const ModalCardGifStyled = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  max-height: 400px;
  overflow: hidden;
  margin: 20px 20px 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  z-index: 300;
`;

export const ModalCardGifsDataStyled = styled.div`
  width: 450px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const GifItem = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 150px;
    height: 100px;
    object-fit: cover;
  }
`;

export const NoResultsStyled = styled.div`
  width: 450px;
  min-height: 300px;
  padding: 20px;
  font-weight: bold;
`;

export const InputSearchContainer = styled.div`
  margin: 20px;

  svg {
    stroke: black;
  }

  input {
    color: black;
    border-bottom: 2px solid black;
  }
`;
