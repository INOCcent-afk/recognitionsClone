import React from "react";

import { BrandingColors } from "../../utils/Colors";

import PageContainer from "../../containers/PageContainer";
import LargeButton from "../../ui/LargeButton";
import PageHeader from "../../ui/PageHeader";

import StoreIcon from "../../icons/StoreIcon";
import UserIcon from "../../icons/UserIcon";
import UserGroup from "../../icons/UserGroup";

import styled from "styled-components";
import Link from "next/link";
import { ScreenSizes } from "../../utils/Screens";

const SendAppreciations = () => {
  return (
    <>
      <PageHeader
        bgColor={BrandingColors.blue}
        title="Send an appreciation"
        subtitle="Say thank you"
        isButton={false}
      />
      <PageContainer>
        <PageSendWrapper>
          <PageLeftPanel>
            <LargeButton
              link="say-thanks"
              title="To an individual"
              desc="Show your appreciation to someone who has gone above and beyond."
              icon={<UserIcon width="30" height="30" />}
            />
            <LargeButton
              link="say-thanks-team"
              title="To an individual"
              desc="Show your appreciation to someone who has gone above and beyond."
              icon={<UserGroup width="30" height="30" />}
            />
            <LargeButton
              link="say-thanks-group"
              title="To an individual"
              desc="Show your appreciation to someone who has gone above and beyond."
              icon={<StoreIcon width="30" height="30" />}
            />
          </PageLeftPanel>
          <PageRightPanel>
            <h3>
              What are the differences between the four appreciation types?
            </h3>
            <h4>Individual appreciation</h4>
            <p>
              Show your appreciation to someone who has gone above and beyond,
              and demonstrated what it really means to live and breathe one of
              Our values.
            </p>
            <ul>
              <h5>The person you thank will receive:</h5>
              <li>An email containing your appreciation</li>
              <li>A message posted for others to see</li>
              <li>A chance to win £100/€100 of WOWPoints</li>
              <li>The chance to become an annual winner</li>
            </ul>
            <hr />
            <h4>Team appreciation</h4>
            <p>
              Send your appreciation to a group of people who have worked
              together as a team, demonstrating one of our values and achieving
              great outcomes.
            </p>
            <ul>
              <h5>The team you thank will receive:</h5>
              <li>An email containing your appreciation</li>
              <li>A message posted for others to see</li>
              <li>A chance to win £100/€100 of WOWPoints</li>
              <li>The chance to become an annual winning team</li>
            </ul>
            <hr />
            <h4>Store appreciation</h4>
            <p>
              Send your appreciation to everyone in a retail store who have
              worked together as a team, demonstrating one of our values and
              achieving great outcomes.
            </p>
            <ul>
              <h5>The store team you thank will each receive:</h5>
              <li>An email containing your appreciation</li>
              <li>A message posted for others to see</li>
              <li>A chance to win £100/€100 of WOWPoints</li>
              <li>The chance to become an annual winning team</li>
            </ul>
            <hr />
          </PageRightPanel>
        </PageSendWrapper>
      </PageContainer>
    </>
  );
};

export default SendAppreciations;

export const PageSendWrapper = styled.div`
  max-width: 1388px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-direction: column;

  @media only screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const PageLeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 30%;
`;

export const PageRightPanel = styled.div`
  flex-basis: 70%;
  background: ${BrandingColors.gray};
  border-radius: 8px;
  padding: 24px;
  color: white;

  h3 {
    font-size: 1.75rem;
    font-weight: normal;
    line-height: 1.5;
  }

  h4 {
    font-weight: normal;
    font-size: 1.5rem;
  }

  h5 {
    font-size: 20px;
    margin-top: 20px;
  }

  p {
    margin: 10px 0;
    line-height: 25px;
    font-size: 16px;
  }

  li {
    margin: 8px 0 5px 30px;
  }

  hr {
    opacity: 0.6;
    margin: 20px 0;
  }
`;
