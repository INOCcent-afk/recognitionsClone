import React from "react";

import { BrandingColors } from "../utils/Colors";
import { useAppSelector } from "../redux/hook";
import { openCardDetails, openFilterLiveWall } from "../redux/Modal.slice";
import { getCards } from "../utils/api/getCards";
import { useQuery } from "react-query";
import { CardModelTypes } from "../models/CardModelTypes";

import PageContainer from "../containers/PageContainer";
import ModalContainer from "../ui/Modals/ModalContainer";
import PageHeader from "../ui/PageHeader";
import CardComponent from "../ui/cards/CardComponent";
import ModalFilterLiveWall from "../ui/Modals/ModalFilterLiveWall";
import ModalCardDetails from "../ui/Modals/ModalCardDetails";

import styled from "styled-components";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1330: 3,
  990: 2,
  700: 1,
};

type Props = {
  cards: any;
};

const appreciationsLivewall: React.FC<Props> = ({ cards }: Props) => {
  const ModalFilterStatus = useAppSelector(
    (state) => state.Modals.openFilterLiveWall.isOpen
  );

  const ModalCardDetailsStatus = useAppSelector(
    (state) => state.Modals.openCardDetails.isOpen
  );

  const { data: cardsData } = useQuery("cards", getCards, {
    initialData: cards,
  });

  return (
    <>
      <PageHeader
        bgColor={BrandingColors.violet}
        title="Appreciations live"
        subtitle="All company appreciations"
        DispatchEvent={openFilterLiveWall()}
      />
      {ModalFilterStatus ? (
        <ModalContainer>
          <ModalFilterLiveWall DispatchEvent={openFilterLiveWall()} />
        </ModalContainer>
      ) : null}
      {ModalCardDetailsStatus ? (
        <ModalContainer>
          <ModalCardDetails DispatchEvent={openCardDetails()} />
        </ModalContainer>
      ) : null}
      <PageContainer>
        <PageCardsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {cardsData.map((card: CardModelTypes) => (
              <CardComponent
                key={card._id}
                cardType={card.cardType}
                date={card.date}
                receiver={card.receiver}
                receiverJobDesc={card.receiverJobDesc}
                title={card.title}
                sender={card.sender}
                icon={card.icon}
                senderJobDesc={card.senderJobDesc}
                gif={card.gif}
                value={card.value}
                event={openCardDetails()}
                teamName={card.teamName}
              />
            ))}
          </Masonry>
        </PageCardsWrapper>
      </PageContainer>
    </>
  );
};

export default appreciationsLivewall;

export const PageCardsWrapper = styled.div`
  max-width: 1388px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const getServerSideProps = async () => {
  const cards = await getCards();

  return {
    props: { cards },
  };
};
