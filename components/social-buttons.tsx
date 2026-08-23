import { socialIcons } from "@/components/icons";
import type { SocialIcon } from "@/lib/site";

export function SocialButtons({ items, size = "md" }: {
  items: { label: string; url: string; icon: SocialIcon; color: string }[];
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const iconSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item) => {
        const Icon = socialIcons[item.icon];
        return (
          <a
            key={item.label}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className={`group relative grid ${box} place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/25`}
          >
            <span
              className={`absolute inset-0 rounded-2xl bg-gradient-to-tr opacity-0 transition-opacity duration-300 group-hover:opacity-20 ${item.color}`}
            />
            <Icon className={`${iconSize} text-white/80 transition-colors group-hover:text-white`} />
          </a>
        );
      })}
    </div>
  );
}
