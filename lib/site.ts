import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "andaeseong",
  tagline: {
    vi: "Vận động viên điền kinh & Creator",
    ko: "육상 선수 & 크리에이터",
    en: "Track Athlete & Creator",
  } satisfies Localized,
  bio: {
    vi: "Chào mừng bạn đến với góc riêng của mình! Nơi mình chia sẻ những khoảnh khắc cuộc sống, hình ảnh yêu thích và các video mình thực hiện. Cùng kết nối và đồng hành nhé!",
    ko: "제 개인 공간에 오신 것을 환영합니다! 일상의 순간들, 좋아하는 사진, 그리고 제가 만든 영상들을 공유합니다. 함께 소통해요!",
    en: "Welcome to my personal corner! A place where I share moments of life, favorite photos, and videos I make. Let's connect!",
  } satisfies Localized,
  location: {
    vi: "Hàn Quốc",
    ko: "한국",
    en: "South Korea",
  } satisfies Localized,
  aboutIntro: {
    vi: "Mình là andaeseong — vận động viên điền kinh đến từ Hàn Quốc.",
    ko: "저는 안대성입니다. 한국의 육상 선수입니다.",
    en: "I'm andaeseong — a track athlete from South Korea.",
  } satisfies Localized,
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
    title: {
      vi: "Sáng tạo nội dung",
      ko: "콘텐츠 제작",
      en: "Content Creation",
    } satisfies Localized,
    description: {
      vi: "Chia sẻ câu chuyện qua từng bức ảnh và thước phim.",
      ko: "사진과 영상으로 나의 이야기를 공유합니다.",
      en: "Sharing my story through photos and films.",
    } satisfies Localized,
    emoji: "✨",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: {
      vi: "Hình ảnh & Video",
      ko: "사진 & 영상",
      en: "Photos & Videos",
    } satisfies Localized,
    description: {
      vi: "Tuyển chọn những khoảnh khắc đẹp nhất của mình.",
      ko: "가장 멋진 순간들을 엄선하여 소개합니다.",
      en: "A curated collection of my best moments.",
    } satisfies Localized,
    emoji: "📸",
    gradient: "from-indigo-500/20 to-sky-500/10",
  },
  {
    title: {
      vi: "Kết nối cộng đồng",
      ko: "커뮤니티",
      en: "Community",
    } satisfies Localized,
    description: {
      vi: "Luôn sẵn sàng trò chuyện và hợp tác cùng bạn.",
      ko: "언제든지 대화와 협업을 환영합니다.",
      en: "Always open to chat and collaborate.",
    } satisfies Localized,
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
    description: {
      vi: "Chung kết 100m nam trung học - Giải thiếu niên toàn quốc lần 55 (30/05/2026).",
      ko: "제55회 전국소년체육대회 남자 중등부 100m 결승 (2026.05.30).",
      en: "100m boys final - 55th National Youth Sports Festival (May 30, 2026).",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/ghxBTzincO8/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ghxBTzincO8",
  },
  {
    title: "100M에 이어 200M 또 이겨버렸다!",
    description: {
      vi: "Thắng 100m rồi vô địch tiếp 200m với tốc độ điên rồ! (16/03/2025)",
      ko: "100M에 이어 미친 스피드로 200M까지 우승! (2025.03.16)",
      en: "Won the 100m, then crushed the 200m too! (Mar 16, 2025)",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/1qrKjTngM74/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=1qrKjTngM74",
  },
  {
    title: "안대성! 정유신! 또 1, 2등을 가져다 [100m 남초 결승]",
    description: {
      vi: "Chung kết 100m nam tiểu học - cúp đôi 1-2 (16/03/2025)",
      ko: "남초 100m 결승에서 1, 2등 싹쓸이! (2025.03.16)",
      en: "1-2 sweep in the elementary 100m final (Mar 16, 2025)",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/WQG0ETRUxpk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WQG0ETRUxpk",
  },
  {
    title: "초등부 딱! 대! 대구광역시의 금빛 레이스 [4x100mR 결승]",
    description: {
      vi: "Chung kết tiếp sức 4x100m - thành phố Daegu tỏa sáng (08/03/2025)",
      ko: "대구광역시의 금빛 레이스, 4x100m 계주 결승 (2025.03.08)",
      en: "Daegu's golden relay race - 4x100m final (Mar 8, 2025)",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/oU0cWx1HtPI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=oU0cWx1HtPI",
  },
  {
    title: "2022년 가장 빠른 초등학생 [남초 100m 결승]",
    description: {
      vi: "Cầu thủ chạy nhanh nhất tiểu học 2022 - chung kết 100m (08/03/2025)",
      ko: "2022년 가장 빠른 초등학생, 남초 100m 결승 (2025.03.08)",
      en: "The fastest elementary student of 2022 - 100m final (Mar 8, 2025)",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/-S1vaGkemVo/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=-S1vaGkemVo",
  },
  {
    title: "[80m 남초 결승] 제42회 전국육상경기대회 (2021)",
    description: {
      vi: "Chung kết 80m nam - Giải điền kinh toàn quốc lần thứ 42 (13/11/2021)",
      ko: "남초 80m 결승 - 제42회 전국육상경기대회 (2021.11.13)",
      en: "80m boys final - 42nd National Athletics Championships (Nov 13, 2021)",
    } satisfies Localized,
    thumbnail: "https://i.ytimg.com/vi/IcZtaoL8iOM/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=IcZtaoL8iOM",
  },
];
