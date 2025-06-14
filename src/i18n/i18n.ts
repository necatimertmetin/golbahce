// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // <-- JSON dosyalarını public klasöründen yükler
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    debug: false,
    backend: {
      loadPath: "/locales/{{lng}}/common.json", // public klasör yolu
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
