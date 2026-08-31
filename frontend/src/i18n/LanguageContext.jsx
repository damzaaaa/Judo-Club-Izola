import { createContext, useContext, useEffect, useState } from 'react';
import sl from './sl';
import en from './en';
import it from './it';

const dictionaries = { sl, en, it };

export const LANGS = [
  { code: 'sl', label: 'Slovenščina', flag: 'https://flagcdn.com/w80/si.png' },
  { code: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w80/it.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w80/gb.png' },
];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('jki-lang');
    return dictionaries[stored] ? stored : 'sl';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLang = (code) => {
    setLang(code);
    localStorage.setItem('jki-lang', code);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t: dictionaries[lang] || sl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
