import Image from "next/image";
import { profile, socials } from "@/lib/site";
import { SocialButtons } from "@/components/social-buttons";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="blob absolute -top-24 -left-24 h-96 w-96 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="blob animation-delay-3000 absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-orange-400/25 blur-3xl" />
        <div className="blob animation-delay-6000 absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-32 pb-20 text-center">
        <div className="rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-orange-400 p-1 shadow-xl shadow-pink-500/40">
          <Image
            src="/images/avatar.jpg"
            alt={`Ảnh đại diện ${profile.name}`}
            width={160}
            height={160}
            priority
            className="h-32 w-32 rounded-full border-4 border-[#0d0618] object-cover sm:h-36 sm:w-36"
          />
        </div>
        <span className="mt-6 rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-1 text-sm font-medium text-pink-300">
          {profile.tagline}
        </span>
        <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-7xl">
          <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{profile.bio}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-7 py-3 font-semibold text-white shadow-lg shadow-pink-500/40 transition-transform hover:scale-105"
          >
            Xem bộ sưu tập
          </a>
          <a
            href="#videos"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Xem video
          </a>
        </div>

        <div className="mt-12">
          <SocialButtons items={socials} size="lg" />
        </div>
      </div>

      <a
        href="#about"
        aria-label="Cuộn xuống"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 animate-bounce">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
