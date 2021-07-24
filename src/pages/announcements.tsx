import React from "react";

import { BrandingColors } from "../utils/Colors";

import PageContainer from "../containers/PageContainer";
import PageHeader from "../ui/PageHeader";

const Announcements = () => {
  return (
    <>
      <PageHeader
        bgColor={BrandingColors.violet}
        title="Announcements"
        subtitle="Novemember 2021"
        isButton={false}
      />
      <PageContainer>
        <h1></h1>
      </PageContainer>
    </>
  );
};

export default Announcements;
