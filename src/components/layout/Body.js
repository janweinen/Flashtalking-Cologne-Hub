import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import styled from "styled-components";

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

const style = {
  body: {
    height: "100vh",
    fontFamily: "Open Sans",
    backgroundColor: "#f4f5f5"
  }
};

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
`;
const Body = () => {
  return (
    <div style={style.body}>
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
    </div>
  );
};

export default Body;
