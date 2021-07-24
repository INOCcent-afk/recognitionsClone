import React from "react";

import { BrandingColors } from "../utils/Colors";

import { useAppSelector } from "../redux/hook";
import { openCardDetails, openFilterLiveWall } from "../redux/Modal.slice";

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

const appreciationsLivewall = () => {
  const ModalFilterStatus = useAppSelector(
    (state) => state.Modals.openFilterLiveWall.isOpen
  );

  const ModalCardDetailsStatus = useAppSelector(
    (state) => state.Modals.openCardDetails.isOpen
  );

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
            {/* individual */}
            <CardComponent
              cardType="individual"
              date="22/07/2021"
              receiver="Alan Milbrow"
              receiverJobDesc="People Propositions & Engagement Lead (UK & ROI)"
              title="Testing Thanks !"
              sender="Charlotte Sims"
              senderJobDesc="People Services Specialist (Secondment)"
              gif="https://inoccent-afk.github.io/portfolioinoc/load.d699b3a7.gif"
              value="We take responsibility"
              event={openCardDetails()}
            />
            {/* Team */}
            <CardComponent
              cardType="team"
              date="22/07/2021"
              receiver="Alan Milbrow"
              receiverJobDesc="People Propositions & Engagement Lead (UK & ROI)"
              title="Testing Thanks !"
              sender="Charlotte Sims"
              senderJobDesc="People Services Specialist (Secondment)"
              value="We take responsibility"
              event={openCardDetails()}
            />
            {/* Store */}
            <CardComponent
              cardType="store"
              date="22/07/2021"
              receiver="Alan Milbrow"
              receiverJobDesc="People Propositions & Engagement Lead (UK & ROI)"
              title="Testing Thanks !"
              sender="Charlotte Sims"
              senderJobDesc="People Services Specialist (Secondment)"
              value="We take responsibility"
              event={openCardDetails()}
            />
            {/* individual */}
            <CardComponent
              cardType="individual"
              date="22/07/2021"
              receiver="Alan Milbrow"
              receiverJobDesc="People Propositions & Engagement Lead (UK & ROI)"
              title="Testing Thanks !"
              sender="Charlotte Sims"
              senderJobDesc="People Services Specialist (Secondment)"
              gif="https://inoccent-afk.github.io/portfolioinoc/load.d699b3a7.gif"
              value="We take responsibility"
              event={openCardDetails()}
            />
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
