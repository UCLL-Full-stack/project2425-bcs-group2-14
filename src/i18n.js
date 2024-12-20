import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./front-end/locales/en/translation.json";
import translationUA from "./front-end/locales/ua/translation.json";

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        ua: { translation: translationUA },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
