// =========================================================================
// KATAKITA.ID - WORDLE & HANGMAN KREATIF (MULTI-TOPIK & TINGKAT KESULITAN)
// =========================================================================

const TOPIC_LABELS = {
    acak: "🎲 Acak",
    kuliner: "🍜 Kuliner",
    alam: "🌋 Alam",
    hewan: "🐅 Hewan & Flora",
    budaya: "🎭 Budaya",
    sains: "🔬 Sains & Tekno",
    sastra: "📜 Sastra & Kiasan"
};

const DIFF_LABELS = {
    mudah: "Mudah",
    sedang: "Sedang",
    sulit: "Sulit 💀"
};

// =========================================================================
// 1. BANK SOAL WORDLE (5 HURUF) BERDASARKAN TOPIK & TINGKAT KESULITAN
// =========================================================================
const WORDLE_BANK = [
    // --- TOPIK: KULINER ---
    { word: "BERAS", topic: "kuliner", diff: "mudah", clue: "Butir padi yang sudah dikupas kulitnya, siap ditanak menjadi nasi." },
    { word: "TELUR", topic: "kuliner", diff: "mudah", clue: "Bahan pangan bercangkang yang dihasilkan oleh unggas." },
    { word: "SAYUR", topic: "kuliner", diff: "mudah", clue: "Masakan berkuah atau dedaunan pendamping makan nasi." },
    { word: "KECAP", topic: "kuliner", diff: "mudah", clue: "Saus kental berwarna hitam manis atau asin dari kedelai." },
    { word: "BUBUR", topic: "kuliner", diff: "mudah", clue: "Makanan lembek dan berair yang dimasak dari beras." },
    { word: "PECEL", topic: "kuliner", diff: "sedang", clue: "Hidangan rebusan sayuran yang disiram bumbu sambal kacang." },
    { word: "RAWON", topic: "kuliner", diff: "sedang", clue: "Sup daging berkuah hitam khas Jawa Timur dengan bumbu keluak." },
    { word: "GUDEG", topic: "kuliner", diff: "sedang", clue: "Masakan khas Yogyakarta dari nangka muda yang dimasak dengan santan." },
    { word: "GULAI", topic: "kuliner", diff: "sedang", clue: "Masakan berkuah santan kuning kental berbumbu rempah." },
    { word: "OPOR", topic: "kuliner", diff: "mudah", clue: "" }, // filtered if != 5
    { word: "DODOL", topic: "kuliner", diff: "sedang", clue: "Penganan manis kenyal dari tepung ketan, santan, dan gula merah." },
    { word: "TEMPE", topic: "kuliner", diff: "mudah", clue: "Makanan khas Indonesia dari fermentasi biji kedelai dengan ragi." },
    { word: "ONCOM", topic: "kuliner", diff: "sulit", clue: "Makanan khas Jawa Barat hasil fermentasi bungkil tahu atau kacang." },
    { word: "LEMPER", topic: "kuliner", diff: "sedang", clue: "" },
    { word: "SERABI", topic: "kuliner", diff: "sedang", clue: "" },
    { word: "TAPAI", topic: "kuliner", diff: "sulit", clue: "Penganan hasil fermentasi singkong atau ketan dengan ragi." },
    { word: "BIKA", topic: "kuliner", diff: "sulit", clue: "" },
    { word: "LAKSA", topic: "kuliner", diff: "sulit", clue: "Hidangan berkuah santan bumbu kuning berisi mi atau bihun." },
    { word: "TAOCO", topic: "kuliner", diff: "sulit", clue: "Bumbu makanan dari kedelai rebus yang diawetkan dengan garam." },
    { word: "EMPING", topic: "kuliner", diff: "sedang", clue: "" },
    { word: "PETIS", topic: "kuliner", diff: "sulit", clue: "Bumbu kental berwarna hitam dari rebusan kaldu ikan atau udang." },
    { word: "KULAK", topic: "kuliner", diff: "sulit", clue: "Membeli bahan pangan dalam jumlah besar untuk dijual kembali." },

    // --- TOPIK: ALAM & GEOGRAFI ---
    { word: "HUJAN", topic: "alam", diff: "mudah", clue: "Titik-titik air yang berjatuhan dari langit karena pendinginan." },
    { word: "PULAU", topic: "alam", diff: "mudah", clue: "Daratan yang dikelilingi oleh air laut atau danau." },
    { word: "DANAU", topic: "alam", diff: "mudah", clue: "Genangan air tawar yang sangat luas dan dikelilingi daratan." },
    { word: "HUTAN", topic: "alam", diff: "mudah", clue: "Kawasan luas yang ditumbuhi pepohonan lebat secara alami." },
    { word: "KABUT", topic: "alam", diff: "mudah", clue: "Uap air putih yang melayang dekat permukaan tanah atau gunung." },
    { word: "BADAI", topic: "alam", diff: "sedang", clue: "Angin kencang ekstrem yang menyertai cuaca buruk di laut/darat." },
    { word: "MUARA", topic: "alam", diff: "sedang", clue: "Tempat berakhirnya aliran sungai di laut atau danau." },
    { word: "SELAT", topic: "alam", diff: "sedang", clue: "Laut sempit yang berada di antara dua pulau." },
    { word: "TELUK", topic: "alam", diff: "sedang", clue: "Bagian laut yang menjorok ke daratan." },
    { word: "LAHAR", topic: "alam", diff: "sedang", clue: "Lumpur batu panas yang mengalir keluar dari kawah gunung berapi." },
    { word: "GURUN", topic: "alam", diff: "sedang", clue: "Padang luas yang tandus dan tertutup pasir." },
    { word: "PALUNG", topic: "alam", diff: "sedang", clue: "" },
    { word: "KAWAH", topic: "alam", diff: "sedang", clue: "Bagian puncak gunung berapi yang berbentuk lekukan besar." },
    { word: "DELTA", topic: "alam", diff: "sulit", clue: "Tanah endapan berbentuk segitiga di muara sungai." },
    { word: "ZENIT", topic: "alam", diff: "sulit", clue: "Titik puncak di angkasa tepat di atas kepala pengamat." },
    { word: "NADIR", topic: "alam", diff: "sulit", clue: "Titik kaki langit yang berlawanan langsung dengan titik puncak (zenit)." },
    { word: "KORAL", topic: "alam", diff: "sulit", clue: "Batu karang laut yang dibentuk oleh kerangka hewan polip." },
    { word: "Geyser", topic: "alam", diff: "sulit", clue: "" },
    { word: "FLORA", topic: "alam", diff: "sulit", clue: "Keseluruhan kehidupan jenis tumbuh-tumbuhan di suatu habitat." },

    // --- TOPIK: HEWAN & FLORA ---
    { word: "GAJAH", topic: "hewan", diff: "mudah", clue: "Mamalia darat terbesar yang memiliki belalai panjang dan gading." },
    { word: "SINGA", topic: "hewan", diff: "mudah", clue: "Kucing besar pemangsa yang pejantannya memiliki surai lebat." },
    { word: "BUAYA", topic: "hewan", diff: "mudah", clue: "Reptil besar berkulit keras yang hidup di sungai dan rawa." },
    { word: "SEMUT", topic: "hewan", diff: "mudah", clue: "Serangga kecil pekerja keras yang hidup berkoloni di dalam tanah." },
    { word: "LEBAH", topic: "hewan", diff: "mudah", clue: "Serangga bersengat penghasil madu dan penyerbuk bunga." },
    { word: "ELANG", topic: "hewan", diff: "sedang", clue: "Burung pemangsa berparuh bengkok dan berpenglihatan tajam." },
    { word: "BELUT", topic: "hewan", diff: "sedang", clue: "Ikan air tawar bertubuh panjang licin tanpa sisik seperti ular." },
    { word: "PENYU", topic: "hewan", diff: "sedang", clue: "Kura-kura laut besar yang kakinya berbentuk dayung." },
    { word: "BADAK", topic: "hewan", diff: "sedang", clue: "Mamalia berkulit tebal yang memiliki cula di atas hidungnya." },
    { word: "TUPAI", topic: "hewan", diff: "sedang", clue: "Mamalia kecil pemakan buah yang pandai melompat dari dahan ke dahan." },
    { word: "TAPIR", topic: "hewan", diff: "sulit", clue: "Satwa herbivora berhidung mirip belalai pendek dengan warna tubuh hitam-putih." },
    { word: "KOALA", topic: "hewan", diff: "sulit", clue: "Mamalia berkantung pemakan daun eukaliptus asal Australia." },
    { word: "LEMUR", topic: "hewan", diff: "sulit", clue: "Primata bermata bulat besar dan berekor cincin panjang dari Madagaskar." },
    { word: "BAKAU", topic: "hewan", diff: "sulit", clue: "Tumbuhan pepohonan tropis berakar tunjang di tepi pantai berlumpur." },
    { word: "PINUS", topic: "hewan", diff: "sulit", clue: "Pohon berdaun jarum yang menghasilkan getah terpentin dan runjung." },

    // --- TOPIK: BUDAYA & DAERAH ---
    { word: "BATIK", topic: "budaya", diff: "mudah", clue: "Kain bergambar khas Indonesia yang dibuat dengan malam (lilin)." },
    { word: "CANDI", topic: "budaya", diff: "mudah", clue: "Bangunan kuno dari batu tempat pemujaan peninggalan zaman Hindu-Buddha." },
    { word: "KERIS", topic: "budaya", diff: "mudah", clue: "Senjata tikam tradisional Nusantara yang bilahnya berkelok-kelok (luk)." },
    { word: "TARI", topic: "budaya", diff: "mudah", clue: "" },
    { word: "SILAT", topic: "budaya", diff: "mudah", clue: "Seni bela diri tradisional khas kepulauan Nusantara." },
    { word: "KEBAYA", topic: "budaya", diff: "sedang", clue: "" },
    { word: "TENUN", topic: "budaya", diff: "sedang", clue: "Kerajinan kain tradisional yang dibuat dengan menyilangkan benang pakan dan lungsin." },
    { word: "REBAB", topic: "budaya", diff: "sedang", clue: "Alat musik gesek tradisional berdawai dua atau tiga dalam gamelan." },
    { word: "LURIK", topic: "budaya", diff: "sedang", clue: "Kain tenun tradisional Jawa dengan corak jalur-jalur garis." },
    { word: "DEBUS", topic: "budaya", diff: "sulit", clue: "Kesenian bela diri tradisional Banten yang mempertunjukkan kekebalan tubuh." },
    { word: "TIFAP", topic: "budaya", diff: "sulit", clue: "" },
    { word: "SUBAK", topic: "budaya", diff: "sulit", clue: "Sistem pengairan sawah tradisional secara kemasyarakatan di Bali." },
    { word: "HONAI", topic: "budaya", diff: "sulit", clue: "Rumah adat tradisional masyarakat pegunungan Papua yang beratap jerami bundar." },
    { word: "BADIK", topic: "budaya", diff: "sulit", clue: "Senjata tajam tradisional berbentuk pisau khas suku Bugis dan Makassar." },
    { word: " Joglo", topic: "budaya", diff: "sedang", clue: "Bentuk atap rumah adat tradisional masyarakat Jawa." },

    // --- TOPIK: SAINS & TEKNOLOGI ---
    { word: "ROBOT", topic: "sains", diff: "mudah", clue: "Mesin otomatis yang dapat diprogram untuk melakukan tugas fisik." },
    { word: "SINAR", topic: "sains", diff: "mudah", clue: "Pancaran gelombang cahaya yang menerangi ruang." },
    { word: "LOGAM", topic: "sains", diff: "mudah", clue: "Unsur kimia keras penghantar listrik dan panas seperti besi atau tembaga." },
    { word: "VIRUS", topic: "sains", diff: "mudah", clue: "Mikroorganisme parasit super kecil atau program perusak komputer." },
    { word: "RADAR", topic: "sains", diff: "sedang", clue: "Alat pendeteksi posisi pesawat atau kapal menggunakan gelombang radio." },
    { word: "ORBIT", topic: "sains", diff: "sedang", clue: "Jalur lintasan tetap benda langit mengelilingi bintang atau planet." },
    { word: "KOMET", topic: "sains", diff: "sedang", clue: "Benda langit berekor cahaya yang mengelilingi matahari." },
    { word: "FOSIL", topic: "sains", diff: "sedang", clue: "Sisa tulang atau jejak makhluk hidup purba yang telah membatu." },
    { word: "LASER", topic: "sains", diff: "sedang", clue: "Pancaran cahaya monokromatik berintensitas sangat tinggi dan terarah." },
    { word: "ENZIM", topic: "sains", diff: "sulit", clue: "Molekul protein kompleks yang berfungsi sebagai katalisator reaksi biokimia." },
    { word: "KUOTA", topic: "sains", diff: "mudah", clue: "Batas jatah data internet atau alokasi jumlah tertentu." },
    { word: "FOTON", topic: "sains", diff: "sulit", clue: "Partikel dasar kuantum radiasi elektromagnetik atau cahaya." },
    { word: "ANODA", topic: "sains", diff: "sulit", clue: "Kutub elektroda bermuatan positif dalam sel elektrokimia." },
    { word: "SERUM", topic: "sains", diff: "sulit", clue: "Bagian cair dari darah yang mengandung antibodi penangkal penyakit." },
    { word: "OPTIK", topic: "sains", diff: "sulit", clue: "Cabang ilmu fisika yang mempelajari sifat cahaya dan lensa penglihatan." },

    // --- TOPIK: SASTRA & KIASAN ---
    { word: "PUISI", topic: "sastra", diff: "mudah", clue: "Ragam sastra yang bahasanya terikat oleh irama, rima, dan penyusunan bait." },
    { word: "KISAH", topic: "sastra", diff: "mudah", clue: "Cerita tentang kejadian atau riwayat dalam kehidupan." },
    { word: "TOKOH", topic: "sastra", diff: "mudah", clue: "Pemegang peran utama atau karakter dalam sebuah novel atau drama." },
    { word: "DRAMA", topic: "sastra", diff: "mudah", clue: "Karya sastra yang menggambarkan kehidupan lewat dialog dan dipentaskan." },
    { word: "SAJAK", topic: "sastra", diff: "sedang", clue: "Gubahan sastra berbentuk puisi yang sangat mementingkan keselarasan bunyi." },
    { word: "PROSA", topic: "sastra", diff: "sedang", clue: "Karangan bebas yang tidak terikat oleh kaidah rima maupun baris seperti puisi." },
    { word: "MAJAS", topic: "sastra", diff: "sedang", clue: "Gaya bahasa kiasan untuk memperoleh efek keindahan dalam karya sastra." },
    { word: "MITOS", topic: "sastra", diff: "sedang", clue: "Cerita rakyat tradisional tentang dewa atau pahlawan zaman purba." },
    { word: "BABAD", topic: "sastra", diff: "sulit", clue: "Kisah sejarah tradisional dalam sastra Jawa yang bercampur dengan legenda." },
    { word: "DIKSI", topic: "sastra", diff: "sulit", clue: "Pilihan kata yang tepat dan selaras untuk mengungkapkan gagasan penulis." },
    { word: "ELEGI", topic: "sastra", diff: "sulit", clue: "Syair atau nyanyian sastra yang mengandung ratapan dukacita dan kerinduan." },
    { word: "ARKAIS", topic: "sastra", diff: "sulit", clue: "" },
    { word: "SANAD", topic: "sastra", diff: "sulit", clue: "Sandaran atau rentetan perawi yang menyampaikan sebuah riwayat teks." },
    { word: "EPIK", topic: "sastra", diff: "sulit", clue: "" },
    { word: "SATIR", topic: "sastra", diff: "sulit", clue: "Gaya bahasa sindiran tajam atau kecaman terhadap suatu keadaan." }
]
.map(item => ({ ...item, word: item.word.trim().toUpperCase() }))
.filter(item => item.word.length === 5 && /^[A-Z]{5}$/.test(item.word));


