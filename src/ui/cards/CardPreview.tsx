import React from "react";

import { ScreenSizes } from "../../utils/Screens";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { BrandingColors } from "../../utils/Colors";

import StarIcon from "../../icons/StarIcon";
import Quality from "./Quality";

import styled from "styled-components";
import PhotographIcon from "../../icons/PhotographIcon";
import CloseIcon from "../../icons/CloseIcon";
import { openCardGif } from "../../redux/Modal.slice";
import { setCardGif } from "../../redux/data.slice";

const CardPreview = () => {
  const dispatch = useAppDispatch();

  const date = useAppSelector((state) => state.CardData.date);
  const receiver = useAppSelector((state) => state.CardData.receiver);
  const receiverJobDesc = useAppSelector(
    (state) => state.CardData.receiverJobDesc
  );

  const membersCount = useAppSelector((state) => state.CardData.membersCount);
  const gif = useAppSelector((state) => state.CardData.gif);
  const sender = useAppSelector((state) => state.CardData.sender);
  const senderJobDesc = useAppSelector((state) => state.CardData.senderJobDesc);
  const value = useAppSelector((state) => state.CardData.value);
  const title = useAppSelector((state) => state.CardData.title);
  const cardType = useAppSelector((state) => state.CardData.cardType);
  const picture = useAppSelector((state) => state.CardData.icon);
  const content = useAppSelector((state) => state.CardData.content);

  const [color, setColor] = React.useState(BrandingColors.violet);

  React.useEffect(() => {
    if (cardType === "individual") {
      setColor(BrandingColors.violet);
    } else if (cardType === "team") {
      setColor(BrandingColors.pink);
    } else if (cardType === "store") {
      setColor(BrandingColors.darkBlue);
    }
  }, []);

  return (
    <CardComponentStyled className="preview-card-inside">
      <CardComponentWrapperStyled>
        <CardComponentHeaderStyled>
          <CardComponentDateStyled>{date}</CardComponentDateStyled>
          <CardComponentReceiverStyled>
            <h1>{receiver}</h1>
            <p>{receiverJobDesc}</p>
          </CardComponentReceiverStyled>
          <CardComponentImage>
            <img
              src={
                cardType === "Team"
                  ? "/profile-team-dark.svg"
                  : cardType === "Store"
                  ? "/profile-group.svg"
                  : picture
              }
              alt="user-image"
            />
          </CardComponentImage>
          {membersCount ? (
            <CardComponentMemberCountStyled>
              {membersCount} members
            </CardComponentMemberCountStyled>
          ) : null}
        </CardComponentHeaderStyled>
        <CardComponentBodyStyled>
          <p>{title}</p>
        </CardComponentBodyStyled>
        {content.length ? (
          <CardComponentContentStyled>
            <p>"{content}"</p>
          </CardComponentContentStyled>
        ) : null}
        {gif ? (
          <CardComponentGifStyled>
            <img src={gif} alt="" />
          </CardComponentGifStyled>
        ) : null}
        <CardComponentFooterStyled>
          <p>
            <span>{sender}</span>,{senderJobDesc}
          </p>
        </CardComponentFooterStyled>
      </CardComponentWrapperStyled>
      {value.length ? (
        <Quality qualityColor={color} text={value} icon={<StarIcon />} />
      ) : null}

      {gif.length ? (
        <GifButton onClick={() => dispatch(setCardGif(""))}>
          <CloseIcon />
        </GifButton>
      ) : (
        <GifButton onClick={() => dispatch(openCardGif())}>
          <PhotographIcon stroke="#000000" width="30" height="30" />
        </GifButton>
      )}
    </CardComponentStyled>
  );
};

export default CardPreview;

export const CardComponentStyled = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 350px;
  margin: 80px auto;
  color: black;

  .rounded-only {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    cursor: pointer;
  }

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    max-width: 329px;
    margin: 30px auto auto auto;
  }
`;

export const GifButton = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  transform: translate(-50%, -20px);
`;

export const CardComponentWrapperStyled = styled.div`
  padding: 20px;
`;

export const CardComponentImage = styled.div`
  position: absolute;
  width: 72px;
  height: 72px;
  overflow: hidden;
  border-radius: 50%;
  top: -30px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid black;
`;

export const CardComponentHeaderStyled = styled.div``;

export const CardComponentContentStyled = styled.div`
  margin: 30px 0;
`;

export const CardComponentDateStyled = styled.div`
  opacity: 0.6;
  font-size: 14px;
`;

export const CardComponentReceiverStyled = styled.div`
  margin-top: 8px;

  h1 {
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
  }

  p {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const CardComponentMemberCountStyled = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

export const CardComponentBodyStyled = styled.div`
  margin: 20px 0;

  p {
    font-size: 24px;
  }
`;

export const CardComponentFooterStyled = styled.div`
  line-height: 20px;
  margin: 10px 0;
  opacity: 0.6;
  font-style: italic;
  font-size: 14px;

  span {
    font-weight: bold;
    font-style: none;
  }
`;

export const CardComponentGifStyled = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    vertical-align: middle;
  }
`;
