import React from "react";

import { useAppDispatch, useAppSelector } from "../redux/hook";
import { ScreenSizes } from "../utils/Screens";

import classNames from "classnames";

import styled from "styled-components";

import {
  step1View,
  step2View,
  step3View,
  step4View,
  step5View,
  step6View,
} from "../redux/SendForm.slice";

type Props = {
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  step6?: string;
};

const CardPickerSteps: React.FC<Props> = ({
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
}: Props) => {
  const dispatch = useAppDispatch();

  const stepOneView = useAppSelector((state) => state.SendForm.step1.onView);
  const stepTwoView = useAppSelector((state) => state.SendForm.step2.onView);
  const stepThreeView = useAppSelector((state) => state.SendForm.step3.onView);
  const stepFourView = useAppSelector((state) => state.SendForm.step4.onView);
  const stepFiveView = useAppSelector((state) => state.SendForm.step5.onView);
  const stepSixView = useAppSelector((state) => state.SendForm.step6.onView);

  const stepOneDone = useAppSelector((state) => state.SendForm.step1.isDone);
  const stepTwoDone = useAppSelector((state) => state.SendForm.step2.isDone);
  const stepThreeDone = useAppSelector((state) => state.SendForm.step3.isDone);
  const stepFourDone = useAppSelector((state) => state.SendForm.step4.isDone);
  const stepFiveDone = useAppSelector((state) => state.SendForm.step5.isDone);
  const stepSixDone = useAppSelector((state) => state.SendForm.step6.isDone);

  let liClassNames1 = classNames({
    activeView: stepOneView,
    isClickable: stepOneDone,
  });
  let liClassNames2 = classNames({
    activeView: stepTwoView,
    isClickable: stepTwoDone,
  });
  let liClassNames3 = classNames({
    activeView: stepThreeView,
    isClickable: stepThreeDone,
  });
  let liClassNames4 = classNames({
    activeView: stepFourView,
    isClickable: stepFourDone,
  });
  let liClassNames5 = classNames({
    activeView: stepFiveView,
    isClickable: stepFiveDone,
  });
  let liClassNames6 = classNames({
    activeView: stepSixView,
    isClickable: stepSixDone,
  });

  return (
    <>
      <CardPickerStepsStyled>
        <li className={liClassNames1} onClick={() => dispatch(step1View())}>
          1.{stepOneDone ? "Edit" : "Add"} {step1}
        </li>
        <li className={liClassNames2} onClick={() => dispatch(step2View())}>
          2.{stepTwoDone ? "Edit" : "Add"} {step2}
        </li>
        <li className={liClassNames3} onClick={() => dispatch(step3View())}>
          3.{stepThreeDone ? "Edit" : "Add"} {step3}
        </li>
        <li className={liClassNames4} onClick={() => dispatch(step4View())}>
          4.{stepFourDone ? "Edit" : "Add"} {step4}
        </li>
        <li className={liClassNames5} onClick={() => dispatch(step5View())}>
          5.{step5 !== "Preview & send" ? (stepFiveDone ? "Edit" : "Add") : ""}{" "}
          {step5}
        </li>
        {step6 ? (
          <li className={liClassNames6} onClick={() => dispatch(step6View())}>
            6.{step6}
          </li>
        ) : null}
      </CardPickerStepsStyled>
    </>
  );
};

export default CardPickerSteps;

export const CardPickerStepsStyled = styled.ul`
  display: flex;
  color: white;
  gap: 40px;
  flex-wrap: wrap;
  li {
    cursor: pointer;
    opacity: 0.2;
    font-weight: 500;
    pointer-events: none;
    list-style: none;
    font-size: 14px;
  }

  .activeView {
    opacity: 1;
  }

  .isClickable {
    pointer-events: all;
    opacity: 1;
  }

  @media only screen and (min-width: ${ScreenSizes.xl}) {
    flex-direction: column;

    li {
      font-size: 18px;
    }
  }
`;
