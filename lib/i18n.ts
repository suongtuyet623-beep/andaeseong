export const locales = ["vi", "ko", "en"] as const;

export type Locale = (typeof locales)[number];

export type Localized = Record<Locale, string>;

export const localeLabels: Record<Locale, string> = {
  vi: "Việt",
  ko: "한국어",
  en: "EN",
};

type UiStrings = {
  navAbout: string;
  navGallery: string;
  navVideos: string;
  navConnect: string;
  navFollow: string;
  heroViewGallery: string;
  heroViewVideos: string;
  aboutPrefix: string;
  aboutAccent: string;
  aboutIntro: string;
  galleryPrefix: string;
  galleryAccent: string;
  gallerySubtitle: string;
  videosPrefix: string;
  videosAccent: string;
  videosSubtitle: string;
  connectPrefix: string;
  connectAccent: string;
  connectSubtitle: string;
  madeWith: string;
};

export const ui: Record<Locale, UiStrings> = {
  vi: {
    navAbout: "Giới thiệu",
    navGallery: "Ảnh",
    navVideos: "Video",
    navConnect: "Kết nối",
    navFollow: "Theo dõi",
    heroViewGallery: "Xem bộ sưu tập",
    heroViewVideos: "Xem video",
    aboutPrefix: "Giới thiệu",
    aboutAccent: "bản thân",
    aboutIntro: "",
    galleryPrefix: "Bộ sưu tập",
    galleryAccent: "hình ảnh",
    gallerySubtitle: "Những khoảnh khắc mình muốn lưu giữ và chia sẻ với bạn.",
    videosPrefix: "Video",
    videosAccent: "nổi bật",
    videosSubtitle: "Đừng quên ghé kênh để xem nhiều nội dung hơn nữa nhé!",
    connectPrefix: "Kết nối",
    connectAccent: "với tôi",
    connectSubtitle: "Theo dõi mình trên các nền tảng để không bỏ lỡ nội dung mới nhất. Hẹn gặp bạn ở đó!",
    madeWith: "Được thực hiện với ❤️.",
  },
  ko: {
    navAbout: "소개",
    navGallery: "사진",
    navVideos: "영상",
    navConnect: "연락",
    navFollow: "팔로우",
    heroViewGallery: "갤러리 보기",
    heroViewVideos: "영상 보기",
    aboutPrefix: "",
    aboutAccent: "자기소개",
    aboutIntro: "",
    galleryPrefix: "사진",
    galleryAccent: "갤러리",
    gallerySubtitle: "함께 나누고 싶은 나의 특별한 순간들입니다.",
    videosPrefix: "인기",
    videosAccent: "영상",
    videosSubtitle: "유튜브 채널에서 더 많은 영상을 만나보세요!",
    connectPrefix: "나와",
    connectAccent: "함께하기",
    connectSubtitle: "다양한 플랫폼에서 팔로우하고 새로운 소식을 놓치지 마세요. 거기서 만나요!",
    madeWith: "❤️으로 만들었습니다.",
  },
  en: {
    navAbout: "About",
    navGallery: "Photos",
    navVideos: "Videos",
    navConnect: "Connect",
    navFollow: "Follow",
    heroViewGallery: "View Gallery",
    heroViewVideos: "Watch Videos",
    aboutPrefix: "About",
    aboutAccent: "me",
    aboutIntro: "",
    galleryPrefix: "Photo",
    galleryAccent: "Gallery",
    gallerySubtitle: "Moments I want to keep and share with you.",
    videosPrefix: "Featured",
    videosAccent: "Videos",
    videosSubtitle: "Visit my YouTube channel for even more content!",
    connectPrefix: "Connect",
    connectAccent: "with me",
    connectSubtitle: "Follow me on all platforms so you never miss new content. See you there!",
    madeWith: "Made with ❤️.",
  },
};
