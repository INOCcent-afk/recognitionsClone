import React from "react";

import { BrandingColors } from "../utils/Colors";

import { useAppSelector } from "../redux/hook";
import { openCardFilterMyWall } from "../redux/Modal.slice";

import PageContainer from "../containers/PageContainer";
import PageHeader from "../ui/PageHeader";
import ModalContainer from "../ui/Modals/ModalContainer";
import ModalFilterMyWall from "../ui/Modals/ModalFilterMyWall";

const MyAppreciations: React.FC = () => {
  const ModalStatus = useAppSelector(
    (state) => state.Modals.openFilterMyWall.isOpen
  );

  return (
    <>
      <PageHeader
        bgColor={BrandingColors.pink}
        title="My appreciations"
        subtitle="View all appreciations you have received"
        DispatchEvent={openCardFilterMyWall()}
      />
      {ModalStatus ? (
        <ModalContainer>
          <ModalFilterMyWall DispatchEvent={openCardFilterMyWall()} />
        </ModalContainer>
      ) : null}

      <PageContainer>
        <h1></h1>
      </PageContainer>
    </>
  );
};

export default MyAppreciations;
