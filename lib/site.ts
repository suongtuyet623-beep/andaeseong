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
    title: "Video đầu tiên của tôi",
    description: "Cảm nhận buổi đầu làm nội dung.",
    thumbnail: "/images/videos/thumb-1.jpg",
    url: "https://youtube.com/@andaeseong",
  },
  {
    title: "Đằng sau hậu trường",
    description: "Những khoảnh khắc thú vị khi quay phim.",
    thumbnail: "/images/videos/thumb-2.jpg",
    url: "https://youtube.com/@andaeseong",
  },
  {
    title: "Vlog cuộc sống thường ngày",
    description: "Một ngày cùng andaeseong.",
    thumbnail: "/images/videos/thumb-3.jpg",
    url: "https://youtube.com/@andaeseong",
  },
];
