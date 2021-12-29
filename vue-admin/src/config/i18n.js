import { createI18n } from "vue3-i18n";
import en from '../locales/en.json';
import kr from '../locales/kr.json';
// export default {
//   locale: 'en',
//   fallbackLocale: 'en',
//   messages: { en, fr, kr }
// }


const messages = {
  en, kr 
};
const locales = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'fr',
    name: 'Français'
  },
  {
    code: 'kr',
    name: 'Korean'
  }
];

const i18n = createI18n({
  locale: "en",
  fallbackLocale: 'en',
  messages: messages,
  locales: locales,
});

export default i18n;