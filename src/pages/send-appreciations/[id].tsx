import React from "react";

import { BrandingColors } from "../../utils/Colors";
import { useRouter } from "next/router";
import { isIndividual, isStore, isTeam } from "../../utils/checkPath";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { ScreenSizes } from "../../utils/Screens";
import { getUsers } from "../../utils/api/getUsers";
import { useMutation, useQuery } from "react-query";
import { getGifs } from "../../utils/api/getGifs";

import {
  setCardDefaultState,
  setCardReceiver,
  setCardSender,
  setCardSenderJobDesc,
  setCardTeamName,
  setCardTitle,
  setCardType,
} from "../../redux/data.slice";

import PageHeader from "../../ui/PageHeader";
import styled from "styled-components";
import CardPickerSteps from "../../ui/CardPickerSteps";
import InputSearch from "../../ui/inputs/InputSearch";
import CardPreviewIcon from "../../icons/CardPreviewIcon";
import Button from "../../ui/Button";
import SearchDropdown from "../../ui/searchDropdown";
import QualityPicker from "../../ui/cards/QualityPicker";
import InputMessage from "../../ui/inputs/InputMessage";
import CardPreview from "../../ui/cards/CardPreview";
import ModalContainer from "../../ui/Modals/ModalContainer";
import ModalGif from "../../ui/Modals/ModalGif";

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
import { createCard } from "../../utils/api/newCard";
import { useSession } from "next-auth/client";

