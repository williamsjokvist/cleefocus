import {notFound} from "next/navigation";
import {getRequestConfig} from 'next-intl/server';
import { useLocale } from "next-intl";

export type AppLanguage = {
  code: string;
  countryCode: string;
}

export const APP_LANGUAGES: AppLanguage[] = [
  { code: 'sv', countryCode: 'se' },
  { code: 'en', countryCode: 'gb' },
];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!APP_LANGUAGES.map(lng => lng.code).includes(locale)) {
    notFound();
  }
 
  return {
    messages: (await import(`../locales/${locale}.json`)).default
  };
});

export const useLanguage = () => {
  const locale = useLocale();
  return APP_LANGUAGES.find(lng => lng.code === locale) ?? APP_LANGUAGES[0]
}
