import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import styled from "styled-components";
import Background from "../../images/hub-bg.png";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faFolderOpen,
  faExpand,
  faCircleNotch,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

library.add(faUser, faFolderOpen, faExpand, faCircleNotch, faSignOutAlt);

const Main = styled.div`
  height: 100vh;
  font-family: Open Sans;
  background-image: url(${Background}),
    linear-gradient(to right, #374047 0%, #4a5258 50%);
`;

const Content = styled.div`
  margin: 60px auto;
  max-width: 80%;
`;

const Body = () => {
  return (
    <Main>
      <Header />
      <Content>
        <Card
          href="https://www.flashtalking.info/library/"
          title="Library"
          bgColor="#9b0649"
          icon="folder-open"
          text="Store demolinks and files."
        />
        <Card
          href="#"
          title="Placeholder"
          bgColor="darkgrey"
          icon="expand"
          text="Lorem ipsum dolor sit amet."
        />
        <Card
          href="#"
          title="Placeholder"
          bgColor="darkgrey"
          icon="expand"
          text="Lorem ipsum dolor sit amet."
        />
        <Card
          href="#"
          title="Placeholder"
          bgColor="darkgrey"
          icon="expand"
          text="Lorem ipsum dolor sit amet."
        />
        <Card
          href="#"
          title="Placeholder"
          bgColor="darkgrey"
          icon="expand"
          text="Lorem ipsum dolor sit amet."
        />
        <Card
          href="#"
          title="Placeholder"
          bgColor="darkgrey"
          icon="expand"
          text="Lorem ipsum dolor sit amet."
        />
      </Content>
      <Footer />
    </Main>
  );
};

export default Body;
