import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardContainer = styled.div`
  width: calc(50% - 30px);
  margin: 20px 0 0 20px;
  cursor: pointer;
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  display: inline-block;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 48px;
  vertical-align: middle;
  color: #ffffff;
`;

const IconContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 3px solid #ffffff;
  border-radius: 3px;
  display: inline-block;
`;

const TitleContainer = styled.div`
  margin-top: 20px;
  display: inline-block;
  vertical-align: top;
  font-size: 20px;
  color: #ffffff;
`;

const TextContainer = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

const Link = styled.a`
  display: block;
`;

const Card = props => {
  return (
    <CardContainer bgColor={props.bgColor}>
      <Link href={props.href} target="_blank">
        <IconContainer>
          <Icon icon={["fas", props.icon]} />
        </IconContainer>
        <TitleContainer>
          {props.title}
          <TextContainer>{props.text}</TextContainer>
        </TitleContainer>
      </Link>
    </CardContainer>
  );
};

export default Card;
