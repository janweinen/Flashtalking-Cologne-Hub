import React from "react";
import styled from "styled-components";
import pkg from "../../../package.json";

const FooterContainer = styled.footer`
  width: 100%;
  color: #374047;
  font-size: 9px;
  text-align: center;
  padding: 5px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      flashtalking|cologne. v{pkg.version} &copy; Simplicity Marketing Ltd. 2020
      – Flashtalking is a trademark of Simplicity Marketing Ltd.
    </FooterContainer>
  );
};

export default Footer;
