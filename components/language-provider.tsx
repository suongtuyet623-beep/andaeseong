"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

type LangContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof ui)[Locale];
};

const LangContext = createContext<LangContextValue>({
  locale: "vi",
  setLocale: () => {},
  t: ui.vi,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("vi");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "vi" || saved === "ko" || saved === "en") {
      setLocaleState(saved);
    } else {
      const browserLang = window.navigator.language.slice(0, 2);
      if (browserLang === "ko") setLocaleState("ko");
      else if (browserLang === "vi") setLocaleState("vi");
      else setLocaleState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("lang", next);
  };

  return (
    <LangContext.Provider value={{ locale, setLocale, t: ui[locale] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}
