export const profile = {
  name: "andaeseong",
  tagline: "Content Creator",
  bio: "Chào mừng bạn đến với góc riêng của mình! Nơi mình chia sẻ những khoảnh khắc cuộc sống, hình ảnh yêu thích và các video mình thực hiện. Cùng kết nối và đồng hành nhé!",
  location: "Việt Nam",
  email: "contact@andaeseong.com",
};

export type SocialIcon = "instagram" | "tiktok" | "youtube" | "facebook";

export const socials: { label: string; url: string; icon: SocialIcon; color: string }[] = [
  {
    label: "Instagram",
    url: "https://instagram.com/andaeseong_",
    icon: "instagram",
    color: "from-blue-500 via-sky-500 to-cyan-400",
  },
  {
    label: "TikTok",
    url: "https://tiktok.com/@andaeseong_",
    icon: "tiktok",
    color: "from-cyan-400 to-blue-500",
  },
  {
    label: "YouTube",
    url: "https://youtube.com/@andaeseong",
    icon: "youtube",
    color: "from-red-600 to-orange-500",
  },
  {
    label: "Facebook",
    url: "https://facebook.com/andaeseongg",
    icon: "facebook",
    color: "from-blue-500 to-indigo-500",
  },
];

export const highlights = [
  {
    title: "Sáng tạo nội dung",
    description: "Chia sẻ câu chuyện qua từng bức ảnh và thước phim.",
    emoji: "✨",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Hình ảnh & Video",
    description: "Tuyển chọn những khoảnh khắc đẹp nhất của mình.",
    emoji: "📸",
    gradient: "from-indigo-500/20 to-sky-500/10",
  },
  {
    title: "Kết nối cộng đồng",
    description: "Luôn sẵn sàng trò chuyện và hợp tác cùng bạn.",
    emoji: "💬",
    gradient: "from-emerald-500/15 to-cyan-500/10",
  },
];

export const photos = [
  { src: "/images/gallery/photo-1.jpg", alt: "Khoảnh khắc 1" },
  { src: "/images/gallery/photo-2.jpg", alt: "Khoảnh khắc 2" },
  { src: "/images/gallery/photo-3.jpg", alt: "Khoảnh khắc 3" },
  { src: "/images/gallery/photo-4.jpg", alt: "Khoảnh khắc 4" },
  { src: "/images/gallery/photo-5.jpg", alt: "Khoảnh khắc 5" },
  { src: "/images/gallery/photo-6.jpg", alt: "Khoảnh khắc 6" },
];

export const videos = [
  {
    title: "제55회 전국소년체육대회 남중 결승 100m",
    description: "Chung kết 100m nam trung học - Giải thiếu niên toàn quốc lần 55 (30/05/2026).",
    thumbnail: "https://i.ytimg.com/vi/ghxBTzincO8/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ghxBTzincO8",
  },
  {
    title: "100M에 이어 200M 또 이겨버렸다!",
    description: "Thắng 100m rồi vô địch tiếp 200m với tốc độ điên rồ! (16/03/2025)",
    thumbnail: "https://i.ytimg.com/vi/1qrKjTngM74/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=1qrKjTngM74",
  },
  {
    title: "안대성! 정유신! 또 1, 2등을 가져다 [100m 남초 결승]",
    description: "Chung kết 100m nam tiểu học - cúp đôi 1-2 (16/03/2025)",
    thumbnail: "https://i.ytimg.com/vi/WQG0ETRUxpk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WQG0ETRUxpk",
  },
  {
    title: "초등부 딱! 대! 대구광역시의 금빛 레이스 [4x100mR 결승]",
    description: "Chung kết tiếp sức 4x100m - thành phố Daegu tỏa sáng (08/03/2025)",
    thumbnail: "https://i.ytimg.com/vi/oU0cWx1HtPI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=oU0cWx1HtPI",
  },
  {
    title: "2022년 가장 빠른 초등학생 [남초 100m 결승]",
    description: "Cầu thủ chạy nhanh nhất tiểu học 2022 - chung kết 100m (08/03/2025)",
    thumbnail: "https://i.ytimg.com/vi/-S1vaGkemVo/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=-S1vaGkemVo",
  },
  {
    title: "[80m 남초 결승] 제42회 전국육상경기대회 (2021)",
    description: "Chung kết 80m nam - Giải điền kinh toàn quốc lần thứ 42 (13/11/2021)",
    thumbnail: "https://i.ytimg.com/vi/IcZtaoL8iOM/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=IcZtaoL8iOM",
  },
];
