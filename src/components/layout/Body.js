import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faFolderOpen,
  faExpand
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";

library.add(faUser, faFolderOpen, faExpand);

const style = {
  body: {
    height: "100vh",
    fontFamily: "Open Sans",
    backgroundColor: "#f4f5f5"
  }
};

const Body = () => {
  return (
    <div style={style.body}>
      <Header />
      <Card
        href="https://www.flashtalking.info/app/"
        title="FTCologne"
        bgColor="#9b0649"
        icon="folder-open"
      />
      <Card
        href="https://www.flashtalking.info/app/"
        title="FTCologne"
        bgColor="lightgrey"
        icon="expand"
      />
      <Footer />
    </div>
  );
};

export default Body;
