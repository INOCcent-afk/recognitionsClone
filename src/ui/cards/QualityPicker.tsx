import React from "react";

import { BrandingColors } from "../../utils/Colors";
import { useAppDispatch } from "../../redux/hook";
import { setCardValue } from "../../redux/data.slice";
import {
  step3Done,
  step4Done,
  step4View,
  step5View,
} from "../../redux/SendForm.slice";
import { isIndividual, isStore } from "../../utils/checkPath";
import { useRouter } from "next/router";

import StarIcon from "../../icons/StarIcon";
import Quality from "./Quality";

import styled from "styled-components";

const QualityPicker = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const pathID = router.query.id;

  return (
    <>
      <QualityPickerTitle>
        <h4>Select the value demonstrated</h4>
      </QualityPickerTitle>
      <QualityPickerStyled>
        <Quality
          qualityColor={BrandingColors.blue}
          text="We work as one team"
          icon={<StarIcon />}
          onClick={() => {
            dispatch(setCardValue("We work as one team")),
              isIndividual(pathID) || isStore(pathID)
                ? (dispatch(step3Done()), dispatch(step4View()))
                : (dispatch(step4Done()), dispatch(step5View()));
          }}
        />
        <Quality
          qualityColor={BrandingColors.violet}
          text="We focus on the customer"
          icon={<StarIcon />}
          onClick={() => {
            dispatch(setCardValue("We focus on the customer")),
              isIndividual(pathID) || isStore(pathID)
                ? (dispatch(step3Done()), dispatch(step4View()))
                : (dispatch(step4Done()), dispatch(step5View()));
          }}
        />
        <Quality
          qualityColor={BrandingColors.pink}
          text="We go beyond the expected"
          icon={<StarIcon />}
          onClick={() => {
            dispatch(setCardValue("We go beyond the expected")),
              isIndividual(pathID) || isStore(pathID)
                ? (dispatch(step3Done()), dispatch(step4View()))
                : (dispatch(step4Done()), dispatch(step5View()));
          }}
        />
        <Quality
          qualityColor={BrandingColors.blue}
          text="We take responsibilty"
          icon={<StarIcon />}
          onClick={() => {
            dispatch(setCardValue("We take responsibilty")),
              isIndividual(pathID) || isStore(pathID)
                ? (dispatch(step3Done()), dispatch(step4View()))
                : (dispatch(step4Done()), dispatch(step5View()));
          }}
        />
      </QualityPickerStyled>
    </>
  );
};

export default QualityPicker;

export const QualityPickerTitle = styled.div`
  margin: 20px 0;
`;

export const QualityPickerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > div:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.5;
  }
`;
