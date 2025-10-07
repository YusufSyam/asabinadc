import { ISekelasData, ITeamProfile, IWorkshopData } from "./interfaces";

const azasiImg= "/assets/images/teams-profile/azasi.jpg";
const fahmiImg= "/assets/images/teams-profile/fahmi.jpg";
const fauzanImg= "/assets/images/teams-profile/fauzan.jpg";
const ichaImg= "/assets/images/teams-profile/icha.jpg";
const rifkaImg= "/assets/images/teams-profile/rifka.jpg";
const rifqiImg= "/assets/images/teams-profile/rifqi.png";
const septiImg= "/assets/images/teams-profile/septi.jpg";
const shafwanImg= "/assets/images/teams-profile/shafwan.jpg";
const yusufImg= "/assets/images/teams-profile/yusuf.jpg";

const flyerWorkshop1= "/assets/images/workshop-flyer/flyer-workshop1.jpeg";
const flyerWorkshop2= "/assets/images/workshop-flyer/flyer-workshop2.jpeg";
const flyerWorkshop3= "/assets/images/workshop-flyer/flyer-workshop3.jpeg";
const flyerWorkshop4= "/assets/images/workshop-flyer/flyer-workshop4.jpeg";
const flyerWorkshop5= "/assets/images/workshop-flyer/flyer-workshop5.jpg";

const sekelasImage1= "/assets/images/sekelas/sekelas1.jpg";
const sekelasImage2= "/assets/images/sekelas/sekelas2.jpg";
const sekelasImage3= "/assets/images/sekelas/sekelas3.jpg";
const sekelasImage4= "/assets/images/sekelas/sekelas4.jpg";
const sekelasImage5= "/assets/images/sekelas/sekelas5.jpg";

import { IGalleryPhoto } from "./interfaces";

const Imgw1_1: IGalleryPhoto = {
  src: "/assets/images/gallery/w1-1.jpg",
  width: 2340,
  height: 1949,
};
const Imgw1_2: IGalleryPhoto = {
  src: "/assets/images/gallery/w1-2.jpg",
  width: 1607,
  height: 2009,
};
const Imgw1_3: IGalleryPhoto = {
  src: "/assets/images/gallery/w1-3.jpg",
  width: 4032,
  height: 3024,
};
const Imgw2_1: IGalleryPhoto = {
  src: "/assets/images/gallery/w2-1.jpg",
  width: 1992,
  height: 1120,
};
const Imgw2_2: IGalleryPhoto = {
  src: "/assets/images/gallery/w2-2.jpg",
  width: 1992,
  height: 1120,
};
const Imgw2_3: IGalleryPhoto = {
  src: "/assets/images/gallery/w2-3.jpg",
  width: 1992,
  height: 1120,
};
const Imgw3_1: IGalleryPhoto = {
  src: "/assets/images/gallery/w3-1.jpg",
  width: 1992,
  height: 1120,
};
const Imgw3_2: IGalleryPhoto = {
  src: "/assets/images/gallery/w3-2.jpg",
  width: 2856,
  height: 1607,
};
const Imgw3_3: IGalleryPhoto = {
  src: "/assets/images/gallery/w3-3.jpg",
  width: 1992,
  height: 1120,
};
const Imgw4_1: IGalleryPhoto = {
  src: "/assets/images/gallery/w4-1.jpg",
  width: 2016,
  height: 1512,
};
const Imgw4_2: IGalleryPhoto = {
  src: "/assets/images/gallery/w4-2.jpg",
  width: 2016,
  height: 1512,
};
const Imgw4_3: IGalleryPhoto = {
  src: "/assets/images/gallery/w4-3.jpg",
  width: 1512,
  height: 1464,
};
const Imgw5_1: IGalleryPhoto = {
  src: "/assets/images/gallery/w5-1.png",
  width: 507,
  height: 670,
};
const Imgw5_2: IGalleryPhoto = {
  src: "/assets/images/gallery/w5-2.png",
  width: 604,
  height: 766,
};
const Imgw5_3: IGalleryPhoto = {
  src: "/assets/images/gallery/w5-3.png",
  width: 600,
  height: 795,
};
const Imgs1_1: IGalleryPhoto = {
  src: sekelasImage1,
  width: 1512,
  height: 954,
};
const Imgs1_2: IGalleryPhoto = {
  src: sekelasImage2,
  width: 2016,
  height: 1134,
};
const Imgs1_3: IGalleryPhoto = {
  src: sekelasImage3,
  width: 1134,
  height: 2016,
};
const Imgs1_4: IGalleryPhoto = {
  src: sekelasImage4,
  width: 1134,
  height: 2016,
};
const Imgs1_5: IGalleryPhoto = {
  src: sekelasImage5,
  width: 1134,
  height: 2016,
};

