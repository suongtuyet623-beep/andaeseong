"use client";

import Image from "next/image";
import { profile, socials } from "@/lib/site";
import { SocialButtons } from "@/components/social-buttons";
import { useI18n } from "@/components/language-provider";

export function Hero() {
  const { t, locale } = useI18n();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="blob animation-delay-3000 absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="blob animation-delay-6000 absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-20 text-center">
        <div className="rounded-full bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 p-1 shadow-xl shadow-sky-500/40">
          <Image
            src="/images/avatar.png"
            alt={`Ảnh đại diện ${profile.name}`}
            width={160}
            height={160}
            priority
            className="h-32 w-32 rounded-full border-4 border-[#070c16] object-cover sm:h-36 sm:w-36"
          />
        </div>
        <span className="mt-6 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-sm font-medium text-sky-300">
          {profile.tagline[locale]}
        </span>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{profile.bio[locale]}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 px-7 py-3 font-semibold text-white shadow-lg shadow-sky-600/40 transition-transform hover:scale-105"
          >
            {t.heroViewGallery}
          </a>
          <a
            href="#videos"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            {t.heroViewVideos}
          </a>
        </div>

        <div className="mt-12">
          <SocialButtons items={socials} size="lg" />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 animate-bounce">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
