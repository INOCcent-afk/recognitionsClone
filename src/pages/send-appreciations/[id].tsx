import React from "react";

import { BrandingColors } from "../../utils/Colors";
import { useRouter } from "next/router";
import { isIndividual, isStore, isTeam } from "../../utils/checkPath";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

import PageHeader from "../../ui/PageHeader";

import styled from "styled-components";
import CardPickerSteps from "../../ui/CardPickerSteps";
import InputSearch from "../../ui/inputs/InputSearch";
import CardPreviewIcon from "../../icons/CardPreviewIcon";
import Button from "../../ui/Button";
import {
  defaultState,
  step1Done,
  step2Done,
  step2View,
  step3Done,
  step3View,
  step4Done,
  step4View,
  step5Done,
  step5View,
  step6View,
} from "../../redux/SendForm.slice";
import { ScreenSizes } from "../../utils/Screens";

const SayThanks = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [title, setTitle] = React.useState("individual");
  const [cardData, setCardData] = React.useState({
    date: "",
    receiver: "",
    receiverJobDesc: "",
    icon: "",
    title: "",
    content: "",
    sender: "",
    senderJobDesc: "",
    gif: "",
    cardType: "",
    value: "",
    members: "",
    membersCount: "",
  });

  const stepOneView = useAppSelector((state) => state.SendForm.step1.onView);
  const stepTwoView = useAppSelector((state) => state.SendForm.step2.onView);
  const stepThreeView = useAppSelector((state) => state.SendForm.step3.onView);
  const stepFourView = useAppSelector((state) => state.SendForm.step4.onView);
  const stepFiveView = useAppSelector((state) => state.SendForm.step5.onView);
  const stepSixView = useAppSelector((state) => state.SendForm.step6.onView);

  const pathID = router.query.id;

  React.useEffect(() => {
    if (isIndividual(pathID)) {
      setTitle("Individual");
    } else if (isTeam(pathID)) {
      setTitle("Team");
    } else if (isStore(pathID)) {
      setTitle("Store");
    }

    dispatch(defaultState());
  }, []);

  return (
    <>
      <PageHeader
        bgColor={BrandingColors.blue}
        title={`Send an ${title} appreciation`}
        subtitle="Say thank you"
        isButton={false}
        isButtonClose={true}
      />
      <CardPickerStyled>
        <CardPickerLeftPanel>
          {isIndividual(pathID) ? (
            <CardPickerSteps
              step1="recipient"
              step2="Card title"
              step3="a value"
              step4="message"
              step5="Preview & send"
            />
          ) : null}
          {isTeam(pathID) ? (
            <CardPickerSteps
              step1="recipient"
              step2="team name"
              step3="card title"
              step4="a value"
              step5="message"
              step6="Preview & send"
            />
          ) : null}
          {isStore(pathID) ? (
            <CardPickerSteps
              step1="store"
              step2="a card title"
              step3="a value"
              step4="messsage"
              step5="Preview & send"
            />
          ) : null}
        </CardPickerLeftPanel>
        <CardPickerMiddlePanel>
          {stepOneView ? (
            <CardPickerMiddlePanelWrapper>
              <InputSearch
                placeholder={
                  isIndividual(pathID)
                    ? "Enter a recipients name"
                    : isTeam(pathID)
                    ? "Enter a recipients name"
                    : isStore(pathID)
                    ? "Enter a store"
                    : ""
                }
                value={cardData.receiver}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCardData({ ...cardData, receiver: e.target.value })
                }
              />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepTwoView ? (
            <CardPickerMiddlePanelWrapper>
              <InputSearch
                placeholder="Add card title"
                value={cardData.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setCardData({ ...cardData, title: e.target.value })
                }
              />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepThreeView ? (
            <CardPickerMiddlePanelWrapper>
              <h1>Step 3</h1>
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepFourView ? (
            <CardPickerMiddlePanelWrapper>
              <h1>Step 4</h1>
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepFiveView ? (
            <CardPickerMiddlePanelWrapper>
              <h1>Step 5</h1>
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepSixView ? (
            <CardPickerMiddlePanelWrapper>
              <h1>Step 6</h1>
            </CardPickerMiddlePanelWrapper>
          ) : null}
          <pre>{JSON.stringify(cardData, null, 2)}</pre>
          {isTeam(pathID) && !stepSixView ? (
            <NextStepWrapper
              onClick={() => {
                stepOneView
                  ? (dispatch(step1Done()), dispatch(step2View()))
                  : stepTwoView
                  ? (dispatch(step2Done()), dispatch(step3View()))
                  : stepThreeView
                  ? (dispatch(step3Done()), dispatch(step4View()))
                  : stepFourView
                  ? (dispatch(step4Done()), dispatch(step5View()))
                  : stepFiveView
                  ? (dispatch(step5Done()), dispatch(step6View()))
                  : null;
              }}
            >
              <Button buttonType="squared">Continue</Button>
            </NextStepWrapper>
          ) : isIndividual(pathID) || isStore(pathID) ? (
            !stepFiveView ? (
              <NextStepWrapper
                onClick={() => {
                  stepOneView
                    ? (dispatch(step1Done()), dispatch(step2View()))
                    : stepTwoView
                    ? (dispatch(step2Done()), dispatch(step3View()))
                    : stepThreeView
                    ? (dispatch(step3Done()), dispatch(step4View()))
                    : stepFourView
                    ? (dispatch(step4Done()), dispatch(step5View()))
                    : stepFiveView
                    ? (dispatch(step5Done()), dispatch(step6View()))
                    : null;
                }}
              >
                <Button buttonType="squared">Continue</Button>
              </NextStepWrapper>
            ) : null
          ) : null}
        </CardPickerMiddlePanel>
        <CardPickerRightPanel>
          <h4>Card Preview</h4>
          <CardPreviewSvg>
            <CardPreviewIcon />
            <p>
              View how your card will appear on the Appreciations live wall.
            </p>
          </CardPreviewSvg>
        </CardPickerRightPanel>
      </CardPickerStyled>
    </>
  );
};

export default SayThanks;

export const CardPickerStyled = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: white;
  flex-direction: column;
  margin: 0 auto 80px auto;

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    margin: 80px auto;
  }

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    flex-direction: row;
  }
`;

export const CardPickerLeftPanel = styled.div`
  flex-basis: 20%;
  margin: 20px;
`;

export const CardPickerMiddlePanel = styled.div`
  background-color: ${BrandingColors.gray};
  flex-basis: 40%;
  padding: 30px 20px 20px 20px;
  width: 100%;
  min-height: 650px;
  position: relative;

  @media only screen and (min-width: ${ScreenSizes.lg}) {
    border-radius: 10px;
  }
`;

export const CardPickerMiddlePanelWrapper = styled.div`
  padding: 0 20px;
  min-height: 400px;
`;

export const CardPickerRightPanel = styled.div`
  background-color: ${BrandingColors.gray};
  flex-basis: 35%;
  padding: 30px 40px 20px 40px;
  border-radius: 10px;
  min-height: 650px;
  display: none;

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    display: block;
  }
`;

export const CardPreviewSvg = styled.div`
  position: relative;

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 14px;
    opacity: 0.6;
    width: 60%;
  }
`;

export const NextStepWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;
