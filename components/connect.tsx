import { profile, socials } from "@/lib/site";
import { SocialButtons } from "@/components/social-buttons";

export function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-pink-500/10 to-cyan-400/20 p-10 text-center sm:p-16">
        <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-orange-400/25 blur-3xl" />

        <h2 className="relative text-3xl font-bold sm:text-4xl">
          Kết nối{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
            với tôi
          </span>
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/70">
          Theo dõi mình trên các nền tảng để không bỏ lỡ nội dung mới nhất. Hẹn gặp bạn ở đó!
        </p>

        <div className="relative mt-8 flex justify-center">
          <SocialButtons items={socials} size="lg" />
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="relative mt-8 inline-block rounded-full bg-white px-7 py-3 font-semibold text-pink-600 shadow-lg transition-transform hover:scale-105"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
