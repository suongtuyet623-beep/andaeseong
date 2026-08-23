"use client";

import Image from "next/image";
import { photos } from "@/lib/site";
import { useI18n } from "@/components/language-provider";

export function Gallery() {
  const { t } = useI18n();

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {t.galleryPrefix}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          {t.galleryAccent}
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">{t.gallerySubtitle}</p>

      <div className="mt-12 columns-2 gap-4 sm:columns-3">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 640px) 33vw, 50vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
