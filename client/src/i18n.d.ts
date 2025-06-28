import { i18n as I18nInstance } from 'i18next';

declare module "./i18n" {
  const i18n: I18nInstance;
  export default i18n;
}
