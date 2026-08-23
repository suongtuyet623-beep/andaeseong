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
  { src: "/images/gallery/photo-1.jpg", alt: "andaeseong 1" },
  { src: "/images/gallery/photo-2.jpg", alt: "andaeseong 2" },
  { src: "/images/gallery/photo-3.jpg", alt: "andaeseong 3" },
  { src: "/images/gallery/photo-4.jpg", alt: "andaeseong 4" },
  { src: "/images/gallery/photo-5.jpg", alt: "andaeseong 5" },
  { src: "/images/gallery/photo-6.jpg", alt: "andaeseong 6" },
  { src: "/images/gallery/photo-7.jpg", alt: "andaeseong 7" },
  { src: "/images/gallery/photo-8.jpg", alt: "andaeseong 8" },
  { src: "/images/gallery/photo-9.jpg", alt: "andaeseong 9" },
  { src: "/images/gallery/photo-10.jpg", alt: "andaeseong 10" },
  { src: "/images/gallery/photo-11.jpg", alt: "andaeseong 11" },
  { src: "/images/gallery/photo-12.jpg", alt: "andaeseong 12" },
  { src: "/images/gallery/photo-13.jpg", alt: "andaeseong 13" },
  { src: "/images/gallery/photo-14.jpg", alt: "andaeseong 14" },
  { src: "/images/gallery/photo-15.jpg", alt: "andaeseong 15" },
  { src: "/images/gallery/photo-16.jpg", alt: "andaeseong 16" },
  { src: "/images/gallery/photo-17.jpg", alt: "andaeseong 17" },
  { src: "/images/gallery/photo-18.jpg", alt: "andaeseong 18" },
];

export const press = [
  {
    title: "소년체전 400m 계주 기록 갱신 '금메달'",
    source: "경남일보",
    summary: {
      vi: "Đội Gyeongnam phá kỷ lục trung học ở tiếp sức 400m (4x100mR) tại Đại hội thể thao thiếu niên toàn quốc lần 54, giành Huy chương Vàng.",
      ko: "제54회 전국소년체육대회 400m 계주(4x100mR)에서 경남 선수들이 중등부 최고 기록을 경신하며 금메달을 획득했습니다.",
      en: "Team Gyeongnam broke the middle-school record in the 400m relay (4x100mR) at the 54th National Youth Sports Festival, taking gold.",
    } satisfies Localized,
    image: "/images/press/press-1.jpg",
    url: "https://www.gnnews.co.kr/news/articleView.html?idxno=609832",
  },
  {
    title: "진주시육상연맹, 육상꿈나무 장학금 전달",
    source: "경남도민신문",
    summary: {
      vi: "Liên đoàn điền kinh thành phố Jinju trao học bổng cho 21 VĐV nhí của tỉnh, khích lệ tinh thần 'chân chính hơn là nhanh nhất'.",
      ko: "진주시육상연맹이 관내 초중등 육상꿈나무 선수 21명에게 장학금을 전달했습니다.",
      en: "The Jinju Athletics Federation awarded scholarships to 21 young track athletes of the region.",
    } satisfies Localized,
    image: "/images/press/press-2.jpg",
    url: "http://www.gnjnews.co.kr/news/articleView.html?idxno=91957",
  },
  {
    title: "파시코 소식 - 진주도동초 안대성 선수",
    source: "네이버 블로그",
    summary: {
      vi: "Blog Naver của Pasico giới thiệu VĐV tương lai andaeseong — học sinh tiểu học Dodong, thành phố Jinju.",
      ko: "파시코 블로그가 진주 도동초의 육상 유망주 안대성 선수를 소개했습니다.",
      en: "Pasico's Naver blog features rising track star andaeseong from Dodong Elementary, Jinju.",
    } satisfies Localized,
    image: "/images/press/press-3.jpg",
    url: "https://m.blog.naver.com/posyko96/223153820747",
  },
  {
    title: "경남교육홍보관",
    source: "경남교육청",
    summary: {
      vi: "Cổng thông tin của Sở Giáo dục tỉnh Gyeongnam đăng tải tin tức về thành tích điền kinh của học sinh tỉnh nhà.",
      ko: "경남교육청 홍보관에 안대성 선수의 육상 성과 소식이 게재되었습니다.",
      en: "Featured on the publicity portal of the Gyeongnam Office of Education.",
    } satisfies Localized,
    image: "/images/press/press-4.png",
    url: "https://www.gne.go.kr/pr/user/bbs/BD_selectBbs.do?q_bbsSn=1509&q_bbsDocNo=1606648",
  },
  {
    title: "[전국소년체전] 안대성, 초등부 최우수선수(MVP) 선정",
    source: "경남신문",
    summary: {
      vi: "andaeseong được vinh danh là Cầu thủ xuất sắc nhất (MVP) bậc tiểu học tại Đại hội thể thao thiếu niên toàn quốc lần thứ 52.",
      ko: "안대성 선수가 제52회 전국소년체육대회에서 초등부 최우수선수(MVP)로 선정되었습니다.",
      en: "andaeseong was named MVP of the elementary division at the 52nd National Youth Sports Festival.",
    } satisfies Localized,
    image: "/images/press/press-5.jpg",
    url: "https://m.knnews.co.kr/mView.php?idxno=1405198&gubun=",
  },
  {
    title: "경남 육상꿈나무들, 전국대회 종합 준우승",
    source: "경남신문",
    summary: {
      vi: "Đội điền kinh thiếu niên Gyeongnam đạt Á quân toàn quốc tại 'Kyobo Life Cup 2022' — mầm móng tương lai của điền kinh Hàn Quốc.",
      ko: "2022 교보생명컵 전국초등학교 시·도대항육상경기대회에서 경남 육상팀이 종합 준우승을 차지했습니다.",
      en: "Team Gyeongnam finished overall runner-up at the 2022 Kyobo Life Cup national elementary athletics meet.",
    } satisfies Localized,
    image: "/images/press/press-6.jpg",
    url: "https://m.knnews.co.kr/mView.php?idxno=1380927",
  },
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
