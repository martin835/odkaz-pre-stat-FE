import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    supportedLngs: ["en", "sk"],
    // resources,
    //lng: "sk", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "sk",
    // interpolation removed in the tutorial w/o any further explanation  https://www.youtube.com/watch?v=w04LXKlusCQ&ab_channel=Classsed
    // interpolation: {
    //   escapeValue: false, // react already safes from xss
    // },
    detection: {
      order: ["htmlTag"], // more options here: https://github.com/i18next/i18next-browser-languageDetector
      //caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
