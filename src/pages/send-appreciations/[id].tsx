import React from "react";

import { BrandingColors } from "../../utils/Colors";
import { useRouter } from "next/router";

import PageHeader from "../../ui/PageHeader";

import styled from "styled-components";

const SayThanks = () => {
  const router = useRouter();
  const [title, setTitle] = React.useState("individual");

  React.useEffect(() => {
    if (router.query.id === "say-thanks") {
      setTitle("Individual");
    } else if (router.query.id === "say-thanks-team") {
      setTitle("Team");
    } else if (router.query.id === "say-thanks-group") {
      setTitle("Store");
    }
  }, [router]);

  return (
    <>
      <PageHeader
        bgColor={BrandingColors.blue}
        title={`Send an ${title} appreciation`}
        subtitle="Say thank you"
        isButton={false}
        isButtonClose={true}
      />
      <SayThanksContainerStyled>
        {router.query.id === "say-thanks" ? <div>say Thanks</div> : null}
        {router.query.id === "say-thanks-team" ? (
          <div>say Thanks Team</div>
        ) : null}
        {router.query.id === "say-thanks-group" ? (
          <div>say Thanks Group</div>
        ) : null}
      </SayThanksContainerStyled>
    </>
  );
};

export default SayThanks;

export const SayThanksContainerStyled = styled.div`
  max-width: 1388px;
  background-color: red;
  margin: 30px auto;
  display: flex;
`;
