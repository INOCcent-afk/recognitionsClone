import React from "react";

import styled from "styled-components";

type Props = {
  icon: React.ReactNode;
  text: string;
  qualityColor: string;
};

const Quality: React.FC<Props> = ({ icon, text, qualityColor }: Props) => {
  return (
    <QualityStyled qualityColor={qualityColor}>
      <p>{text}</p>
      {icon}
    </QualityStyled>
  );
};

export default Quality;

export const QualityStyled = styled.div<{ qualityColor: string }>`
  background: ${(props) => props.qualityColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  color: #fff;

  p {
    font-size: 14px;
  }
`;
