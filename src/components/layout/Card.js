import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardContainer = styled.div`
  width: calc(50% - 30px);
  margin: 20px 0 20px 20px;
  height: 160px;
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
`;

const Card = props => {
  return (
    <CardContainer bgColor={props.bgColor}>
      <IconContainer>
        <Icon icon={["fas", props.icon]} />
      </IconContainer>
      <a href={props.href}>{props.title}</a>
    </CardContainer>
  );
};

export default Card;
