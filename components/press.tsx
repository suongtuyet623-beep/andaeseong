"use client";

import Image from "next/image";
import { press } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function Press() {
  const { t, locale } = useI18n();

  return (
    <section id="press" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {t.pressPrefix ? `${t.pressPrefix} ` : ""}
        <span className="bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent">
          {t.pressAccent}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">{t.pressSubtitle}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {press.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-emerald-500/10"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="w-fit rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-0.5 text-xs font-medium text-sky-300">
                {article.source}
              </span>
              <h3 className="mt-3 font-semibold leading-snug transition-colors group-hover:text-emerald-300">
                {article.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                {article.summary[locale]}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white/40 transition-colors group-hover:text-white">
                {locale === "ko" ? "기사 보기" : locale === "en" ? "Read article" : "Đọc bài viết"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
