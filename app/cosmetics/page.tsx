"use client";

import { useState, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  shade?: string;
};

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Serum Vitamin C 15% Glow Radiance",
    brand: "LUMIÈRE",
    category: "Skincare",
    price: 429000,
    oldPrice: 550000,
    rating: 4.9,
    reviews: 824,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80&auto=format&fit=crop",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Son Kem Lì Velvet Tint #04 Rose",
    brand: "LUMIÈRE",
    category: "Makeup",
    price: 289000,
    rating: 4.8,
    reviews: 1203,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80&auto=format&fit=crop",
    badge: "MỚI",
    shade: "12 màu",
  },
  {
    id: 3,
    name: "Kem Dưỡng Ẩm Cloud Cream 50ml",
    brand: "LUMIÈRE",
    category: "Skincare",
    price: 359000,
    rating: 4.9,
    reviews: 642,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Phấn Nước Cushion Glow Cover SPF50+",
    brand: "LUMIÈRE",
    category: "Makeup",
    price: 459000,
    oldPrice: 520000,
    rating: 4.7,
    reviews: 512,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80&auto=format&fit=crop",
    badge: "-12%",
  },
  {
    id: 5,
    name: "Sữa Tắm Hương Hoa Peony & Musk 300ml",
    brand: "LUMIÈRE",
    category: "Body Care",
    price: 199000,
    rating: 4.8,
    reviews: 331,
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Dầu Gội Thảo Mộc Phục Hồi Hư Tổn",
    brand: "LUMIÈRE",
    category: "Hair Care",
    price: 249000,
    rating: 4.6,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Mặt Nạ Đất Sét Thải Độc 75ml",
    brand: "LUMIÈRE",
    category: "Skincare",
    price: 189000,
    rating: 4.8,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1570554886111-e0f82a2d16d1?w=600&q=80&auto=format&fit=crop",
    badge: "VEGAN",
  },
  {
    id: 8,
    name: "Bảng Phấn Mắt 9 Ô Rosy Nude",
    brand: "LUMIÈRE",
    category: "Makeup",
    price: 329000,
    oldPrice: 390000,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80&auto=format&fit=crop",
  },
];

const CATEGORIES = ["Tất cả", "Skincare", "Makeup", "Body Care", "Hair Care"];

function formatPrice(n: number) {
  return n.toLocaleString("vi-VN") + "₫";
}

