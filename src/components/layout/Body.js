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
  faSignOutAlt,
  faPalette,
  faMapMarked,
  faTasks
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

library.add(
  faUser,
  faFolderOpen,
  faExpand,
  faCircleNotch,
  faSignOutAlt,
  faPalette,
  faMapMarked,
  faTasks
);

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
          bgColor="#d11560"
          icon="folder-open"
          text="Store ad previews and files."
        />
        <Card
          href="https://www.flashtalking.info/preview/setup/"
          title="Creative Preview"
          bgColor="#1771B9"
          icon="palette"
          text="Create ad previews."
        />
        <Card
          href="https://flashtalking.info/Studio/Streiko/defaultStores/"
          title="Storelocator Default Generator"
          bgColor="#40b658"
          icon="map-marked"
          text="Create proximity data for storelocator."
        />
        <Card
          href="https://www.flashtalking.info/TCFBulkRegen/"
          title="TCF Bulk Regen"
          bgColor="#d95652"
          icon="tasks"
          text="Regenerate tags to be TCF compliant"
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
