import React from "react";

import { CardModelTypes } from "../../models/CardModelTypes";
import { useAppDispatch } from "../../redux/hook";
import { BrandingColors } from "../../utils/Colors";
import { ScreenSizes } from "../../utils/Screens";

import Quality from "./Quality";
import StarIcon from "../../icons/StarIcon";

import styled from "styled-components";

const CardComponent: React.FC<CardModelTypes> = ({
  date,
  receiver,
  receiverJobDesc,
  icon,
  title,
  content,
  sender,
  senderJobDesc,
  cardType,
  value,
  gif,
  membersCount,
  members,
  event,
}: CardModelTypes) => {
  const dispatch = useAppDispatch();

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
    <CardComponentStyled onClick={() => dispatch(event)}>
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
                cardType === "team"
                  ? "/profile-team-dark.svg"
                  : cardType === "store"
                  ? "/profile-group.svg"
                  : icon
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
          {gif ? (
            <CardComponentGifStyled>
              <img src={gif} alt="" />
            </CardComponentGifStyled>
          ) : null}
        </CardComponentBodyStyled>
        <CardComponentFooterStyled>
          <p>
            <span>{sender}</span>,{senderJobDesc}
          </p>
        </CardComponentFooterStyled>
      </CardComponentWrapperStyled>
      <Quality qualityColor={color} text={value} icon={<StarIcon />} />
    </CardComponentStyled>
  );
};

export default CardComponent;

export const CardComponentStyled = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;

  .rounded-only {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    max-width: unset;
  }
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