export default function CosmeticsDemo() {
  const [activeCat, setActiveCat] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<(Product & { qty: number })[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAns, setQuizAns] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const [selected, setSelected] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const okCat = activeCat === "Tất cả" || p.category === activeCat;
      const okSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
      return okCat && okSearch;
    });
  }, [activeCat, search]);

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);
  const cartTotal = cart.reduce((a, b) => a + b.price * b.qty, 0);

  function addToCart(p: Product) {
    setCart((prev) => {
      const ex = prev.find((x) => x.id === p.id);
      if (ex) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
    setShowCart(true);
  }
  function decQty(id: number) {
    setCart((prev) => prev.flatMap((x) => (x.id === id ? (x.qty > 1 ? [{ ...x, qty: x.qty - 1 }] : []) : [x])));
  }
  function incQty(id: number) {
    setCart((prev) => prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x)));
  }

  return (
    <div className="min-h-screen bg-[#FFFBF7] text-zinc-900 antialiased selection:bg-[#E8A0BF]/30">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap'); *{font-family:'Be Vietnam Pro',system-ui,sans-serif} .serif{font-family:'Cormorant Garamond',serif}`}</style>

      {/* Announcement */}
      <div className="bg-[#1A1A1A] text-white text-[11px] sm:text-xs tracking-wide">
        <div className="mx-auto max-w-[1280px] px-4 py-2.5 flex items-center justify-between gap-4 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 truncate">
            <span className="hidden sm:inline-flex h-1.5 w-1.5 rounded-full bg-[#E8A0BF] animate-pulse" />
            <span className="truncate">MIỄN PHÍ VẬN CHUYỂN đơn từ 399K • ĐỔI TRẢ 14 NGÀY • QUÀ TẶNG sample cho đơn đầu tiên</span>
          </p>
          <div className="hidden md:flex items-center gap-4 text-white/70 shrink-0">
            <span>Hotline: 1900 636 888</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Cửa hàng</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-100 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[64px] sm:h-[72px] items-center justify-between gap-4">
            {/* Left */}
            <div className="flex items-center gap-6 lg:gap-10">
              <a href="#" className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1A1A1A] text-white serif text-[18px] font-bold tracking-tight">L</span>
                <span className="serif text-[22px] sm:text-[24px] font-semibold tracking-[0.18em] text-zinc-900">LUMIÈRE</span>
                <span className="hidden sm:inline-flex rounded-full bg-[#FFF1F5] px-2 py-0.5 text-[10px] font-semibold tracking-widest text-[#C85A7A] border border-[#FAD9E3]">DEMO</span>
              </a>
              <nav className="hidden lg:flex items-center gap-1">
                {["Trang chủ", "Cửa hàng", "Skincare", "Makeup", "Blog"].map((l, i) => (
                  <a key={l} className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === 1 ? "bg-zinc-900 text-white" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"}`} href={i === 1 ? "#sanpham" : "#"}>
                    {l}
                  </a>
                ))}
              </nav>
            </div>

            {/* Search desktop */}
            <div className="hidden md:flex flex-1 max-w-[420px] items-center">
              <div className="flex w-full items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2.5 focus-within:border-zinc-300 focus-within:bg-white transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-zinc-400 shrink-0"><circle cx="11" cy="11" r="7"/><path d="M20 20L16.5 16.5"/></svg>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Tìm kiếm: serum, son, cushion..." className="w-full bg-transparent text-sm placeholder:text-zinc-400 outline-none" />
                {search && <button onClick={()=>setSearch("")} className="text-xs text-zinc-500 hover:text-zinc-900">Xóa</button>}
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              <button onClick={()=>setShowSearch(v=>!v)} className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="M20 20L16.5 16.5"/></svg>
              </button>
              <button onClick={()=>setShowQuiz(true)} className="hidden sm:inline-flex rounded-full border border-zinc-200 bg-white px-3.5 py-2 text-xs font-semibold tracking-wide text-zinc-700 hover:bg-zinc-50 sm:px-4 sm:text-sm">
                Trắc nghiệm da
              </button>
              <button className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>
              </button>
              <button onClick={()=>setShowCart(true)} className="relative flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-10 sm:w-10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.7"><path d="M6 7h14l-1 10H7L6 7Z"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>
                {cartCount>0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E8A0BF] text-[11px] font-bold text-zinc-900 ring-2 ring-white">{cartCount}</span>}
              </button>
              <button onClick={()=>setMobileMenu(true)} className="lg:hidden flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
              </button>
            </div>
          </div>
          {/* Mobile search */}
          {showSearch && (
            <div className="md:hidden pb-4">
              <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-zinc-400"><circle cx="11" cy="11" r="7"/><path d="M20 20L16.5 16.5"/></svg>
                <input autoFocus value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Tìm serum, son, cushion..." className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={()=>setMobileMenu(false)} />
          <div className="absolute right-0 top-0 h-full w-[84%] max-w-[360px] bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <span className="serif text-xl font-semibold tracking-[0.16em]">LUMIÈRE</span>
              <button onClick={()=>setMobileMenu(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">✕</button>
            </div>
            <nav className="flex flex-col p-6 gap-2 text-[15px] font-medium">
              {["Trang chủ","Cửa hàng","Skincare","Makeup","Body & Hair","Blog","Liên hệ"].map(n=> <a key={n} href="#" className="rounded-xl px-4 py-3 hover:bg-zinc-50 flex justify-between"> {n} <span className="text-zinc-300">›</span> </a>)}
              <button onClick={()=>{setMobileMenu(false); setShowQuiz(true)}} className="mt-4 rounded-full bg-zinc-900 py-3.5 text-white font-semibold">Làm trắc nghiệm da →</button>
            </nav>
          </div>
        </div>
      )}

      {/* Hero - RESPONSIVE */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] items-stretch">
          {/* Left hero */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#FFF1F5] via-[#FFF7F0] to-[#FFF1F5] border border-[#FAD9E3]/60 p-6 sm:p-8 lg:p-10 flex flex-col">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold tracking-wide text-[#C85A7A] border border-[#FAD9E3] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#E8A0BF] animate-pulse" /> BỘ SƯU TẬP MỚI 2026 • THUẦN CHAY & CRUELTY-FREE
            </div>
            <h1 className="serif mt-6 text-[30px] leading-[0.95] font-semibold tracking-tight text-zinc-900 sm:text-[42px] lg:text-[48px]">
              Da sáng mịn,<br />
              <span className="font-light italic text-[#C85A7A]">nét xinh tự nhiên.</span>
            </h1>
            <p className="mt-4 max-w-[520px] text-sm leading-6 text-zinc-600 sm:text-[15px] sm:leading-7">
              Skincare & makeup thuần chay, được yêu thích bởi 50k+ khách hàng. Demo website responsive đầy đủ — tối ưu cho cả điện thoại và desktop.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#sanpham" className="inline-flex justify-center items-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/15 hover:bg-black transition">
                Mua sắm ngay — từ 189K
              </a>
              <button onClick={()=>setShowQuiz(true)} className="inline-flex justify-center items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-zinc-900 border border-zinc-200 hover:bg-zinc-50">
                Trắc nghiệm tìm da →
              </button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-zinc-900/5 pt-6">
              {[
                ["4.9/5", "2.4k đánh giá"],
                ["50K+", "khách hàng"],
                ["100%", "thuần chay"],
              ].map(([a,b])=> (
                <div key={a}>
                  <div className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900">{a}</div>
                  <div className="text-xs text-zinc-500">{b}</div>
                </div>
              ))}
            </div>
            {/* Avatars */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i=> <img key={i} src={`https://i.pravatar.cc/100?img=${10+i}`} alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" />)}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-900 text-[10px] font-bold text-white">+2k</span>
              </div>
              <span className="text-xs text-zinc-500">Khách hàng thật, ảnh review thật (demo)</span>
            </div>

            {/* Decor blob */}
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-52 w-52 rounded-full bg-[#FAD9E3]/40 blur-3xl hidden sm:block" />
          </div>

          {/* Right collage */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] bg-white border border-zinc-100 shadow-sm">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=700&q=80&auto=format&fit=crop" alt="model" className="h-full w-full object-cover aspect-[4/5] sm:aspect-[3/4.2]" />
              <div className="absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 backdrop-blur p-3 flex items-center gap-3 shadow-lg">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&q=80&auto=format&fit=crop" className="h-11 w-11 rounded-xl object-cover border" alt="" />
                <div className="min-w-0">
                  <div className="text-xs font-semibold leading-none">Serum C 15%</div>
                  <div className="text-[11px] text-zinc-500">Sáng da sau 7 ngày</div>
                </div>
                <span className="ml-auto text-xs font-bold text-[#C85A7A]">429K</span>
              </div>
              <span className="absolute left-3 top-3 rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-bold tracking-widest text-white">DEMO STORE</span>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative overflow-hidden rounded-[24px] bg-[#1A1A1A] p-5 sm:p-6 text-white flex flex-col justify-between min-h-[170px] sm:min-h-[220px]">
                <div>
                  <div className="text-xs tracking-[0.16em] text-white/60">ƯU ĐÃI HÔM NAY</div>
                  <div className="serif mt-2 text-[28px] font-semibold leading-none">-20%</div>
                  <div className="text-sm text-white/80">cho đơn đầu tiên</div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="rounded-full bg-white px-3 py-1.5 font-mono font-semibold text-zinc-900 tracking-wide">DEMO20</span>
                  <span className="text-white/60">copy</span>
                </div>
                <img src="https://images.unsplash.com/photo-1583209814683-c023dd293cc4?w=300&q=80&auto=format&fit=crop" alt="" className="absolute -right-4 -bottom-6 h-28 w-28 object-cover rounded-2xl opacity-40 rotate-6 hidden sm:block" />
              </div>
              <div className="relative overflow-hidden rounded-[24px] border border-zinc-100 bg-white p-0 flex-1">
                <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80&auto=format&fit=crop" alt="" className="h-full w-full object-cover aspect-[4/3] sm:aspect-auto sm:h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-4 text-white">
                  <div className="text-xs tracking-widest opacity-80">BESTSELLER</div>
                  <div className="serif text-lg font-semibold leading-tight">Cushion Glow Cover</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-5 sm:mt-6">
        <div className="grid grid-cols-2 gap-3 rounded-[20px] bg-white border border-zinc-100 p-3 sm:p-4 lg:grid-cols-4 shadow-sm">
          {[
            ["Miễn phí ship", "Đơn từ 399K", "🚚"],
            ["Đổi trả 14 ngày", "Không cần lý do", "↩️"],
            ["Quà sample", "Cho đơn đầu tiên", "🎁"],
            ["Tư vấn 1:1", "Chat 9:00-22:00", "💬"],
          ].map(([t,s,icon])=> (
            <div key={t} className="flex items-center gap-3 rounded-2xl bg-zinc-50 px-3.5 py-3 sm:px-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white border text-sm shrink-0">{icon}</span>
              <div className="min-w-0">
                <div className="text-sm font-semibold leading-none truncate">{t}</div>
                <div className="text-xs text-zinc-500 truncate">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="serif text-[22px] sm:text-[28px] font-semibold tracking-tight">Mua theo nhu cầu</h2>
          <a href="#sanpham" className="hidden sm:inline-flex text-sm font-medium text-zinc-600 hover:text-zinc-900">Xem tất cả →</a>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          {[
            { name:"Skincare", count:"82 sản phẩm", img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80&auto=format&fit=crop", bg:"bg-[#FFF1F5]" },
            { name:"Makeup", count:"54 sản phẩm", img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80&auto=format&fit=crop", bg:"bg-[#FFF7ED]" },
            { name:"Body Care", count:"31 sản phẩm", img:"https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=400&q=80&auto=format&fit=crop", bg:"bg-[#F0FDF4]" },
            { name:"Hair Care", count:"24 sản phẩm", img:"https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=400&q=80&auto=format&fit=crop", bg:"bg-[#EFF6FF]" },
          ].map(c=> (
            <a key={c.name} href="#sanpham" onClick={()=>setActiveCat(c.name)} className={`group relative overflow-hidden rounded-[22px] border border-zinc-100 ${c.bg} p-4 sm:p-5 flex flex-col min-h-[150px] sm:min-h-[170px] hover:shadow-md transition`}>
              <div className="text-[15px] font-semibold">{c.name}</div>
              <div className="text-xs text-zinc-500">{c.count}</div>
              <img src={c.img} alt={c.name} className="absolute right-0 bottom-0 h-[92px] w-[92px] sm:h-[110px] sm:w-[110px] object-cover rounded-tl-[22px] border border-white shadow-sm group-hover:scale-[1.02] transition" />
              <span className="mt-auto inline-flex w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold border">Khám phá →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="sanpham" className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[#C85A7A]">BESTSELLER • ĐƯỢC YÊU THÍCH NHẤT</div>
            <h2 className="serif mt-1 text-[26px] sm:text-[32px] font-semibold tracking-tight leading-none">Sản phẩm nổi bật</h2>
            <p className="mt-2 text-sm text-zinc-500">Demo 8 sản phẩm mẫu — bấm “Thêm vào giỏ” để trải nghiệm luồng mua hàng responsive.</p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
            {CATEGORIES.map(cat=> (
              <button key={cat} onClick={()=>setActiveCat(cat)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium border transition shrink-0 ${activeCat===cat ? "bg-zinc-900 text-white border-zinc-900 shadow" : "bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(p=> (
            <div key={p.id} className="group flex flex-col overflow-hidden rounded-[22px] border border-zinc-100 bg-white hover:shadow-lg hover:shadow-zinc-900/5 transition">
              <div className="relative aspect-[4/4.6] overflow-hidden bg-zinc-50 cursor-pointer" onClick={()=>setSelected(p)}>
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.04] transition duration-500" loading="lazy" />
                {p.badge && <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide ${p.badge==="BESTSELLER" ? "bg-zinc-900 text-white" : p.badge==="MỚI" ? "bg-[#E8A0BF] text-zinc-900" : "bg-white text-zinc-900 border"}`}>{p.badge}</span>}
                <button className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur border text-zinc-600 hover:text-rose-500">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-6.5-4.35-8.5-8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8.5 6.5C18.5 16.65 12 21 12 21Z"/></svg>
                </button>
                <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center justify-between rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs border shadow-sm opacity-0 group-hover:opacity-100 transition">
                  <span className="font-medium">Xem nhanh</span>
                  <span className="text-zinc-400">→</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-3 sm:p-4">
                <div className="text-[11px] font-semibold tracking-[0.14em] text-zinc-400">{p.brand} • {p.category.toUpperCase()}</div>
                <h3 onClick={()=>setSelected(p)} className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-zinc-900 cursor-pointer hover:text-[#C85A7A] min-h-[40px]">{p.name}</h3>
                {p.shade && <div className="mt-1 text-xs text-zinc-500">{p.shade}</div>}
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="text-xs font-semibold">★ {p.rating}</span>
                  <span className="text-xs text-zinc-400">({p.reviews})</span>
                  <span className="ml-auto hidden sm:inline text-[11px] text-emerald-600 font-medium">Còn hàng • Giao nhanh</span>
                </div>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[15px] font-bold leading-none">{formatPrice(p.price)}</div>
                    {p.oldPrice && <div className="text-xs text-zinc-400 line-through">{formatPrice(p.oldPrice)}</div>}
                  </div>
                  <button onClick={()=>addToCart(p)} className="inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-xs font-semibold text-white hover:bg-black active:scale-95 transition shrink-0">
                    <span className="hidden sm:inline">Thêm vào giỏ</span>
                    <span className="sm:hidden">+ Giỏ</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filtered.length===0 && (
          <div className="mt-8 rounded-2xl border border-dashed bg-white p-10 text-center text-sm text-zinc-500">Không tìm thấy sản phẩm với từ khóa “{search}”</div>
        )}
        <div className="mt-6 flex justify-center sm:hidden">
          <a href="#" className="text-sm font-medium text-zinc-700 underline underline-offset-4">Xem tất cả sản phẩm →</a>
        </div>
      </section>

      {/* Promo + Quiz */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 grid gap-4 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[28px] bg-[#1A1A1A] p-6 sm:p-8 text-white flex flex-col">
          <div className="inline-flex w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide border border-white/10">BEAUTY BOX THÁNG 8 • DEMO</div>
          <h3 className="serif mt-4 text-[26px] sm:text-[30px] font-semibold leading-[0.95]">Hộp quà bất ngờ<br/><span className="font-light italic text-[#E8A0BF]">mỗi tháng chỉ 299K</span></h3>
          <p className="mt-3 text-sm leading-6 text-white/70 max-w-[420px]">3-4 sản phẩm full/mini size được curator chọn riêng. Hủy bất cứ lúc nào — demo chỉ để trưng bày luồng đăng ký.</p>
          <ul className="mt-5 space-y-2 text-sm">
            {["Miễn phí ship box đầu tiên","Tặng voucher 100K cho tháng sau","Quà sinh nhật độc quyền"].map(x=> <li key={x} className="flex items-center gap-2"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8A0BF] text-zinc-900 text-xs">✓</span> {x}</li>)}
          </ul>
          <button className="mt-6 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-100">Đăng ký demo — 299K/tháng</button>
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80&auto=format&fit=crop" alt="" className="absolute right-0 bottom-0 h-40 w-40 object-cover rounded-tl-[28px] border border-white/10 hidden sm:block opacity-90" />
        </div>
        <div className="rounded-[28px] border border-[#FAD9E3] bg-gradient-to-br from-white to-[#FFF1F5] p-6 sm:p-8 flex flex-col">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8A0BF] text-lg">✨</span>
            <div>
              <div className="text-xs font-semibold tracking-[0.14em] text-[#C85A7A]">TRẮC NGHIỆM 60 GIÂY</div>
              <div className="serif text-xl font-semibold leading-none">Bạn thuộc loại da nào?</div>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-600">Trả lời 3 câu hỏi nhanh, hệ thống demo sẽ gợi ý routine phù hợp. Không lưu dữ liệu — chỉ để minh họa tính năng.</p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[
              ["Da dầu","Bóng dầu vùng T"],
              ["Da khô","Căng, bong tróc"],
              ["Da nhạy cảm","Dễ ửng đỏ"],
            ].map(([a,b])=> <div key={a} className="rounded-2xl bg-white border p-3"><div className="text-sm font-semibold">{a}</div><div className="text-[11px] text-zinc-500">{b}</div></div>)}
          </div>
          <button onClick={()=>setShowQuiz(true)} className="mt-6 rounded-full bg-zinc-900 py-3.5 text-sm font-semibold text-white hover:bg-black">Bắt đầu trắc nghiệm →</button>
          <div className="mt-3 text-center text-xs text-zinc-500">2.1k người đã thử hôm nay (số liệu demo)</div>
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="flex items-end justify-between">
          <h2 className="serif text-[22px] sm:text-[28px] font-semibold">Bí kíp làm đẹp</h2>
          <a href="#" className="hidden sm:inline text-sm font-medium text-zinc-600 hover:text-zinc-900">Xem blog →</a>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            { t:"Routine cho da dầu mụn: 5 bước tối giản", d:"Tẩy trang - Sữa rửa mặt - Serum - Dưỡng ẩm - Chống nắng", img:"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80&auto=format&fit=crop" },
            { t:"Review 7 thỏi son kem lì dưới 300K", d:"So sánh độ lì, độ ẩm và độ bền màu sau 6 tiếng", img:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&q=80&auto=format&fit=crop" },
            { t:"Cushion vs Foundation: chọn gì cho da khô?", d:"Phân tích thành phần và finish trên da thật", img:"https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80&auto=format&fit=crop" },
          ].map(b=> (
            <article key={b.t} className="overflow-hidden rounded-[22px] border border-zinc-100 bg-white hover:shadow-md transition">
              <img src={b.img} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-4 sm:p-5">
                <div className="text-xs font-semibold tracking-wide text-[#C85A7A]">BLOG • 5 PHÚT ĐỌC</div>
                <h3 className="mt-1 text-[15px] font-semibold leading-5 line-clamp-2">{b.t}</h3>
                <p className="mt-1.5 text-sm leading-5 text-zinc-500 line-clamp-2">{b.d}</p>
                <span className="mt-3 inline-flex text-sm font-medium underline underline-offset-4">Đọc bài →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
        <div className="rounded-[28px] bg-white border border-zinc-100 p-6 sm:p-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between shadow-sm">
          <div className="max-w-[520px]">
            <h3 className="serif text-xl sm:text-2xl font-semibold">Nhận ưu đãi độc quyền</h3>
            <p className="mt-1.5 text-sm leading-6 text-zinc-600">Nhập email để nhận mã DEMO20 (-20% đơn đầu) và bản tin làm đẹp 2 tuần/lần. Demo không gửi email thật.</p>
          </div>
          <form onSubmit={e=>{e.preventDefault(); alert("Demo: Đã lưu email (không gửi thật)! Mã của bạn: DEMO20")}} className="flex w-full max-w-[420px] items-center gap-2">
            <input required type="email" placeholder="Email của bạn" className="flex-1 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3.5 text-sm outline-none focus:bg-white focus:border-zinc-300" />
            <button className="shrink-0 rounded-full bg-zinc-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-black">Đăng ký</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white serif font-bold">L</span>
                <span className="serif text-lg font-semibold tracking-[0.16em]">LUMIÈRE</span>
                <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-bold tracking-widest text-white">DEMO</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-500">Website demo bán mỹ phẩm responsive — không kinh doanh thật. Dữ liệu sản phẩm & đánh giá là giả lập để trình bày giao diện.</p>
              <div className="mt-4 flex gap-2">
                {["FB","IG","TT","YT"].map(s=> <span key={s} className="flex h-8 w-8 items-center justify-center rounded-full border bg-zinc-50 text-xs font-semibold">{s}</span>)}
              </div>
            </div>
            {[
              ["Cửa hàng", ["Skincare","Makeup","Body & Hair","Beauty Box","Quà tặng"]],
              ["Hỗ trợ", ["Vận chuyển","Đổi trả 14 ngày","FAQ","Liên hệ","Chính sách bảo mật"]],
              ["Thanh toán demo", ["VNPay (demo)","MoMo (demo)","ZaloPay (demo)","COD (demo)","* Không trừ tiền thật"]],
            ].map(([title, links])=> (
              <div key={title as string}>
                <div className="text-sm font-semibold">{title as string}</div>
                <ul className="mt-3 space-y-2 text-sm text-zinc-500">
                  {(links as string[]).map(l=> <li key={l}><a href="#" className="hover:text-zinc-900">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 LUMIÈRE Demo Store. Chỉ dùng cho mục đích trình bày / học tập.</span>
            <span className="flex items-center gap-2">
              <span className="hidden sm:inline">Responsive:</span>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-medium text-emerald-700">320px → 1280px+</span>
              <span className="hidden sm:inline">• Tailwind CSS</span>
            </span>
          </div>
        </div>
      </footer>

      {/* Cart Drawer */}
      {showCart && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={()=>setShowCart(false)} />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b px-6 py-5">
              <h3 className="text-lg font-semibold">Giỏ hàng <span className="ml-2 rounded-full bg-zinc-100 px-2.5 py-1 text-xs">{cartCount} món</span></h3>
              <button onClick={()=>setShowCart(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">✕</button>
            </div>
            <div className="flex-1 overflow-auto p-6">
              {cart.length===0 ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 border text-2xl">🛒</div>
                  <div className="mt-4 font-medium">Giỏ hàng trống</div>
                  <div className="text-sm text-zinc-500">Thêm sản phẩm để xem responsive drawer này</div>
                  <button onClick={()=>setShowCart(false)} className="mt-6 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">Tiếp tục mua sắm</button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map(item=> (
                    <div key={item.id} className="flex gap-4 rounded-2xl border p-3">
                      <img src={item.image} alt="" className="h-20 w-20 rounded-xl object-cover border bg-zinc-50" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium leading-5 line-clamp-2">{item.name}</div>
                        <div className="text-xs text-zinc-500">{item.category}</div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-sm font-bold">{formatPrice(item.price)}</span>
                          <div className="flex items-center gap-2">
                            <button onClick={()=>decQty(item.id)} className="flex h-7 w-7 items-center justify-center rounded-full border bg-white">−</button>
                            <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                            <button onClick={()=>incQty(item.id)} className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-2xl bg-zinc-50 p-4 border">
                    <div className="flex justify-between text-sm"><span className="text-zinc-500">Tạm tính</span><span className="font-semibold">{formatPrice(cartTotal)}</span></div>
                    <div className="flex justify-between text-sm mt-1"><span className="text-zinc-500">Vận chuyển</span><span className="text-emerald-600 font-medium">Miễn phí (demo)</span></div>
                    <div className="mt-3 flex justify-between border-t pt-3 text-base font-bold"><span>Tổng</span><span>{formatPrice(cartTotal)}</span></div>
                  </div>
                </div>
              )}
            </div>
            {cart.length>0 && (
              <div className="border-t p-6 space-y-3 bg-white">
                <button onClick={()=>alert("Demo: Không thanh toán thật. Tổng "+formatPrice(cartTotal))} className="w-full rounded-full bg-zinc-900 py-4 text-sm font-semibold text-white hover:bg-black">Thanh toán demo → {formatPrice(cartTotal)}</button>
                <div className="flex justify-center gap-2 text-[11px] text-zinc-500"><span>VNPay</span>•<span>MoMo</span>•<span>ZaloPay</span>•<span>COD (đều demo)</span></div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={()=>setShowQuiz(false)} />
          <div className="relative w-full max-w-[520px] max-h-[92vh] overflow-auto rounded-t-[28px] sm:rounded-[28px] bg-white shadow-2xl">
            <div className="sticky top-0 bg-white border-b px-6 py-5 flex items-center justify-between">
              <h3 className="serif text-xl font-semibold">Trắc nghiệm loại da</h3>
              <button onClick={()=>setShowQuiz(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">✕</button>
            </div>
            <div className="p-6">
              {!quizAns ? (
                <>
                  <p className="text-sm text-zinc-600">Chọn mô tả gần nhất với da bạn sau khi rửa mặt 30 phút (không bôi gì):</p>
                  <div className="mt-5 grid gap-3">
                    {[
                      ["Da dầu", "Bóng dầu nhiều ở trán, mũi, cằm"],
                      ["Da khô", "Cảm giác căng, có vảy mịn"],
                      ["Da hỗn hợp", "Dầu vùng T, khô ở má"],
                      ["Da nhạy cảm", "Dễ đỏ, châm chích khi dùng sản phẩm mới"],
                    ].map(([label, desc])=> (
                      <button key={label} onClick={()=>setQuizAns(label)} className="text-left rounded-2xl border p-4 hover:border-zinc-900 hover:bg-zinc-50 transition">
                        <div className="font-semibold text-sm">{label}</div>
                        <div className="text-xs text-zinc-500 mt-1">{desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-zinc-400 text-center">Demo: không lưu dữ liệu cá nhân</div>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xl">✓</div>
                  <h4 className="mt-4 text-lg font-semibold">Bạn có làn da: {quizAns}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Gợi ý demo: Với {quizAns.toLowerCase()}, bạn hợp với {quizAns==="Da dầu" ? "Serum Vitamin C + Mặt nạ đất sét" : quizAns==="Da khô" ? "Cloud Cream + Sữa tắm Peony dưỡng ẩm" : "Routine cân bằng + Cushion mỏng nhẹ"}. Tất cả đều có trong lưới sản phẩm phía trên.</p>
                  <div className="mt-6 flex gap-3 justify-center">
                    <button onClick={()=>setQuizAns(null)} className="rounded-full border px-6 py-3 text-sm font-semibold">Làm lại</button>
                    <button onClick={()=>{setShowQuiz(false); const el=document.getElementById("sanpham"); el?.scrollIntoView({behavior:"smooth"})}} className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">Xem sản phẩm gợi ý</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={()=>setSelected(null)} />
          <div className="relative w-full max-w-[860px] max-h-[92vh] overflow-auto rounded-t-[28px] sm:rounded-[28px] bg-white shadow-2xl grid sm:grid-cols-2">
            <div className="relative bg-zinc-50">
              <img src={selected.image} alt={selected.name} className="h-[360px] sm:h-full w-full object-cover" />
              {selected.badge && <span className="absolute left-4 top-4 rounded-full bg-zinc-900 px-3 py-1 text-xs font-bold text-white">{selected.badge}</span>}
            </div>
            <div className="p-6 sm:p-8 flex flex-col">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold tracking-[0.14em] text-zinc-400">{selected.brand} • {selected.category}</div>
                  <h3 className="mt-1 text-xl font-semibold leading-6">{selected.name}</h3>
                  <div className="mt-2 flex items-center gap-2 text-sm"><span className="font-semibold">★ {selected.rating}</span><span className="text-zinc-500">({selected.reviews} đánh giá)</span><span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 border border-emerald-200">Còn hàng</span></div>
                </div>
                <button onClick={()=>setSelected(null)} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 shrink-0">✕</button>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold">{formatPrice(selected.price)}</span>
                {selected.oldPrice && <span className="text-sm line-through text-zinc-400">{formatPrice(selected.oldPrice)}</span>}
              </div>
              <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-600 border-t pt-5">
                <p><span className="font-semibold text-zinc-900">Công dụng:</span> Dưỡng sáng, cấp ẩm, làm đều màu da. Thuần chay, không thử nghiệm trên động vật.</p>
                <p><span className="font-semibold text-zinc-900">Thành phần chính:</span> Vitamin C, Niacinamide, Hyaluronic Acid (demo).</p>
                <p><span className="font-semibold text-zinc-900">HDSD:</span> Ngày 2 lần sáng/tối sau bước làm sạch.</p>
              </div>
              <div className="mt-auto pt-6 flex gap-3">
                <button onClick={()=>{addToCart(selected); setSelected(null)}} className="flex-1 rounded-full bg-zinc-900 py-3.5 text-sm font-semibold text-white hover:bg-black">Thêm vào giỏ — {formatPrice(selected.price)}</button>
                <button onClick={()=>setSelected(null)} className="rounded-full border px-6 py-3.5 text-sm font-semibold">Đóng</button>
              </div>
              <div className="mt-3 text-center text-xs text-zinc-400">Demo: trang chi tiết rút gọn, ảnh & mô tả giả lập</div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive helper bar - only visible on demo */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-xl">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Responsive: thử thu nhỏ trình duyệt hoặc mở bằng điện thoại
        <span className="hidden lg:inline text-white/60">• 320px • 768px • 1024px • 1280px</span>
      </div>
    </div>
  );
}
