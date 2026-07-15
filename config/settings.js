/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "2020";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Ariff";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Location Unknown",             // ← GANTI JUDUL LAGU
    artist: "Honne",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Satu senyum dari kamu aja udah bisa bikin hari aku jadi bagus." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "Kamu itu alasan kenapa hati aku selalu ngerasa penuh." },

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "happy birthday sayangggkuu!!! happy level up. 🤍 semoga di umur yang baru ini kamu jadi pribadi yang makin baik dari sebelumnya, selalu dikasih umur yang panjang, sehat fisik maupun mental, rezekinya makin lancar, semua urusannya dipermudah, dan semoga Allah selalu nambahin rasa sabar di setiap langkah kamu. aamiin. aku juga berharap semua impian yang lagi kamu perjuangin pelan-pelan bisa jadi kenyataan.",
  "semangat terus ya sayang buat ngejar masa depan yang kamu impiin. kalau hari ini gagal, besok kita coba lagi. jangan pernah putus asa sama usaha kamu sendiri, karena aku yakin kamu bisa sampai di titik yang kamu mau. selalu percaya sama diri kamu sendiri ya, karena aku bakal selalu percaya sama kamu dan bangga sama setiap proses yang kamu lewatin.",
  "aku juga mau bilang makasih banyak ya. makasih karena walaupun kita dipisahin jarak dan kamu sering sibuk, kamu tetep selalu nyempetin waktu buat aku. kamu selalu bikin aku ngerasa ditemenin dan ga pernah ngerasa sendirian. aku bakal selalu ada di belakang kamu, selalu doain kamu, support kamu, dan jadi orang yang paling bangga ngeliat kamu terus berkembang. jangan lupain aku ya di setiap perjalanan kamu. 🤍",
  "sayang, di sana jaga diri baik-baik yaa. fokus sama tujuan kamu, jangan terlalu dengerin omongan orang yang ga bikin kamu berkembang. istirahat yang cukup, jangan terlalu maksa diri kalau udah capek. pokoknya setiap hari doa aku isinya selalu hal-hal baik buat kamu. semoga kamu hidup lebih lama, selalu bahagia, dan semua langkahmu dijaga sama Allah. sekali lagi, happy birthday abyku, sayangku, semestakuu. i love you always. 🤍🌏",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bab Satu",
    title: "Awal Mula Semuanya",
    text:  "Momen di mana semuanya tiba-tiba klik dan jadi masuk akal.",
  },
  {
    depth: "8m",
    year:  "Bab Dua",
    title: "Hari-Hari yang Tenang",
    text:  "Cuma kamu, aku, dan momen sederhana yang ternyata artinya segalanya.",
  },
  {
    depth: "16m",
    year:  "Bab Tiga",
    title: "Ngelewatin Badai",
    text:  "Kita pernah ngalamin hari-hari susah, tapi jujur, kita selalu nemu jalan buat balik lagi.",
  },
  {
    depth: "24m",
    year:  "Bab Empat",
    title: "Nemuin Cahaya",
    text:  "Kamu literally bagian paling terang di perjalanan aku, bahkan di air yang paling dalam sekalipun.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "Semoga tahun ini bawa ketenangan kayak laut dan sedalam kebaikan hati kamu." },
  { icon: "shell",   text: "Semoga hari-hari kamu secerah matahari di atas air, dan malemnya setenang ombak yang lagi surut." },
  { icon: "star",    text: "Semoga setiap harapan kecil kamu dateng tepat pas kamu lagi butuh banget." },
  { icon: "compass", text: "Ke mana pun tahun ini bawa kamu pergi, semoga kamu selalu nemu jalan balik ke orang-orang yang sayang sama kamu." },
  { icon: "anchor",  text: "Tetap membumi, tetap bersyukur, dan jujur aja, tetap secantik ini apa adanya." },
  { icon: "heart",   text: "Happy birthday — cheers buat kenangan setahun lagi yang bener-bener layak dikenang." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281913083213";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hai, aku baru aja buka botolnya. Makasih banyak udah bikin hari aku jadi spesial! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);