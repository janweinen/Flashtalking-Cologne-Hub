import React, { useState, useEffect } from "react";
import { auth } from "./components/Firebase";
import Login from "./components/layout/Login";
import Body from "./components/layout/Body";
import { DataProvider } from "./components/Context";

import "./styles.css";

const App = () => {
  const returnNameFromEmail = (email) => {
    if (typeof email !== "string") return "";
    const rawName = email.split("@");
    //const names = rawName[0].split(".");
    //const forname = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    //const surname = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    //return forname + " " + surname;
    return rawName[0];
  };
  const [data, setData] = useState({ signedIn: false });
  useEffect(() => {
    let collection = {};
    try {
      auth.onAuthStateChanged((user) => {
        if (user) {
          collection = {
            signedIn: true,
            user: {
              uid: user.uid,
              email: user.email,
              name: returnNameFromEmail(user.email)
            }
          };
          setData(collection);
        } else {
          collection = {
            signedIn: false
          };
          setData(collection);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <DataProvider value={data}>
      <div>{data.signedIn ? <Body /> : <Login />}</div>
    </DataProvider>
  );
};

export default App;