// =========================================================================
// 2. BANK SOAL HANGMAN KREATIF (6-15 HURUF, ISTILAH UNIK & FRASA MULTI-KATA)
// =========================================================================
const HANGMAN_BANK = [
    // --- KULINER NUSANTARA ---
    { word: "MIE GORENG", topic: "kuliner", diff: "mudah", clue: "Hidangan mi yang ditumis dengan bumbu bawang, kecap manis, dan sayuran." },
    { word: "NASI UDUK", topic: "kuliner", diff: "mudah", clue: "Nasi gurih yang diaron dan dikukus dengan santan kelapa serta rempah." },
    { word: "SATE PADANG", topic: "kuliner", diff: "mudah", clue: "Sate daging khas Sumatera Barat dengan kuah kental kuning pedas." },
    { word: "MARTABAK MANIS", topic: "kuliner", diff: "mudah", clue: "Kue tebal berpori yang diberi taburan cokelat, keju, dan kacang (Terang Bulan)." },
    { word: "RENDANG DAGING", topic: "kuliner", diff: "sedang", clue: "Masakan daging bercita rasa rempah pedas dari Minangkabau yang dimasak berjam-jam." },
    { word: "PEMPEK PALEMBANG", topic: "kuliner", diff: "sedang", clue: "Olahan ikan dan sagu khas Sumatera Selatan yang disajikan dengan kuah cuko." },
    { word: "KERAK TELOR", topic: "kuliner", diff: "sedang", clue: "Kuliner khas Betawi dari beras ketan putih, telur bebek, dan serundeng." },
    { word: "COTO MAKASSAR", topic: "kuliner", diff: "sedang", clue: "Hidangan sup daging dan jeroan sapi berkuah kacang rempah khas Sulawesi Selatan." },
    { word: "AYAM BETUTU", topic: "kuliner", diff: "sulit", clue: "Masakan ayam utuh yang dipenuhi bumbu base genep pedas khas Pulau Dewata." },
    { word: "PAPEDA KUAH KUNING", topic: "kuliner", diff: "sulit", clue: "Bubur sagu lengket khas Maluku dan Papua yang disantap bersama ikan tongkol." },
    { word: "GULAI TAMBUSU", topic: "kuliner", diff: "sulit", clue: "Kuliner khas Minang berupa usus sapi yang diisi adonan telur dan tahu berbumbu." },
    { word: "TINUTUAN MANADO", topic: "kuliner", diff: "sulit", clue: "Bubur sehat khas Sulawesi Utara yang dicampur aneka sayuran hijau dan labu kuning." },

    // --- ALAM & GEOGRAFI ---
    { word: "PELANGI INDAH", topic: "alam", diff: "mudah", clue: "Lengkungan spektrum warna di langit yang muncul akibat pembiasan sinar matahari oleh hujan." },
    { word: "AIR TERJUN", topic: "alam", diff: "mudah", clue: "Aliran sungai yang jatuh dari tebing batu yang tinggi." },
    { word: "GUNUNG BERAPI", topic: "alam", diff: "mudah", clue: "Gunung yang memiliki kawah aktif dan dapat mengeluarkan magma dari perut bumi." },
    { word: "KHATULISTIWA", topic: "alam", diff: "sedang", clue: "Garis khayal keliling bumi yang membagi bumi menjadi belahan utara dan selatan." },
    { word: "TERUMBU KARANG", topic: "alam", diff: "sedang", clue: "Ekosistem bawah laut tropis yang dibangun oleh biota laut penghasil kapur." },
    { word: "DANAU TOBA", topic: "alam", diff: "sedang", clue: "Danau vulkanik raksasa di Sumatera Utara yang memiliki Pulau Samosir di tengahnya." },
    { word: "SAMUDRA HINDIA", topic: "alam", diff: "sedang", clue: "Bentangan lautan luas yang berbatasan langsung di sebelah selatan Pulau Jawa." },
    { word: "PUNCAK JAYAWIJAYA", topic: "alam", diff: "sulit", clue: "Pegunungan tertinggi di Indonesia yang puncaknya diselimuti salju abadi di Papua." },
    { word: "LEMPENG TEKTONIK", topic: "alam", diff: "sulit", clue: "Lapisan kerak bumi raksasa yang bergerak lambat dan memicu terjadinya gempa bumi." },
    { word: "CINCIN API PASIFIK", topic: "alam", diff: "sulit", clue: "Jalur rangkaian gunung berapi aktif dan situs seismik yang mengelilingi Cekungan Pasifik." },
    { word: "STALAKTIT GUA", topic: "alam", diff: "sulit", clue: "Batuan kapur runcing yang menggantung dari langit-langit gua kapur." },

    // --- HEWAN & FLORA ---
    { word: "KUPU KUPU", topic: "hewan", diff: "mudah", clue: "Serangga bersayap indah warna-warni hasil metamorfosis dari ulat dan kepompong." },
    { word: "ORANG UTAN", topic: "hewan", diff: "mudah", clue: "Kera besar berbulu cokelat kemerahan asli hutan Kalimantan dan Sumatera." },
    { word: "KOMODO", topic: "hewan", diff: "mudah", clue: "Kadal purba raksasa pemakan daging endemik Nusa Tenggara Timur." },
    { word: "CENDRAWASIH", topic: "hewan", diff: "sedang", clue: "Burung berbulu sangat molek dari Papua yang dijuluki sebagai Burung Surga." },
    { word: "BUNGA BANGKAI", topic: "hewan", diff: "sedang", clue: "Flora raksasa di hutan Sumatera yang mengeluarkan aroma busuk saat mekar." },
    { word: "HARIMAU SUMATERA", topic: "hewan", diff: "sedang", clue: "Subspesies kucing besar belang terakhir yang masih bertahan hidup di Indonesia." },
    { word: "BURUNG RANGKONG", topic: "hewan", diff: "sulit", clue: "Burung besar berparuh besar melengkung dengan tanduk di atas kepalanya (Enggang)." },
    { word: "PESUT MAHAKAM", topic: "hewan", diff: "sulit", clue: "Mamalia air tawar langka mirip lumba-lumba yang hidup di sungai Kalimantan Timur." },
    { word: "KANTONG SEMAR", topic: "hewan", diff: "sulit", clue: "Tumbuhan karnivora tropis yang memiliki organ jebakan serangga berbentuk piala." },
    { word: "BABIRUSA", topic: "hewan", diff: "sulit", clue: "Satwa liar endemik Sulawesi yang memiliki taring panjang mencuat menembus moncongnya." },

    // --- BUDAYA & DAERAH ---
    { word: "WAYANG KULIT", topic: "budaya", diff: "mudah", clue: "Seni pertunjukan bayangan boneka kulit yang dimainkan oleh seorang Dalang." },
    { word: "ANGKLUNG BAMBU", topic: "budaya", diff: "mudah", clue: "Alat musik tradisional Jawa Barat dari tabung bambu yang dibunyikan dengan digoyangkan." },
    { word: "PENCAK SILAT", topic: "budaya", diff: "mudah", clue: "Warisan seni bela diri tradisional asli masyarakat kepulauan Nusantara." },
    { word: "CANDI BOROBUDUR", topic: "budaya", diff: "sedang", clue: "Monumen candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah." },
    { word: "RUMAH GADANG", topic: "budaya", diff: "sedang", clue: "Rumah adat tradisional Minangkabau yang atapnya runcing menyerupai tanduk kerbau." },
    { word: "REOG PONOROGO", topic: "budaya", diff: "sedang", clue: "Kesenian tari tradisional dengan topeng kepala singa raksasa berhias bulu merak." },
    { word: "LOMPAT BATU NIAS", topic: "budaya", diff: "sulit", clue: "Tradisi ketangkasan pemuda melompati tumpukan batu tinggi di Sumatera Utara (Fahombo)." },
    { word: "KARAPAN SAPI", topic: "budaya", diff: "sedang", clue: "Perlombaan pacuan sepasang sapi tradisional yang sangat populer di Pulau Madura." },
    { word: "SASANDO ROTE", topic: "budaya", diff: "sulit", clue: "Alat musik petik berdawai khas Nusa Tenggara Timur yang dikelilingi daun lontar." },
    { word: "GAMELAN JAWA", topic: "budaya", diff: "mudah", clue: "Ansambel musik tradisional yang terdiri atas gong, kenong, saron, dan gendang." },

    // --- SAINS & TEKNOLOGI ---
    { word: "TATA SURYA", topic: "sains", diff: "mudah", clue: "Kumpulan benda langit yang terdiri atas Matahari dan semua planet yang mengelilinginya." },
    { word: "JARINGAN INTERNET", topic: "sains", diff: "mudah", clue: "Sistem komunikasi global yang menghubungkan miliaran komputer dan gawai di seluruh dunia." },
    { word: "FOTOSINTESIS", topic: "sains", diff: "sedang", clue: "Proses tumbuhan hijau mengubah energi cahaya matahari menjadi zat makanan." },
    { word: "GRAVITASI BUMI", topic: "sains", diff: "sedang", clue: "Gaya tarik-menarik alami yang membuat semua benda jatuh ke permukaan tanah." },
    { word: "KECERDASAN BUATAN", topic: "sains", diff: "sedang", clue: "Teknologi simulasi kecerdasan manusia pada mesin komputer (Artificial Intelligence)." },
    { word: "SATELIT PALAPA", topic: "sains", diff: "sulit", clue: "Nama satelit komunikasi domestik pertama milik Indonesia yang diluncurkan tahun 1976." },
    { word: "METAMORFOSIS", topic: "sains", diff: "sedang", clue: "Perubahan bentuk biologis secara bertahap pada hewan dari larva hingga dewasa." },
    { word: "LUBANG HITAM", topic: "sains", diff: "sulit", clue: "Kawasan ruang-waktu di alam semesta dengan gravitasi sangat ekstrem hingga cahaya tak bisa lepas." },
    { word: "SPEKTRUM ELEKTROMAGNETIK", topic: "sains", diff: "sulit", clue: "Rentang seluruh radiasi gelombang dari sinar gamma hingga gelombang radio." },
    { word: "BIOTEKNOLOGI", topic: "sains", diff: "sulit", clue: "Cabang ilmu yang memanfaatkan makhluk hidup atau mikroorganisme untuk menghasilkan produk." },

    // --- SASTRA & KIASAN (UNGKAPAN NUSANTARA) ---
    { word: "BUAH TANGAN", topic: "sastra", diff: "mudah", clue: "Ungkapan kiasan untuk barang yang dibawa dari bepergian (oleh-oleh)." },
    { word: "BANTING TULANG", topic: "sastra", diff: "mudah", clue: "Ungkapan kiasan yang berarti bekerja sangat keras demi mencari nafkah." },
    { word: "KAMBING HITAM", topic: "sastra", diff: "sedang", clue: "Ungkapan bagi seseorang yang dipersalahkan atas kesalahan yang tidak dilakukannya." },
    { word: "RINGAN TANGAN", topic: "sastra", diff: "sedang", clue: "Ungkapan kiasan untuk orang yang gemar menolong dan cepat membantu sesama." },
    { word: "DARAH BIRU", topic: "sastra", diff: "sedang", clue: "Ungkapan kiasan untuk orang yang berasal dari keluarga keturunan bangsawan." },
    { word: "GULUNG TIKAR", topic: "sastra", diff: "sedang", clue: "Ungkapan kiasan bagi perusahaan atau pedagang yang mengalami kebangkrutan." },
    { word: "BAGAI AIR DI DAUN TALAS", topic: "sastra", diff: "sulit", clue: "Peribahasa untuk melukiskan seseorang yang tidak punya pendirian tetap." },
    { word: "HABIS MANIS SEPAH DIBUANG", topic: "sastra", diff: "sulit", clue: "Peribahasa tentang sikap melupakan seseorang setelah tidak lagi dibutuhkan." },
    { word: "SUMPAH PEMUDA", topic: "sastra", diff: "mudah", clue: "Ikrar bersejarah tanggal 28 Oktober 1928 yang menegaskan satu bahasa: Bahasa Indonesia." },
    { word: "LASKAR PELANGI", topic: "sastra", diff: "sedang", clue: "Judul novel terkenal karya Andrea Hirata yang berlatar perjuangan anak-anak di Belitung." },
    { word: "BUMI MANUSIA", topic: "sastra", diff: "sulit", clue: "Mahakarya sastra roman sejarah karya sastrawan besar Pramoedya Ananta Toer." }
];

