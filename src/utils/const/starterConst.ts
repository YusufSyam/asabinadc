import { ITeamProfile, IWorkshopData } from "./interfaces";
import azasiImg from "../../../public/assets/images/teams-profile/azasi.jpg";
import fahmiImg from "../../../public/assets/images/teams-profile/fahmi.jpg";
import fauzanImg from "../../../public/assets/images/teams-profile/fauzan.jpg";
import ichaImg from "../../../public/assets/images/teams-profile/icha.jpg";
import rifkaImg from "../../../public/assets/images/teams-profile/rifka.jpg";
import rifqiImg from "../../../public/assets/images/teams-profile/rifqi.png";
import septiImg from "../../../public/assets/images/teams-profile/septi.jpg";
import shafwanImg from "../../../public/assets/images/teams-profile/shafwan.jpg";
import yusufImg from "../../../public/assets/images/teams-profile/yusuf.jpg";

import flyerWorkshop1 from "../../../public/assets/images/workshop-flyer/flyer-workshop1.jpeg"
import flyerWorkshop2 from "../../../public/assets/images/workshop-flyer/flyer-workshop2.jpeg"
import flyerWorkshop3 from "../../../public/assets/images/workshop-flyer/flyer-workshop3.jpeg"
import flyerWorkshop4 from "../../../public/assets/images/workshop-flyer/flyer-workshop4.jpeg"
import flyerWorkshop5 from "../../../public/assets/images/workshop-flyer/flyer-workshop5.jpg"

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
  },
  {
    workshopName:
      "🎓 Pelatihan Gratis: Kuasai Spreadsheet dari Nol!\n📊 Belajar Dasar-Dasar & Rumus Penting untuk Dunia Kerja",
    workshopTitle: "Pelatihan Spreadsheet",
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
  },
  {
    workshopName: "Workshop CV & Linkedin untuk memasuki dunia profesional",
    workshopTitle: "Job Ready in Style: CV & LinkedIn",
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
  },
  {
    workshopName: "The Aware Self: A Thematic Session on Self-Awareness",
    workshopTitle: "The Aware Self: A thematic session on self-awareness",
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
  },
  {
    workshopName:
      "Canva Playdate🎨✨\nWorkshop Desain Kreatif untuk berbagai kebutuhan (bisnis/kantor/kampus dan lain-lain).\n",
    workshopTitle: "Canva Playdate",
    location: "Saja Cade Alauddin",
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
      isUpcoming: false
  },
];
