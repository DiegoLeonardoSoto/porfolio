import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import "./index.css";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { MouseContextProvider } from "./context/MouseContextProvider.jsx";

i18next.init({
  intererpolation: { scapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <MouseContextProvider>
        <App />
      </MouseContextProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
