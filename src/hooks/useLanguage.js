import { useLanguageContext } from "../providers/i18n/language-context.js";

export function useLanguage() {
  return useLanguageContext();
}