export const CTeamProfile: ITeamProfile[] = [
  {
    name: "Muhammad Shafwan",
    imageSrc: shafwanImg,
    cardVariant: "burgundy",
    position: "Chairman",
  },
  {
    name: "Fauzan Muntazar",
    imageSrc: fauzanImg,
    cardVariant: "magenta",
    position: "Secretary",
  },
  {
    name: "M. Azasi Ma’Arif",
    imageSrc: azasiImg,
    cardVariant: "orange",
    position: "Treasurer",
  },
  {
    name: "Nur Wahdannisa",
    imageSrc: ichaImg,
    cardVariant: "magenta",
    position: "Head of Media & Publications",
  },
  {
    name: "Fahmi",
    imageSrc: fahmiImg,
    cardVariant: "burgundy",
    position: "Head of Knowledge & Education",
  },
  {
    name: "Septi Intan Amalia",
    imageSrc: septiImg,
    cardVariant: "orange",
    position: "Head of Public Relations",
  },
  {
    name: "Rifqi Rayhan",
    imageSrc: rifqiImg,
    cardVariant: "orange",
    position: "Media & Publication Officer",
  },
  {
    name: "Rifka Fadhilah",
    imageSrc: rifkaImg,
    cardVariant: "magenta",
    position: "Head of Social Development",
  },
  {
    name: "Muh. Yusuf Syam",
    imageSrc: yusufImg,
    cardVariant: "burgundy",
    position: "Head of IT & Digitalization",
  },
];

