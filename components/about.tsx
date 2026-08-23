import { highlights, profile } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Giới thiệu{" "}
        <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
          bản thân
        </span>
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
        Mình là {profile.name} — {profile.tagline} đến từ {profile.location}.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${item.gradient} p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1`}
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-2xl">
              {item.emoji}
            </div>
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
