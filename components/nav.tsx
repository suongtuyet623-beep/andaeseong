"use client";

import { profile } from "@/lib/site";
import { locales, localeLabels } from "@/lib/i18n";
import { useI18n } from "@/components/language-provider";

export function Nav() {
  const { t, locale, setLocale } = useI18n();

  const links = [
    { href: "#about", label: t.navAbout },
    { href: "#gallery", label: t.navGallery },
    { href: "#videos", label: t.navVideos },
    { href: "#connect", label: t.navConnect },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-sky-500/10 backdrop-blur-xl sm:px-6">
        <a
          href="#top"
          className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-lg font-extrabold tracking-tight text-transparent"
        >
          @{profile.name}
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                aria-label={localeLabels[l]}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors sm:text-sm ${
                  locale === l
                    ? "bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {localeLabels[l]}
              </button>
            ))}
          </div>
          <a
            href="#connect"
            className="hidden rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-sky-500/30 transition-transform hover:scale-105 sm:block"
          >
            {t.navFollow}
          </a>
        </div>
      </nav>
    </header>
  );
}
