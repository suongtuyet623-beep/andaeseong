"use client";

import { highlights, profile } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function About() {
  const { t, locale } = useI18n();

  return (
    <section id="about" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {t.aboutPrefix}{" "}
        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          {t.aboutAccent}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">{profile.aboutIntro[locale]}</p>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.emoji}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl">
              {item.emoji}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{item.title[locale]}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description[locale]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