const SayThanks: React.FC = ({ users, gifs }: any) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [session] = useSession();

  const [title, setTitle] = React.useState("individual");

  const stepOneView = useAppSelector((state) => state.SendForm.step1.onView);
  const stepTwoView = useAppSelector((state) => state.SendForm.step2.onView);
  const stepThreeView = useAppSelector((state) => state.SendForm.step3.onView);
  const stepFourView = useAppSelector((state) => state.SendForm.step4.onView);
  const stepFiveView = useAppSelector((state) => state.SendForm.step5.onView);
  const stepSixView = useAppSelector((state) => state.SendForm.step6.onView);

  const stepOneDone = useAppSelector((state) => state.SendForm.step1.isDone);

  const DataReceiver = useAppSelector((state) => state.CardData.receiver);
  const DataTitle = useAppSelector((state) => state.CardData.title);
  const DataTeamName = useAppSelector((state) => state.CardData.teamName);
  const DataContent = useAppSelector((state) => state.CardData.content);
  const cardData = useAppSelector((state) => state.CardData);

  const pathID = router.query.id;

  const { data: usersData } = useQuery("users", getUsers, {
    initialData: users,
  });

  const { data: gifsData } = useQuery("gifs", getGifs, {
    initialData: gifs,
  });

  const { mutateAsync: AddCard } = useMutation(createCard);

  const ModalGifStatus = useAppSelector(
    (state) => state.Modals.openCardGif.isOpen
  );

  const name = session?.user?.name;
  const email = session?.user?.email;

  React.useEffect(() => {
    if (isIndividual(pathID)) {
      setTitle("Individual");
    } else if (isTeam(pathID)) {
      setTitle("Team");
    } else if (isStore(pathID)) {
      setTitle("Store");
    }

    dispatch(defaultState());
    dispatch(setCardDefaultState());
    dispatch(setCardSender(name));
    dispatch(setCardSenderJobDesc(email));
  }, []);

  React.useEffect(() => {
    dispatch(setCardType(title));
  }, [title]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    AddCard(cardData);
    router.push("/send-appreciations");
  };

  return (
    <>
      <PageHeader
        bgColor={BrandingColors.blue}
        title={`Send an ${title} appreciation`}
        subtitle="Say thank you"
        isButton={false}
        isButtonClose={true}
      />
      {ModalGifStatus ? (
        <ModalContainer>
          <ModalGif data={gifsData} />
        </ModalContainer>
      ) : null}
      {/* <pre style={{ color: "white" }}>{JSON.stringify(cardData, null, 2)}</pre> */}
      <CardPickerStyled onSubmit={handleSubmit}>
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
                value={DataReceiver}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setCardReceiver(e.target.value))
                }
              />
              {DataReceiver ? (
                <SearchDropdown receiver={DataReceiver} data={usersData} />
              ) : null}
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {isIndividual(pathID) || isStore(pathID) ? (
            stepTwoView ? (
              <CardPickerMiddlePanelWrapper>
                <InputSearch
                  placeholder="Add card title"
                  value={DataTitle}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    dispatch(setCardTitle(e.target.value))
                  }
                />
              </CardPickerMiddlePanelWrapper>
            ) : null
          ) : stepTwoView ? (
            <CardPickerMiddlePanelWrapper>
              <InputSearch
                placeholder="Add team title"
                value={DataTeamName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setCardTeamName(e.target.value))
                }
              />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {isIndividual(pathID) || isStore(pathID) ? (
            stepThreeView ? (
              <CardPickerMiddlePanelWrapper>
                <QualityPicker />
              </CardPickerMiddlePanelWrapper>
            ) : null
          ) : stepThreeView ? (
            <CardPickerMiddlePanelWrapper>
              <InputSearch
                placeholder="Add card title"
                value={DataTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setCardTitle(e.target.value))
                }
              />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {isIndividual(pathID) || isStore(pathID) ? (
            stepFourView ? (
              <CardPickerMiddlePanelWrapper>
                <InputMessage />
              </CardPickerMiddlePanelWrapper>
            ) : null
          ) : stepFourView ? (
            <CardPickerMiddlePanelWrapper>
              <QualityPicker />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {isIndividual(pathID) || isStore(pathID) ? (
            stepFiveView ? (
              <CardPickerMiddlePanelWrapper>
                <CardPreview />
              </CardPickerMiddlePanelWrapper>
            ) : null
          ) : stepFiveView ? (
            <CardPickerMiddlePanelWrapper>
              <InputMessage />
            </CardPickerMiddlePanelWrapper>
          ) : null}
          {stepSixView ? (
            <CardPickerMiddlePanelWrapper>
              <CardPreview />
            </CardPickerMiddlePanelWrapper>
          ) : null}

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
              <Button
                buttonType="squared"
                disabled={
                  stepOneView
                    ? true
                    : stepTwoView && !DataTeamName.length
                    ? true
                    : stepFiveView && !DataContent.length
                    ? true
                    : stepThreeView && !DataTitle.length
                    ? true
                    : false
                }
              >
                Continue
              </Button>
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
                <Button
                  buttonType="squared"
                  disabled={
                    stepOneView
                      ? true
                      : !DataTitle.length
                      ? true
                      : stepFourView && !DataContent.length
                      ? true
                      : stepThreeView
                      ? true
                      : false
                  }
                >
                  Continue
                </Button>
              </NextStepWrapper>
            ) : null
          ) : null}
        </CardPickerMiddlePanel>
        <CardPickerRightPanel>
          {stepOneView && !stepOneDone ? (
            <PreviewTemplateStyled>
              <h4>Card Preview</h4>
              <CardPreviewSvg>
                <CardPreviewIcon />
                <p>
                  View how your card will appear on the Appreciations live wall.
                </p>
              </CardPreviewSvg>
            </PreviewTemplateStyled>
          ) : isIndividual(pathID) || isStore(pathID) ? (
            !stepFiveView ? (
              <CardPreview />
            ) : (
              <PrivacyStyled>
                <p>Who will see this appreciation card?</p>
                <p>
                  All appreciation cards are set to be shared on the
                  appreciations live wall by default so that others can share
                  the recognition of their colleagues.
                </p>
                <p>
                  However if you would prefer not to share your thank you card
                  publicly you can choose to keep the card private for the
                  recipient.
                </p>
                <p>Who will see this appreciation card?</p>
                <p>
                  All appreciation cards are set to be shared on the
                  appreciations live wall by default so that others can share
                  the recognition of their colleagues.
                </p>
                <p>
                  However if you would prefer not to share your thank you card
                  publicly you can choose to keep the card private for the
                  recipient.
                </p>
                <NextStepWrapper>
                  <Button buttonType="squared" type="submit">
                    Continue
                  </Button>
                </NextStepWrapper>
              </PrivacyStyled>
            )
          ) : isTeam(pathID) ? (
            !stepSixView ? (
              <CardPreview />
            ) : (
              <PrivacyStyled>
                <p>Who will see this appreciation card?</p>
                <p>
                  All appreciation cards are set to be shared on the
                  appreciations live wall by default so that others can share
                  the recognition of their colleagues.
                </p>
                <p>
                  However if you would prefer not to share your thank you card
                  publicly you can choose to keep the card private for the
                  recipient.
                </p>
                <p>Who will see this appreciation card?</p>
                <p>
                  All appreciation cards are set to be shared on the
                  appreciations live wall by default so that others can share
                  the recognition of their colleagues.
                </p>
                <p>
                  However if you would prefer not to share your thank you card
                  publicly you can choose to keep the card private for the
                  recipient.
                </p>
                <NextStepWrapper>
                  <Button buttonType="squared" type="submit">
                    Continue
                  </Button>
                </NextStepWrapper>
              </PrivacyStyled>
            )
          ) : null}
        </CardPickerRightPanel>
      </CardPickerStyled>
    </>
  );
};

export default SayThanks;

export const CardPickerStyled = styled.form`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: normal;
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

export const PrivacyStyled = styled.div`
  p {
    margin-bottom: 20px;
  }
`;

export const CardPickerMiddlePanel = styled.div`
  background-color: ${BrandingColors.gray};
  flex-basis: 40%;
  padding: 30px 20px 80px 20px;
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
  background-color: black;
  position: relative;
  flex-basis: 35%;
  padding: 30px 40px 80px 40px;
  border-radius: 10px;
  min-height: 300px;
  margin: 30px 0;

  .preview-card-inside {
    display: none;
  }

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    background-color: ${BrandingColors.gray};
    display: block;
    margin: unset;

    .preview-card-inside {
      display: block;
    }
  }
`;

export const PreviewTemplateStyled = styled.div`
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

export const getServerSideProps = async () => {
  const users = await getUsers();
  const gifs = await getGifs();

  return {
    props: { users, gifs },
  };
};