export const CWorkshopData: IWorkshopData[] = [
  {
    workshopName: "Workshop membangun website mudah dengan wordpress",
    workshopTitle: "Membangun website dengan Wordpres",
    slug: "membangun-website-dengan-wordpress",
    location: "Nutrihub Makassar",
    locationDetail:
      "Nutrihub Makassar Jl. Lagaligo No.32, Mangkura, Kec. Ujung Pandang, Kota Makassar, Sulawesi Selatan 90114",
    date: new Date(2025, 2, 15),
    time: "14.00 WITA - 17.00 WITA",
    description:
      "🚀 WORKSHOP: MEMBANGUN WEBSITE MUDAH DENGAN WORDPRESS! 🔥\n\nMau punya website sendiri tapi bingung mulai dari mana? Yuk, ikut Workshop Belajar Buat Website dengan WordPress!💻✨  \n\n✅ Tanpa coding, langsung praktik!\n✅ Cocok untuk pemula\n✅ Optimasi desain biar website makin kece\n\n💰 Free! Tanpa Registration Fee \n‼️Limited Seat: 15 Orang pertama",
    speaker: ["Muh. Yusuf Syam, S.Kom"],
    enrollLink: null,
    flyerImageSrc: flyerWorkshop1,
    documentationLink:
      "https://drive.google.com/drive/folders/1pLtX57xNWunOEhdHNHhIwT03AuKBxBuv?usp=sharing",
      galleryPhotos: [Imgw1_1, Imgw1_2, Imgw1_3]
  },
  {
    workshopName:
      "🎓 Pelatihan Gratis: Kuasai Spreadsheet dari Nol!\n📊 Belajar Dasar-Dasar & Rumus Penting untuk Dunia Kerja",
    workshopTitle: "Spreadsheet: Dasar-Dasar & Rumus Penting untuk Dunia Kerja",
    slug: "pelatihan-spreadsheet-1",
    location: "Arma Cafe",
    locationDetail:
      "Arma Cafe Jl. Andi Djemma No.55, Banta-Bantaeng, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90224",
    date: new Date(2025, 4, 10),
    time: "14.00 WITA - 16.30 WITA",
    description:
      "🎓 Pelatihan Gratis: Kuasai Spreadsheet dari Nol!\n📊 Belajar Dasar-Dasar & Rumus Penting untuk Dunia Kerja\n\nIngin mahir menggunakan spreadsheet tapi bingung mulai dari mana?\nAsabina Development Centre hadir dengan pelatihan GRATIS untuk kamu yang ingin:\n\n✅ Mengenal fungsi dasar spreadsheet\n✅ Belajar rumus-rumus penting (SUM, IF, VLOOKUP, dan lainnya!)\n✅ Meningkatkan skill untuk kebutuhan kerja dan usaha\n✅ Langsung praktik\n\n🎁 Bonus:\nE-sertifikat\nTemplate spreadsheet siap pakai\nGrup belajar & mentoring lanjutan\n\n📩 Limited Seat: 20 Orang Pertama!",
    speaker: ["Azasi Ma'arif, S.M", "Muh. Shafwan Zhalifunnas, S.Psi"],
    enrollLink: null,
    flyerImageSrc: flyerWorkshop2,
    documentationLink:
      "https://drive.google.com/drive/folders/1Fg7e-ArQPooJxDD8tz9tFa_w7J6Mw19q?usp=sharing",
      galleryPhotos: [Imgw2_1, Imgw2_2, Imgw2_3]
  },
  {
    workshopName: "Workshop CV & Linkedin untuk memasuki dunia profesional",
    workshopTitle: "Job Ready in Style: CV & LinkedIn",
    slug: "job-ready-in-style-cv-and-linkedin",
    location: "Arma Cafe",
    locationDetail:
      "Arma Cafe Jl. Andi Djemma No.55, Banta-Bantaeng, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90224",
    date: new Date(2025, 5, 21),
    time: "13.00 WITA - 16.00 WITA",
    description:
      "💼 Siap Melangkah ke Dunia Kerja dengan Percaya Diri\n\nIngin mulai merintis karier tapi bingung cara membuat CV yang menarik?\n\nAtau sudah punya LinkedIn tapi belum tahu cara mengoptimalkannya?\n\nTenang, kita belajar bareng di Workshop Pembuatan CV & LinkedIn, GRATIS!\n\nKegiatan ini cocok untuk kamu yang ingin:\n✅ Belajar menyusun CV yang kuat dan menarik\n✅ Membuat dan mengoptimalkan profil LinkedIn secara profesional\n✅ Langsung praktik dan dapat feedback dari mentor\n\n🎁 Bonus:\n📑 E-Sertifikat\n📲 Konten LinkedIn dan CV untuk persiapan kerja\n👥 Grup belajar & diskusi lanjutan\n\n📌 Khusus 20 peserta pertama!",
    speaker: ["Siti Hajar Auliannisa, S.Psi"],
    enrollLink: null,
    flyerImageSrc: flyerWorkshop3,
    documentationLink:
      "https://drive.google.com/drive/folders/1tKyEXzH5f86Cs1OtWBxOl2d0p7enaPA7?usp=sharing",
      galleryPhotos: [Imgw3_1, Imgw3_2, Imgw3_3]
  },
  {
    workshopName: "The Aware Self: A Thematic Session on Self-Awareness",
    workshopTitle: "The Aware Self: A thematic session on self-awareness",
    slug: "the-aware-self",
    location: "Arma Cafe",
    locationDetail:
      "Arma Cafe Jl. Andi Djemma No.55, Banta-Bantaeng, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90224",
    date: new Date(2025, 7, 10),
    time: "13.00 WITA - 16.00 WITA",
    description:
      "A gentle session for those who seek to understand themselves a little more_\n\n🌿 The Aware Self\nA thematic session on self-awareness\n\nSesi ini akan membantumu:\n✅ Mengenali emosi dan nilai diri\n✅ Memahami pola pikir dan reaksi\n✅ Membangun hubungan yang lebih sehat dengan dirimu sendiri\n\n📅 Hari/Tanggal: Minggu, 10 Agustus 2025\n🕐 Waktu: 12.30 – 16.00 WITA\n📍 Tempat: Arma Cafe (cek lokasi di Google Maps)\n\n🎯 Terbuka untuk umum!\n📌 Kuota terbatas\n\nSave your spot. This is your space to reflect.",
    speaker: [
      "Bambang Pratama J, S.Psi., M.Psi.",
      "Nurfaidah Ardis, S.Psi., M.Psi.",
    ],
    enrollLink: null,
    flyerImageSrc: flyerWorkshop4,
    documentationLink:
      "https://drive.google.com/drive/folders/1_sFfGf0GL-QSOD_IrnJVvciRrp-2XeyD?usp=sharing",
      galleryPhotos: [Imgw4_1, Imgw4_2, Imgw4_3]
  },
  {
    workshopName:
      "Canva Playdate🎨✨\nWorkshop Desain Kreatif untuk berbagai kebutuhan (bisnis/kantor/kampus dan lain-lain).\n",
    workshopTitle: "Canva Playdate: Dasar-dasar Desain",
    slug: "canva-playdate-1",
    location: "Saja Cafe Alauddin",
    locationDetail:
      "Saja Cafe Jl. Sultan Alauddin, Mangasa, Kec. Tamalate, Kota Makassar, Sulawesi Selatan",
    date: new Date(2025, 8, 20),
    time: "13.30 WITA - 16.30 WITA",
    description:
      "Canva Playdate🎨✨\n\nWorkshop Desain Kreatif untuk berbagai kebutuhan (bisnis/kantor/kampus dan lain-lain).\n\nWorkshop ini akan:\n✅ Membekali peserta dengan konsep dan keterampilan dasar desain grafis.\n✅ Memperkenalkan penggunaan Canva secara praktis dan menyenangkan. \n✅ Membantu peserta menghasilkan desain visual sederhana (poster, flyer, konten media sosial) yang siap digunakan.\n✅ Menumbuhkan rasa percaya diri dalam berkreasi visual.\n\n🎁 Bonus:\n- E-sertifikat\n- \u2060Relasi baru\n- \u2060Template praktik desain\n\n📌Khusus 20 peserta pertama!",
    speaker: [
      "Nur Wahdannisa S.Ds",
      "Fauzyah Ramadhani S.Ds",
      "Gina Syukrani S.Ds",
    ],
    enrollLink: null,
    flyerImageSrc: flyerWorkshop5,
    documentationLink:
      "https://drive.google.com/drive/folders/1DIRxIbS8kwgUHs2J4WBOI6NteJhEO8wO?usp=sharing",
    isUpcoming: false,
      galleryPhotos: [Imgw5_1, Imgw5_2, Imgw5_3]
  },
];

