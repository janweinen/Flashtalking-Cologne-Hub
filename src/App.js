import React, { useState, useEffect } from "react";
import { auth } from "./components/Firebase";
import Login from "./components/layout/Login";
import Body from "./components/layout/Body";
import { DataProvider } from "./components/Context";

import "./styles.css";

const App = () => {
  const returnNameFromEmail = (user) => {
    if (typeof user.email !== "string") return "";
    const rawName = user.email;
    const name = rawName.split("@");
    let fullName = "User";
    //const names = rawName[0].split(".");
    //const forname = names[0].charAt(0).toUpperCase() + names[0].slice(1);
    //const surname = names[1].charAt(0).toUpperCase() + names[1].slice(1);
    //return forname + " " + surname;
    switch (name[0]) {
      case "jphoelich":
        fullName = "Joost Phoelich";
        break;
      case "sbazec":
        fullName = "Sonia Bazec";
        break;
      case "tschloesser":
        fullName = "Thorben Schlösser";
        break;
      case "ssuhre":
        fullName = "Sebastian Suhre";
        break;
      case "flefering":
        fullName = "Frank Lefering";
        break;
      case "shennigfeld":
        fullName = "Stefanie Hennigfeld";
        break;
      case "caltemeier":
        fullName = "Christian Altemeier";
        break;
      case "hpflug":
        fullName = "Heike Pflug";
        break;
      case "agreve":
        fullName = "Alexander Greve";
        break;
      case "iweinen":
        fullName = "Ina Weinen";
        break;
      case "lisenberg":
        fullName = "Lukas Isenberg";
        break;
      case "sgharehbaghi":
        fullName = "Solmaz Gharehbaghi";
        break;
      case "gdipalma":
        fullName = "Gianna Di Palma";
        break;
      case "oguezey":
        fullName = "Orhun Güzey";
        break;
      case "jweinen":
        fullName = "Jan Weinen";
        break;
      case "cthelen":
        fullName = "Christian Thelen";
        break;
      case "rschmeisser":
        fullName = "Ronny Schmeisser";
        break;
      case "hsachs":
        fullName = "Heiko Sachs";
        break;
      default:
        fullName = "User";
    }
    return fullName;
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
              name: returnNameFromEmail(user)
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
