import { profile } from "@/lib/site";

const links = [
  { href: "#about", label: "Giới thiệu" },
  { href: "#gallery", label: "Ảnh" },
  { href: "#videos", label: "Video" },
  { href: "#connect", label: "Kết nối" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-fuchsia-500/10 backdrop-blur-xl sm:px-6">
        <a
          href="#top"
          className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-orange-300 bg-clip-text text-lg font-extrabold tracking-tight text-transparent"
        >
          @{profile.name}
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#connect"
          className="rounded-full bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-pink-500/30 transition-transform hover:scale-105"
        >
          Theo dõi
        </a>
      </nav>
    </header>
  );
}
