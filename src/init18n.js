import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import en from "@/locales/en";
import zh from "@/locales/zh";

export default function init18n(current_lauguage){

  const resources = {
    en:{translation:en},
    zh:{translation:zh}
  };
  
  /** 
   * passes i18n down to react-i18next 
   * **/
  i18n.use(initReactI18next);
  
  i18n.init({
    resources,
    lng:current_lauguage,
    interpolation: {
      /**
       * react already safes from xss
       * */ 
      escapeValue: false
    }
  });
  
  return i18n;
}