// Kamus tambahan 5 huruf untuk validasi tebakan pemain di Wordle
const EXTRA_WORDS_5 = [
    "MAKAN","MINUM","TIDUR","RUMAH","PINTU","KURSI","LAMPU","MOBIL","MOTOR","KAPAL",
    "KERJA","PASAR","MANIS","PAHIT","PEDAS","PANAS","SEJUK","ANGIN","POHON","BUNGA",
    "TANAH","PASIR","BULAN","MALAM","SIANG","SENJA","WAKTU","TAHUN","PEKAN","BESOK",
    "CINTA","RINDU","KASIH","MARAH","SEDIH","TAKUT","SABAR","JUJUR","BENAR","SALAH",
    "CEPAT","PELAN","DEKAT","BESAR","KECIL","BERAT","TEBAL","TIPIS","DALAM","PENUH",
    "HABIS","KOTOR","SEHAT","SAKIT","LELAH","SEGAR","HIDUP","JALAN","DUDUK","JATUH",
    "MASUK","LIHAT","SUARA","TANYA","JAWAB","TULIS","PAPAN","KELAS","MURID","KAWAN",
    "TEMAN","LAWAN","MUSUH","KAKAK","NENEK","KAKEK","BAPAK","PAMAN","WARGA","ORANG",
    "GADIS","BOCAH","MULUT","LIDAH","LEHER","PERUT","LUTUT","DARAH","KULIT","WAJAH",
    "MACAN","TIKUS","LALAT","BEBEK","ANGSA","GAGAK","UDANG","KETAM","KATAK","JERUK",
    "NANAS","SALAK","MELON","KURMA","JAMBU","TIMUN","TOMAT","CABAI","BAYAM","JAMUR",
    "BUMBU","PISAU","GARPU","GELAS","BOTOL","EMBER","KASUR","SPREI","PAGAR","KAMAR",
    "DAPUR","KUNCI","JARUM","SIKAT","SABUN","SISIR","BEDAK","JAKET","SABUK","PERAK",
    "INTAN","KAWAT","KARET","KAPAS","ARANG","MERAH","PUTIH","HITAM","HIJAU","DAMAI",
    "BEBAS","HUKUM","PAJAK","HARGA","MURAH","MAHAL","BAYAR","MODAL","BIAYA","KARTU",
    "SURAT","KABAR","PESAN","MUSIK","IRAMA","LAYAR","GELAP","GEMPA","BADAN","TUBUH",
    "NAPAS","MIMPI","SADAR","PAHAM","PIKIR","INGAT","YAKIN","HARAP","ABADI","ABANG",
    "ABJAD","ABSEN","ACARA","AGAMA","AGUNG","AJAIB","AJANG","AKHIR","AKRAB","AKTIF",
    "AKTOR","ALAMI","ALANG","ALBUM","ALIBI","ALTAR","AMBIL","AMPAS","AMPUH","AMPUN"
];

