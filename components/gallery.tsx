import Image from "next/image";
import { photos } from "@/lib/site";

export function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Bộ sưu tập{" "}
        <span className="bg-gradient-to-r from-fuchsia-400 to-orange-300 bg-clip-text text-transparent">
          hình ảnh
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
        Những khoảnh khắc mình muốn lưu giữ và chia sẻ với bạn.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            className={`group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-white/10 ${
              index % 5 === 0 ? "sm:col-span-2 sm:aspect-[3/2]" : ""
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
