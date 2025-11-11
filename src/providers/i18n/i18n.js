import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en.json";
import zhHK from "../../locales/zh-HK.json";

const resources = {
  en: { translation: en },
  "zh-HK": { translation: zhHK },
};

const defaultLanguage = "zh-HK";

void i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