const VALID_WORDLE_SET = new Set([
    ...WORDLE_BANK.map(item => item.word),
    ...EXTRA_WORDS_5
]);

const PRAISE_MESSAGES = [
    "Jenius Luar Biasa! 🤯",
    "Tajam Sekali! 🔥",
    "Hebat! Kosakatamu Luas! 👏",
    "Mantap Betul! 👍",
    "Hampir Saja! 😅",
    "Fiuh! Tepat di Kesempatan Terakhir! 😮‍💨"
];

class KataKitaApp {
    constructor() {
        // State Aplikasi & Konfigurasi
        this.mode = "solo"; // "solo" | "multi"
        this.gameType = "wordle"; // "wordle" | "hangman"
        this.selectedDifficulty = "sedang"; // "mudah" | "sedang" | "sulit"
        this.selectedTopic = "acak"; // "acak" | "kuliner" | "alam" | "hewan" | "budaya" | "sains" | "sastra"

        this.isHost = false;
        this.roomCode = "";
        this.myName = "Pemain 1";
        this.peerName = "Pemain 2";

        // Koneksi Multiplayer
        this.peer = null;
        this.conn = null;
        this.bc = null;

        // Voting State
        this.myVote = null;
        this.peerVote = null;

        // State Permainan
        this.secretWord = "MAKAN";
        this.secretClue = "";
        this.secretTopic = "kuliner";
        this.activeTurn = "host"; // "host" | "guest"
        this.isGameOver = false;
        this.isAnimating = false;
        this.hintUsed = false;

        // State Wordle
        this.maxGuesses = 6;
        this.wordLength = 5;
        this.currentRow = 0;
        this.currentCol = 0;
        this.guesses = [];
        this.evaluations = [];

        // State Hangman Kreatif
        this.maxMistakes = 6;
        this.mistakes = 0;
        this.guessedLetters = new Set();

        this.initTheme();
        this.createWordleBoardDOM();
        this.bindUIEvents();
    }

    // ==========================================
    // TEMA & LAYAR
    // ==========================================
    initTheme() {
        const saved = localStorage.getItem("katakita_theme") || "dark";
        document.documentElement.setAttribute("data-theme", saved);
        this.updateThemeIcon(saved);
    }

    toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("katakita_theme", next);
        this.updateThemeIcon(next);
    }

    updateThemeIcon(theme) {
        document.getElementById("icon-sun").classList.toggle("hidden", theme !== "dark");
        document.getElementById("icon-moon").classList.toggle("hidden", theme === "dark");
    }

    showScreen(screenId) {
        ["screen-home", "screen-lobby", "screen-vote", "screen-game"].forEach(id => {
            document.getElementById(id).classList.toggle("hidden", id !== screenId);
        });

        const isHome = screenId === "screen-home";
        const isGame = screenId === "screen-game";
        document.getElementById("btn-home").classList.toggle("hidden", isHome);

        // Tombol Hint disembunyikan jika di luar game ATAU jika tingkat kesulitan = SULIT
        const hideHint = !isGame || this.selectedDifficulty === "sulit";
        document.getElementById("btn-hint").classList.toggle("hidden", hideHint);
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    bindUIEvents() {
        document.getElementById("btn-theme").addEventListener("click", () => this.toggleTheme());
        document.getElementById("btn-help").addEventListener("click", () => {
            document.getElementById("modal-help").classList.remove("hidden");
        });

        document.getElementById("btn-home").addEventListener("click", () => {
            this.disconnectMultiplayer();
            this.closeAllModals();
            this.showScreen("screen-home");
        });

        document.getElementById("btn-hint").addEventListener("click", () => this.useHint());

        // Pemilih Tingkat Kesulitan di Home
        document.querySelectorAll("#home-difficulty-group .diff-pill").forEach(btn => {
            btn.addEventListener("click", () => {
                document.querySelectorAll("#home-difficulty-group .diff-pill").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.selectedDifficulty = btn.dataset.diff;
            });
        });

        // Pemilih Topik di Home
        document.querySelectorAll("#home-topic-group .topic-chip").forEach(chip => {
            chip.addEventListener("click", () => {
                document.querySelectorAll("#home-topic-group .topic-chip").forEach(c => c.classList.remove("active"));
                chip.classList.add("active");
                this.selectedTopic = chip.dataset.topic;
            });
        });

        // Tombol Solo di Home
        document.getElementById("btn-solo-wordle").addEventListener("click", () => {
            this.myName = this.getPlayerNameInput();
            this.mode = "solo";
            const item = this.pickQuestion("wordle", this.selectedTopic, this.selectedDifficulty);
            this.startSelectedGame("wordle", item, "host");
        });

        document.getElementById("btn-solo-hangman").addEventListener("click", () => {
            this.myName = this.getPlayerNameInput();
            this.mode = "solo";
            const item = this.pickQuestion("hangman", this.selectedTopic, this.selectedDifficulty);
            this.startSelectedGame("hangman", item, "host");
        });

        // Tombol Multiplayer di Home
        document.getElementById("btn-create-room").addEventListener("click", () => {
            this.createRoom();
        });

        const joinInput = document.getElementById("join-code-input");
        joinInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                this.joinRoom(joinInput.value);
            }
        });

        document.getElementById("btn-join-room").addEventListener("click", () => {
            this.joinRoom(joinInput.value);
        });

        // Lobby Actions
        document.getElementById("btn-copy-code").addEventListener("click", () => {
            if (navigator.clipboard && this.roomCode) {
                navigator.clipboard.writeText(this.roomCode);
                this.showToast("Kode Room disalin: " + this.roomCode + " 📋");
            }
        });

        document.getElementById("btn-cancel-lobby").addEventListener("click", () => {
            this.disconnectMultiplayer();
            this.showScreen("screen-home");
        });

        // Sinkronisasi Dropdown Kesulitan & Topik di Layar Vote Multiplayer
        const voteDiffSelect = document.getElementById("vote-difficulty-select");
        const voteTopicSelect = document.getElementById("vote-topic-select");

        voteDiffSelect.addEventListener("change", () => {
            this.selectedDifficulty = voteDiffSelect.value;
            this.sendNetworkMessage({
                type: "SYNC_SETTINGS",
                difficulty: this.selectedDifficulty,
                topic: this.selectedTopic
            });
        });

        voteTopicSelect.addEventListener("change", () => {
            this.selectedTopic = voteTopicSelect.value;
            this.sendNetworkMessage({
                type: "SYNC_SETTINGS",
                difficulty: this.selectedDifficulty,
                topic: this.selectedTopic
            });
        });

        // Voting Actions
        document.getElementById("btn-vote-wordle").addEventListener("click", () => this.castVote("wordle"));
        document.getElementById("btn-vote-hangman").addEventListener("click", () => this.castVote("hangman"));

        // Quick Restart / Back to Vote
        document.getElementById("btn-quick-restart").addEventListener("click", () => {
            if (this.mode === "solo") {
                const item = this.pickQuestion(this.gameType, this.selectedTopic, this.selectedDifficulty);
                this.startSelectedGame(this.gameType, item, "host");
                this.showToast("Soal baru telah dimulai! 🎲");
            } else {
                this.sendNetworkMessage({ type: "GOTO_VOTE" });
                this.enterVotingScreen();
            }
        });

        // Modal Result Actions
        document.getElementById("btn-play-again").addEventListener("click", () => {
            this.closeAllModals();
            if (this.mode === "solo") {
                const item = this.pickQuestion(this.gameType, this.selectedTopic, this.selectedDifficulty);
                this.startSelectedGame(this.gameType, item, "host");
            } else {
                const item = this.pickQuestion(this.gameType, this.selectedTopic, this.selectedDifficulty);
                const firstTurn = Math.random() < 0.5 ? "host" : "guest";
                this.sendNetworkMessage({
                    type: "START_GAME",
                    gameType: this.gameType,
                    wordObj: item,
                    difficulty: this.selectedDifficulty,
                    topic: this.selectedTopic,
                    firstTurn
                });
                this.startSelectedGame(this.gameType, item, firstTurn);
            }
        });

        document.getElementById("btn-back-vote").addEventListener("click", () => {
            this.closeAllModals();
            if (this.mode === "multi") {
                this.sendNetworkMessage({ type: "GOTO_VOTE" });
                this.enterVotingScreen();
            } else {
                this.showScreen("screen-home");
            }
        });

        // Close Modals
        document.querySelectorAll(".close-modal").forEach(btn => {
            btn.addEventListener("click", () => {
                document.getElementById(btn.dataset.close).classList.add("hidden");
            });
        });

        // Keyboard Fisik & Virtual
        window.addEventListener("keydown", (e) => {
            if (e.ctrlKey || e.metaKey || e.altKey) return;
            if (document.getElementById("screen-game").classList.contains("hidden")) return;
            if (!document.getElementById("modal-help").classList.contains("hidden") ||
                !document.getElementById("modal-result").classList.contains("hidden")) {
                if (e.key === "Escape") this.closeAllModals();
                return;
            }

            const key = e.key.toUpperCase();
            this.handleKeyInput(key);
        });

        document.getElementById("keyboard").addEventListener("click", (e) => {
            const btn = e.target.closest(".key");
            if (!btn) return;
            const key = btn.dataset.key;
            if (key) this.handleKeyInput(key);
            btn.blur();
        });
    }

    getPlayerNameInput() {
        const val = document.getElementById("player-name").value.trim();
        return val || "Pemain";
    }

    // ==========================================
    // PEMILIHAN SOAL CERDAS (TOPIK & KESULITAN)
    // ==========================================
    pickQuestion(gameType, topic, difficulty) {
        const bank = gameType === "wordle" ? WORDLE_BANK : HANGMAN_BANK;

        // Filter 1: Sesuai topik dan sesuai kesulitan
        let pool = bank.filter(item => {
            const matchTopic = topic === "acak" || item.topic === topic;
            const matchDiff = item.diff === difficulty;
            return matchTopic && matchDiff;
        });

        // Fallback 1: Jika kombinasi spesifik kosong, ambil sesuai topik saja
        if (pool.length === 0) {
            pool = bank.filter(item => topic === "acak" || item.topic === topic);
        }

        // Fallback 2: Ambil dari seluruh bank
        if (pool.length === 0) {
            pool = bank;
        }

        // Hindari kata yang persis baru saja keluar
        if (pool.length > 1) {
            const filtered = pool.filter(item => item.word !== this.secretWord);
            if (filtered.length > 0) pool = filtered;
        }

        const idx = Math.floor(Math.random() * pool.length);
        return pool[idx];
    }

    // ==========================================
    // MULTIPLAYER (PeerJS + BroadcastChannel)
    // ==========================================
    generateRoomCode() {
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let code = "";
        for (let i = 0; i < 5; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return code;
    }

    createRoom() {
        this.myName = this.getPlayerNameInput();
        this.mode = "multi";
        this.isHost = true;
        this.roomCode = this.generateRoomCode();

        document.getElementById("display-room-code").textContent = this.roomCode;
        document.getElementById("lobby-p1-name").textContent = this.myName;
        document.getElementById("lobby-p2-name").textContent = "Menunggu teman bergabung...";
        document.getElementById("lobby-p2-slot").className = "lobby-player waiting";

        this.showScreen("screen-lobby");
        this.setupMultiplayerTransport(this.roomCode, true);
    }

    joinRoom(rawCode) {
        const code = (rawCode || "").trim().toUpperCase();
        if (code.length < 4) {
            this.showToast("Masukkan Kode Room yang valid!");
            return;
        }

        this.myName = this.getPlayerNameInput();
        if (this.myName === "Pemain 1") {
            this.myName = "Pemain 2";
            document.getElementById("player-name").value = "Pemain 2";
        }
        this.mode = "multi";
        this.isHost = false;
        this.roomCode = code;

        this.showToast(`Menghubungkan ke Room ${code}...`);
        this.setupMultiplayerTransport(code, false);
    }

    setupMultiplayerTransport(code, asHost) {
        this.disconnectMultiplayer();

        try {
            this.bc = new BroadcastChannel(`katakita_room_${code}`);
            this.bc.onmessage = (ev) => this.handleNetworkMessage(ev.data);
        } catch (err) {
            console.warn("BroadcastChannel tidak tersedia:", err);
        }

        if (typeof Peer !== "undefined") {
            const peerId = asHost ? `katakita-id-room-${code}` : undefined;
            try {
                this.peer = new Peer(peerId);

                this.peer.on("open", () => {
                    if (!asHost) {
                        const conn = this.peer.connect(`katakita-id-room-${code}`, { reliable: true });
                        this.bindPeerConnection(conn);
                    }
                });

                this.peer.on("connection", (conn) => {
                    if (asHost) {
                        this.bindPeerConnection(conn);
                    }
                });

                this.peer.on("error", (err) => {
                    console.warn("PeerJS info:", err.type);
                });
            } catch (e) {
                console.warn("PeerJS init error:", e);
            }
        }

        if (!asHost) {
            setTimeout(() => {
                this.sendNetworkMessage({
                    type: "PLAYER_JOIN",
                    name: this.myName
                });
            }, 250);
        }
    }

    bindPeerConnection(conn) {
        this.conn = conn;
        conn.on("open", () => {
            if (!this.isHost) {
                this.sendNetworkMessage({
                    type: "PLAYER_JOIN",
                    name: this.myName
                });
            }
        });
        conn.on("data", (data) => this.handleNetworkMessage(data));
        conn.on("close", () => this.showToast("Teman bermain terputus dari room."));
    }

    sendNetworkMessage(msg) {
        if (this.conn && this.conn.open) {
            this.conn.send(msg);
        } else if (this.bc) {
            this.bc.postMessage(msg);
        }
    }

    disconnectMultiplayer() {
        if (this.conn) {
            try { this.conn.close(); } catch (e) {}
            this.conn = null;
        }
        if (this.peer) {
            try { this.peer.destroy(); } catch (e) {}
            this.peer = null;
        }
        if (this.bc) {
            try { this.bc.close(); } catch (e) {}
            this.bc = null;
        }
    }

    handleNetworkMessage(data) {
        if (!data || !data.type) return;

        switch (data.type) {
            case "PLAYER_JOIN":
                if (this.isHost) {
                    this.peerName = data.name || "Pemain 2";
                    this.sendNetworkMessage({
                        type: "ROOM_READY",
                        hostName: this.myName,
                        guestName: this.peerName,
                        difficulty: this.selectedDifficulty,
                        topic: this.selectedTopic
                    });
                    this.showToast(`${this.peerName} bergabung ke Room! 🎉`);
                    this.enterVotingScreen();
                }
                break;

            case "ROOM_READY":
                if (!this.isHost) {
                    this.peerName = data.hostName || "Host";
                    this.selectedDifficulty = data.difficulty || "sedang";
                    this.selectedTopic = data.topic || "acak";
                    this.showToast(`Terhubung dengan ${this.peerName}! 🎉`);
                    this.enterVotingScreen();
                }
                break;

            case "SYNC_SETTINGS":
                this.selectedDifficulty = data.difficulty;
                this.selectedTopic = data.topic;
                document.getElementById("vote-difficulty-select").value = this.selectedDifficulty;
                document.getElementById("vote-topic-select").value = this.selectedTopic;
                this.showToast(`Pengaturan diubah: ${DIFF_LABELS[this.selectedDifficulty]} • ${TOPIC_LABELS[this.selectedTopic]}`);
                break;

            case "CAST_VOTE":
                this.peerVote = data.game;
                this.updateVoteStatusUI();
                if (this.isHost && this.myVote && this.peerVote) {
                    this.resolveVotesAndStart();
                }
                break;

            case "GOTO_VOTE":
                this.closeAllModals();
                this.enterVotingScreen();
                break;

            case "START_GAME":
                if (data.difficulty) this.selectedDifficulty = data.difficulty;
                if (data.topic) this.selectedTopic = data.topic;
                if (data.tieBreakMsg) {
                    this.showToast(data.tieBreakMsg, 2600);
                }
                this.startSelectedGame(data.gameType, data.wordObj, data.firstTurn);
                break;

            case "WORDLE_TYPING":
                this.syncRemoteWordleTyping(data.letters);
                break;

            case "WORDLE_SUBMIT":
                this.applyWordleGuess(data.guessWord, false);
                break;

            case "HANGMAN_GUESS":
                this.applyHangmanLetter(data.letter, false);
                break;

            case "HINT_USED":
                this.hintUsed = true;
                document.getElementById("btn-hint").classList.add("hint-used");
                this.showToast(data.hintMessage, 3800);
                break;
        }
    }

    // ==========================================
    // LAYAR VOTING & PENGATURAN MULTIPLAYER
    // ==========================================
    enterVotingScreen() {
        this.myVote = null;
        this.peerVote = null;

        document.getElementById("vote-room-code").textContent = this.roomCode;
        document.getElementById("vote-difficulty-select").value = this.selectedDifficulty;
        document.getElementById("vote-topic-select").value = this.selectedTopic;

        const p1Name = this.isHost ? this.myName : this.peerName;
        const p2Name = this.isHost ? this.peerName : this.myName;

        document.getElementById("vote-p1-name").textContent = p1Name;
        document.getElementById("vote-p2-name").textContent = p2Name;

        document.getElementById("btn-vote-wordle").classList.remove("selected");
        document.getElementById("btn-vote-hangman").classList.remove("selected");

        this.updateVoteStatusUI();
        this.showScreen("screen-vote");
    }

    castVote(gameChoice) {
        this.myVote = gameChoice;

        document.getElementById("btn-vote-wordle").classList.toggle("selected", gameChoice === "wordle");
        document.getElementById("btn-vote-hangman").classList.toggle("selected", gameChoice === "hangman");

        this.updateVoteStatusUI();
        this.sendNetworkMessage({
            type: "CAST_VOTE",
            game: gameChoice
        });

        if (this.isHost && this.myVote && this.peerVote) {
            this.resolveVotesAndStart();
        }
    }

    updateVoteStatusUI() {
        const p1Vote = this.isHost ? this.myVote : this.peerVote;
        const p2Vote = this.isHost ? this.peerVote : this.myVote;

        const p1Badge = document.getElementById("vote-p1-status");
        const p2Badge = document.getElementById("vote-p2-status");

        const formatChoice = (v) => v === "wordle" ? "Vote Wordle 🟩" : "Vote Hangman 🪢";

        p1Badge.textContent = p1Vote ? formatChoice(p1Vote) : "Belum memilih";
        p1Badge.classList.toggle("ready", Boolean(p1Vote));

        p2Badge.textContent = p2Vote ? formatChoice(p2Vote) : "Belum memilih";
        p2Badge.classList.toggle("ready", Boolean(p2Vote));
    }

    resolveVotesAndStart() {
        let chosenGame = this.myVote;
        let tieBreakMsg = "";

        if (this.myVote !== this.peerVote) {
            chosenGame = Math.random() < 0.5 ? "wordle" : "hangman";
            const label = chosenGame === "wordle" ? "WORDLE" : "HANGMAN KREATIF";
            tieBreakMsg = `Vote berbeda! Undian memilih: ${label} 🎲`;
            this.showToast(tieBreakMsg, 2600);
        } else {
            const label = chosenGame === "wordle" ? "WORDLE" : "HANGMAN KREATIF";
            tieBreakMsg = `Sepakat bermain ${label}! 🚀`;
            this.showToast(tieBreakMsg, 2000);
        }

        const wordObj = this.pickQuestion(chosenGame, this.selectedTopic, this.selectedDifficulty);
        const firstTurn = "host";

        setTimeout(() => {
            this.sendNetworkMessage({
                type: "START_GAME",
                gameType: chosenGame,
                wordObj,
                difficulty: this.selectedDifficulty,
                topic: this.selectedTopic,
                firstTurn,
                tieBreakMsg
            });
            this.startSelectedGame(chosenGame, wordObj, firstTurn);
        }, 650);
    }

    // ==========================================
    // MULAI PERMAINAN (WORDLE / HANGMAN KREATIF)
    // ==========================================
    startSelectedGame(gameType, wordObj, firstTurn) {
        this.gameType = gameType;
        this.secretWord = wordObj.word.toUpperCase();
        this.secretClue = wordObj.clue;
        this.secretTopic = wordObj.topic || this.selectedTopic;
        this.activeTurn = firstTurn;
        this.isGameOver = false;
        this.isAnimating = false;
        this.hintUsed = false;

        document.getElementById("btn-hint").classList.remove("hint-used");
        document.getElementById("restart-label").textContent = this.mode === "solo" ? "Soal Baru" : "Ganti Game/Topik";
        document.getElementById("btn-back-vote").classList.remove("hidden");

        // Update badge topik & kesulitan di atas arena
        const topicBadge = document.getElementById("game-topic-badge");
        const diffBadge = document.getElementById("game-diff-badge");
        topicBadge.textContent = TOPIC_LABELS[this.secretTopic] || TOPIC_LABELS[this.selectedTopic];
        diffBadge.textContent = DIFF_LABELS[this.selectedDifficulty];
        diffBadge.dataset.diff = this.selectedDifficulty;

        // Reset Keyboard
        document.querySelectorAll("#keyboard .key").forEach(k => delete k.dataset.state);

        const wordleArea = document.getElementById("wordle-area");
        const hangmanArea = document.getElementById("hangman-area");
        const enterKey = document.getElementById("key-enter");
        const backspaceKey = document.getElementById("key-backspace");

        if (gameType === "wordle") {
            wordleArea.classList.remove("hidden");
            hangmanArea.classList.add("hidden");
            enterKey.classList.remove("hidden");
            backspaceKey.classList.remove("hidden");
            this.initWordleRound();
        } else {
            wordleArea.classList.add("hidden");
            hangmanArea.classList.remove("hidden");
            enterKey.classList.add("hidden");
            backspaceKey.classList.add("hidden");
            this.initHangmanRound();
        }

        this.showScreen("screen-game");
        this.updateTurnAndChancesUI();
    }

    isMyTurn() {
        if (this.mode === "solo") return true;
        const myRole = this.isHost ? "host" : "guest";
        return this.activeTurn === myRole;
    }

    toggleTurn() {
        if (this.mode === "multi") {
            this.activeTurn = this.activeTurn === "host" ? "guest" : "host";
        }
        this.updateTurnAndChancesUI();
    }

    updateTurnAndChancesUI() {
        const chanceBadge = document.getElementById("chance-counter-badge");
        const turnBanner = document.getElementById("turn-banner");
        const keyboardEl = document.getElementById("keyboard");

        if (this.mode === "solo") {
            if (this.gameType === "wordle") {
                const rem = this.maxGuesses - this.currentRow;
                chanceBadge.textContent = `Percobaan: ${rem}/${this.maxGuesses}`;
            } else {
                const rem = Math.max(0, this.maxMistakes - this.mistakes);
                chanceBadge.textContent = `Nyawa: ${rem}/${this.maxMistakes}`;
            }
            turnBanner.textContent = "Giliranmu Menebak!";
            turnBanner.classList.remove("waiting-turn");
            keyboardEl.classList.remove("disabled-turn");
        } else {
            if (this.gameType === "wordle") {
                const hostTurnsUsed = Math.ceil(this.currentRow / 2);
                const guestTurnsUsed = Math.floor(this.currentRow / 2);
                const myTurnsLeft = this.isHost ? (3 - hostTurnsUsed) : (3 - guestTurnsUsed);
                chanceBadge.textContent = `Jatahmu: ${myTurnsLeft}/3`;
            } else {
                const rem = Math.max(0, this.maxMistakes - this.mistakes);
                chanceBadge.textContent = `Nyawa Tim: ${rem}/${this.maxMistakes}`;
            }

            if (this.isMyTurn()) {
                turnBanner.textContent = `⚡ Giliranmu (${this.myName})!`;
                turnBanner.classList.remove("waiting-turn");
                keyboardEl.classList.remove("disabled-turn");
            } else {
                turnBanner.textContent = `⏳ Giliran ${this.peerName}...`;
                turnBanner.classList.add("waiting-turn");
                keyboardEl.classList.add("disabled-turn");
            }
        }
    }

    handleKeyInput(key) {
        if (this.isGameOver || this.isAnimating) return;
        if (!this.isMyTurn()) {
            this.showToast(`Tunggu giliran ${this.peerName}! ⏳`);
            return;
        }

        if (this.gameType === "wordle") {
            if (key === "ENTER") {
                this.submitWordleGuess();
            } else if (key === "BACKSPACE" || key === "DELETE") {
                this.deleteWordleLetter();
            } else if (/^[A-Z]$/.test(key)) {
                this.addWordleLetter(key);
            }
        } else if (this.gameType === "hangman") {
            if (/^[A-Z]$/.test(key)) {
                this.submitHangmanLetter(key);
            }
        }
    }

    // ==========================================
    // LOGIKA GAME 1: WORDLE (KATLA)
    // ==========================================
    createWordleBoardDOM() {
        const boardEl = document.getElementById("board");
        boardEl.innerHTML = "";
        for (let r = 0; r < 6; r++) {
            const row = document.createElement("div");
            row.className = "board-row";
            for (let c = 0; c < 5; c++) {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.dataset.state = "empty";
                row.appendChild(tile);
            }
            boardEl.appendChild(row);
        }
    }

    initWordleRound() {
        this.maxGuesses = 6;
        this.currentRow = 0;
        this.currentCol = 0;
        this.guesses = Array.from({ length: this.maxGuesses }, () => Array(this.wordLength).fill(""));
        this.evaluations = [];

        // Pada tingkat Mudah, tampilkan clue sejak awal; pada Sedang/Sulit, beri tahu topiknya dulu
        const clueBanner = document.getElementById("wordle-clue-text");
        if (this.selectedDifficulty === "mudah") {
            clueBanner.textContent = `💡 Petunjuk: ${this.secretClue}`;
        } else if (this.selectedDifficulty === "sedang") {
            clueBanner.textContent = `🔍 Topik ${TOPIC_LABELS[this.secretTopic]} — Petunjuk terbuka setelah 3 tebakan!`;
        } else {
            clueBanner.textContent = `💀 Mode Sulit (${TOPIC_LABELS[this.secretTopic]}) — Tebak tanpa petunjuk & tanpa bantuan!`;
        }

        const tiles = document.querySelectorAll("#board .tile");
        tiles.forEach(tile => {
            tile.textContent = "";
            tile.dataset.state = "empty";
            tile.className = "tile";
        });
    }

    addWordleLetter(letter) {
        if (this.currentCol >= this.wordLength) return;
        this.guesses[this.currentRow][this.currentCol] = letter;
        const tile = this.getWordleTile(this.currentRow, this.currentCol);
        tile.textContent = letter;
        tile.dataset.state = "tbd";
        this.currentCol++;

        if (this.mode === "multi") {
            this.sendNetworkMessage({
                type: "WORDLE_TYPING",
                letters: this.guesses[this.currentRow]
            });
        }
    }

    deleteWordleLetter() {
        if (this.currentCol <= 0) return;
        this.currentCol--;
        this.guesses[this.currentRow][this.currentCol] = "";
        const tile = this.getWordleTile(this.currentRow, this.currentCol);
        tile.textContent = "";
        tile.dataset.state = "empty";

        if (this.mode === "multi") {
            this.sendNetworkMessage({
                type: "WORDLE_TYPING",
                letters: this.guesses[this.currentRow]
            });
        }
    }

    syncRemoteWordleTyping(lettersArray) {
        if (this.isGameOver || this.gameType !== "wordle") return;
        this.guesses[this.currentRow] = [...lettersArray];
        for (let c = 0; c < this.wordLength; c++) {
            const ch = lettersArray[c] || "";
            const tile = this.getWordleTile(this.currentRow, c);
            tile.textContent = ch;
            tile.dataset.state = ch ? "tbd" : "empty";
        }
    }

    submitWordleGuess() {
        if (this.currentCol < this.wordLength) {
            this.shakeWordleRow();
            this.showToast("Huruf belum lengkap (5 huruf)!");
            return;
        }

        const guessWord = this.guesses[this.currentRow].join("");
        if (!VALID_WORDLE_SET.has(guessWord) && !this.isPlausibleIndonesianWord(guessWord)) {
            this.shakeWordleRow();
            this.showToast("Kata tidak dikenali dalam kamus!");
            return;
        }

        if (this.mode === "multi") {
            this.sendNetworkMessage({
                type: "WORDLE_SUBMIT",
                guessWord
            });
        }

        this.applyWordleGuess(guessWord, true);
    }

    isPlausibleIndonesianWord(word) {
        const hasVowel = /[AIUEO]/.test(word);
        const hasConsonant = /[BCDFGHJKLMNPQRSTVWXYZ]/.test(word);
        const tripleSame = /(.)\1\1/.test(word);
        return hasVowel && hasConsonant && !tripleSame;
    }

    applyWordleGuess(guessWord, isLocalActor) {
        const rowIndex = this.currentRow;
        for (let c = 0; c < this.wordLength; c++) {
            this.guesses[rowIndex][c] = guessWord[c];
            const tile = this.getWordleTile(rowIndex, c);
            tile.textContent = guessWord[c];
        }

        const evaluation = this.evaluateWordle(guessWord, this.secretWord);
        this.evaluations.push(evaluation);

        this.isAnimating = true;
        const rowEl = document.getElementById("board").children[rowIndex];
        const tiles = rowEl.children;
        const flipDelay = 165;

        for (let i = 0; i < this.wordLength; i++) {
            const tile = tiles[i];
            const state = evaluation[i];
            const letter = guessWord[i];

            setTimeout(() => {
                tile.classList.add("flip");
                setTimeout(() => {
                    tile.dataset.state = state;
                    this.updateKeyboardKey(letter, state);
                }, 230);
            }, i * flipDelay);
        }

        const totalTime = (this.wordLength - 1) * flipDelay + 500;
        setTimeout(() => {
            this.isAnimating = false;
            const actorName = isLocalActor ? this.myName : this.peerName;

            if (guessWord === this.secretWord) {
                this.isGameOver = true;
                this.bounceWordleRow(rowIndex);
                const msg = this.mode === "multi"
                    ? `${actorName} berhasil menebak kata! 🎉`
                    : PRAISE_MESSAGES[Math.min(rowIndex, PRAISE_MESSAGES.length - 1)];
                this.showToast(msg, 2800);
                setTimeout(() => this.showResultModal(true, msg), 1300);
            } else if (rowIndex === this.maxGuesses - 1) {
                this.isGameOver = true;
                this.showToast(`Kesempatan habis! Jawaban: ${this.secretWord}`, 3200);
                setTimeout(() => this.showResultModal(false, "6 Kesempatan telah habis."), 1300);
            } else {
                this.currentRow++;
                this.currentCol = 0;

                // Pada tingkat Sedang, buka petunjuk setelah 3 tebakan gagal
                if (this.selectedDifficulty === "sedang" && this.currentRow === 3) {
                    document.getElementById("wordle-clue-text").textContent = `💡 Petunjuk Terbuka: ${this.secretClue}`;
                }

                this.toggleTurn();
            }
        }, totalTime);
    }

    evaluateWordle(guess, target) {
        const result = Array(this.wordLength).fill("absent");
        const targetChars = target.split("");
        const guessChars = guess.split("");

        for (let i = 0; i < this.wordLength; i++) {
            if (guessChars[i] === targetChars[i]) {
                result[i] = "correct";
                targetChars[i] = null;
                guessChars[i] = null;
            }
        }
        for (let i = 0; i < this.wordLength; i++) {
            if (guessChars[i] !== null) {
                const idx = targetChars.indexOf(guessChars[i]);
                if (idx !== -1) {
                    result[i] = "present";
                    targetChars[idx] = null;
                }
            }
        }
        return result;
    }

    getWordleTile(r, c) {
        return document.getElementById("board").children[r].children[c];
    }

    shakeWordleRow() {
        const rowEl = document.getElementById("board").children[this.currentRow];
        rowEl.classList.remove("shake");
        void rowEl.offsetWidth;
        rowEl.classList.add("shake");
    }

    bounceWordleRow(rowIndex) {
        const tiles = document.getElementById("board").children[rowIndex].children;
        for (let i = 0; i < this.wordLength; i++) {
            setTimeout(() => tiles[i].classList.add("bounce"), i * 90);
        }
    }

    // ==========================================
    // LOGIKA GAME 2: HANGMAN KREATIF (MULTI-KATA & PANJANG DINAMIS)
    // ==========================================
    initHangmanRound() {
        // Jumlah nyawa sesuai tingkat kesulitan!
        if (this.selectedDifficulty === "mudah") {
            this.maxMistakes = 6;
        } else if (this.selectedDifficulty === "sedang") {
            this.maxMistakes = 5;
        } else {
            this.maxMistakes = 4; // Sulit: Hanya 4 kesalahan!
        }

        this.mistakes = 0;
        this.guessedLetters = new Set();

        // Hitung struktur kata (misal: "2 Kata • 12 Huruf")
        const wordsArr = this.secretWord.split(" ").filter(Boolean);
        const totalLetters = wordsArr.join("").length;
        document.getElementById("hangman-structure-tag").textContent =
            `${wordsArr.length} Kata • ${totalLetters} Huruf`;

        document.getElementById("hangman-clue-text").textContent =
            this.secretClue || "Tebak istilah atau ungkapan Bahasa Indonesia ini!";

        // Pada tingkat Mudah, berikan 1 huruf vokal pembuka gratis jika panjang >= 8 huruf
        if (this.selectedDifficulty === "mudah" && totalLetters >= 8) {
            const vowelsInWord = this.secretWord.split("").filter(ch => /[AIUEO]/.test(ch));
            if (vowelsInWord.length > 0) {
                const freeChar = vowelsInWord[0];
                this.guessedLetters.add(freeChar);
                this.updateKeyboardKey(freeChar, "correct");
            }
        }

        this.updateHangmanDrawing();
        this.renderHangmanSlots();
    }

    renderHangmanSlots(revealMissed = false) {
        const container = document.getElementById("hangman-word-slots");
        container.innerHTML = "";

        const words = this.secretWord.split(" ");
        words.forEach(word => {
            const group = document.createElement("div");
            group.className = "hm-word-group";

            for (let i = 0; i < word.length; i++) {
                const ch = word[i];
                const slot = document.createElement("div");
                slot.className = "hm-slot";

                if (this.guessedLetters.has(ch)) {
                    slot.textContent = ch;
                    slot.classList.add("revealed");
                } else if (revealMissed) {
                    slot.textContent = ch;
                    slot.classList.add("missed-reveal");
                } else {
                    slot.textContent = "";
                }
                group.appendChild(slot);
            }
            container.appendChild(group);
        });
    }

    updateHangmanDrawing() {
        // Petakan proporsi kesalahan ke 6 bagian tubuh SVG
        const partsToShow = Math.round((this.mistakes / this.maxMistakes) * 6);
        const parts = document.querySelectorAll("#hangman-svg .hm-part");
        parts.forEach(part => {
            const partNum = parseInt(part.dataset.part, 10);
            part.classList.toggle("hidden", partNum > partsToShow);
        });

        const remaining = Math.max(0, this.maxMistakes - this.mistakes);
        const hearts = "❤️".repeat(remaining) + "🖤".repeat(this.mistakes);
        document.getElementById("hangman-lives").textContent = `${hearts} (${remaining}/${this.maxMistakes})`;
    }

    submitHangmanLetter(letter) {
        if (this.guessedLetters.has(letter)) {
            this.showToast(`Huruf "${letter}" sudah ditebak!`);
            return;
        }

        if (this.mode === "multi") {
            this.sendNetworkMessage({
                type: "HANGMAN_GUESS",
                letter
            });
        }

        this.applyHangmanLetter(letter, true);
    }

    applyHangmanLetter(letter, isLocalActor) {
        if (this.guessedLetters.has(letter) || this.isGameOver) return;
        this.guessedLetters.add(letter);

        const isHit = this.secretWord.includes(letter);
        const actorName = isLocalActor ? this.myName : this.peerName;

        if (isHit) {
            this.updateKeyboardKey(letter, "correct");
            this.renderHangmanSlots(false);
        } else {
            this.mistakes++;
            this.updateKeyboardKey(letter, "absent");
            this.updateHangmanDrawing();
        }

        // Cek kemenangan (abaikan karakter spasi)
        const allRevealed = this.secretWord
            .split("")
            .filter(ch => ch !== " ")
            .every(ch => this.guessedLetters.has(ch));

        if (allRevealed) {
            this.isGameOver = true;
            const winMsg = this.mode === "multi"
                ? `Luar biasa! ${actorName} menuntaskan jawaban! 🎉`
                : "Selamat! Kamu berhasil memecahkan teka-teki ini! 🎉";
            this.showToast(winMsg, 2800);
            setTimeout(() => this.showResultModal(true, winMsg), 1100);
        } else if (this.mistakes >= this.maxMistakes) {
            this.isGameOver = true;
            this.renderHangmanSlots(true);
            this.showToast(`Nyawa Habis! Jawaban: ${this.secretWord}`, 3200);
            setTimeout(() => this.showResultModal(false, "Nyawa habis! Jangan menyerah, coba lagi."), 1200);
        } else {
            this.toggleTurn();
        }
    }

    // ==========================================
    // BANTUAN (HINT), KEYBOARD & MODAL HASIL
    // ==========================================
    useHint() {
        if (this.isGameOver) return;
        if (this.selectedDifficulty === "sulit") {
            this.showToast("Mode Sulit tidak mengizinkan penggunaan Hint! 💀");
            return;
        }
        if (this.hintUsed) {
            this.showToast("Bantuan sudah dipakai pada ronde ini!");
            return;
        }

        let hintMessage = "";
        if (this.gameType === "wordle") {
            const idx = Math.floor(Math.random() * this.secretWord.length);
            hintMessage = `💡 Petunjuk: Huruf ke-${idx + 1} adalah "${this.secretWord[idx]}"`;
        } else {
            const unrevealed = this.secretWord
                .split("")
                .filter(c => c !== " " && !this.guessedLetters.has(c));
            const pick = unrevealed[Math.floor(Math.random() * unrevealed.length)] || this.secretWord[0];
            hintMessage = `💡 Petunjuk: Jawaban mengandung huruf "${pick}"`;
        }

        this.hintUsed = true;
        document.getElementById("btn-hint").classList.add("hint-used");
        this.showToast(hintMessage, 3800);

        if (this.mode === "multi") {
            this.sendNetworkMessage({
                type: "HINT_USED",
                hintMessage
            });
        }
    }

    updateKeyboardKey(letter, newState) {
        const keyEl = document.querySelector(`#keyboard .key[data-key="${letter}"]`);
        if (!keyEl) return;

        const priority = { correct: 3, present: 2, absent: 1 };
        const current = keyEl.dataset.state;
        if (!current || priority[newState] > priority[current]) {
            keyEl.dataset.state = newState;
        }
    }

    showResultModal(isWin, subtext) {
        document.getElementById("result-status").textContent = isWin ? "Tebakan Tepat! 🎉" : "Permainan Berakhir 💪";
        document.getElementById("result-subtext").textContent =
            `${subtext || ""} (${TOPIC_LABELS[this.secretTopic]} • ${DIFF_LABELS[this.selectedDifficulty]})`;
        document.getElementById("secret-word-text").textContent = this.secretWord;
        document.getElementById("secret-word-clue").textContent = this.secretClue ? `"${this.secretClue}"` : "";

        document.getElementById("modal-result").classList.remove("hidden");
    }

    closeAllModals() {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
    }

    showToast(message, duration = 2300) {
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("fade-out");
            setTimeout(() => toast.remove(), 250);
        }, duration);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new KataKitaApp();
});
