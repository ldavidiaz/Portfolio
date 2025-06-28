import { defaultLang, languages, type Language } from './ui';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  return (lang in languages ? lang : defaultLang) as Language;
}
