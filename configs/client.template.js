import React from "react";
import ReactDOM from "react-dom";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

import init18n from "@/init18n";
import MainBlock from "@/entry";

if(process.env.NODE_ENV==="development"){
  if(module.hot){
    module.hot.accept();
    module.hot.dispose(function () {
      console.log("module.hot.dispose");
    });
  }
}

ReactDOM.hydrate((
  <I18nextProvider i18n={init18n(window.language)}>
    <BrowserRouter basename={window.language}>
      <MainBlock />
    </BrowserRouter>
  </I18nextProvider>
),document.getElementById("root"));
