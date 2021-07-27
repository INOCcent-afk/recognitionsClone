import React from "react";

import styled from "styled-components";

type Props = {
  icon: React.ReactNode;
  text: string;
  qualityColor: string;
  onClick?: any;
};

const Quality: React.FC<Props> = ({
  icon,
  text,
  qualityColor,
  onClick,
}: Props) => {
  return (
    <QualityStyled
      className="rounded-only"
      qualityColor={qualityColor}
      onClick={onClick}
    >
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
  cursor: pointer;

  p {
    font-size: 14px;
  }
`;
