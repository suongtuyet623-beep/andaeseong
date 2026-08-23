"use client";

import Image from "next/image";
import { videos } from "@/lib/site";
import { PlayIcon } from "@/components/icons";
import { useI18n } from "@/components/language-provider";

export function Videos() {
  const { t, locale } = useI18n();

  return (
    <section id="videos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {t.videosPrefix}{" "}
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-300 bg-clip-text text-transparent">
          {t.videosAccent}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">{t.videosSubtitle}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <a
            key={video.url}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-black/30 transition-colors group-hover:bg-black/10">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-lg shadow-sky-500/40 transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon className="ml-0.5 h-6 w-6" />
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-semibold transition-colors group-hover:text-sky-300">
                {video.title}
              </h3>
              <p className="mt-1 text-sm text-white/60">{video.description[locale]}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