export const CSekelasData: ISekelasData[] = [
  {
    sekelasName: "Kelas Je'ne Ci'nong",
    date: new Date(2025, 9, 4),
    isUpcoming: false,
    location: "Je'ne Ci'nong",
    locationDetail: "Je'ne Ci'nong",
    meetingCount: 1,
    flyerImageSrc: sekelasImage1,
    agenda:
      "Pengenalan diri, ASABINA dan program sekelas, serta pendataan para calon siswa",
  },
  {
    sekelasName: "Kelas Je'ne Ci'nong",
    date: new Date(2025, 9, 11),
    isUpcoming: true,
    location: "Je'ne Ci'nong",
    locationDetail: "Je'ne Ci'nong",
    meetingCount: 2,
    flyerImageSrc: sekelasImage2,
    agenda:
      "Kelas menghitung dan bahasa inggris",
  },
  // {
  //   sekelasName: "Kelas Je'ne Ci'nong",
  //   date: new Date(2025, 9, 4),
  //   isUpcoming: true,
  //   location: "Je'ne Ci'nong",
  //   locationDetail: "Je'ne Ci'nong",
  //   meetingCount: 1,
  //   flyerImageSrc: sekelasImage1,
  //   agenda:
  //     "Pengenalan diri, ASABINA dan program sekelas, serta pendataan para calon siswa",
  // },
  // {
  //   sekelasName: "Kelas Je'ne Ci'nong",
  //   date: new Date(2025, 9, 4),
  //   isUpcoming: true,
  //   location: "Je'ne Ci'nong",
  //   locationDetail: "Je'ne Ci'nong",
  //   meetingCount: 1,
  //   flyerImageSrc: sekelasImage1,
  //   agenda:
  //     "Pengenalan diri, ASABINA dan program sekelas, serta pendataan para calon siswa",
  // },
];


export const CGalleryPhotos: IGalleryPhoto[] = [
  Imgw1_1,
  Imgw5_2,
  Imgw2_1,
  Imgs1_4,
  Imgw4_2,
  Imgw5_1,
  Imgw1_3,
  Imgw2_2,
  Imgw2_3,
  Imgs1_5,
  Imgw3_3,
  Imgw4_1,
  Imgw4_3,
  Imgw1_2,
  Imgw3_1,
  Imgs1_2,
  Imgw3_2,
  Imgw5_3,
  Imgs1_3,
  Imgs1_1,
];
