// ==========================================================
// KATAKITA.ID - WORDLE & HANGMAN MULTIPLAYER BAHASA INDONESIA
// ==========================================================

const TARGET_WORDS = [
    { word: "MAKAN", clue: "Memasukkan makanan pokok ke dalam mulut serta mengunyah dan menelannya." },
    { word: "MINUM", clue: "Memasukkan air atau benda cair ke dalam mulut dan meneguknya." },
    { word: "TIDUR", clue: "Mengistirahatkan badan dan kesadaran (biasanya dengan memejamkan mata)." },
    { word: "RUMAH", clue: "Bangunan untuk tempat tinggal keluarga." },
    { word: "PINTU", clue: "Tempat untuk masuk dan keluar ruangan." },
    { word: "KURSI", clue: "Tempat duduk yang berkaki dan bersandaran." },
    { word: "LAMPU", clue: "Alat untuk menerangi ruangan di malam hari." },
    { word: "MOBIL", clue: "Kendaraan darat yang digerakkan oleh tenaga mesin beroda empat." },
    { word: "MOTOR", clue: "Kendaraan beroda dua yang digerakkan oleh mesin." },
    { word: "KAPAL", clue: "Kendaraan pengangkut penumpang dan barang di laut atau sungai." },
    { word: "KERJA", clue: "Kegiatan melakukan sesuatu; pencarian atau nafkah." },
    { word: "PASAR", clue: "Tempat orang berjual beli kebutuhan sehari-hari." },
    { word: "BERAS", clue: "Padi yang telah terkelupas kulitnya dan siap ditanak menjadi nasi." },
    { word: "SAYUR", clue: "Daun-daunan atau tumbuhan yang dimasak sebagai teman makan nasi." },
    { word: "TELUR", clue: "Benda bercangkang yang dihasilkan oleh unggas (ayam, bebek, dsb)." },
    { word: "GARAM", clue: "Senyawa kristal putih berasa asin, biasanya dari air laut." },
    { word: "MANIS", clue: "Rasa seperti gula atau madu." },
    { word: "PAHIT", clue: "Rasa tidak sedap seperti empedu atau kopi tanpa gula." },
    { word: "PEDAS", clue: "Rasa seperti cabai atau merica." },
    { word: "PANAS", clue: "Terasa seperti terbakar atau dekat dengan api; bersuhu tinggi." },
    { word: "SEJUK", clue: "Terasa agak dingin, nyaman, dan segar." },
    { word: "HUJAN", clue: "Titik-titik air yang berjatuhan dari udara karena proses pendinginan." },
    { word: "ANGIN", clue: "Gerakan udara dari daerah yang bertekanan tinggi ke rendah." },
    { word: "BADAI", clue: "Angin kencang yang menyertai cuaca buruk." },
    { word: "PULAU", clue: "Tanah atau daratan yang dikelilingi air (di laut atau danau)." },
    { word: "DANAU", clue: "Genangan air yang amat luas dan dikelilingi daratan." },
    { word: "HUTAN", clue: "Tanah luas yang ditumbuhi pohon-pohon secara alami." },
    { word: "POHON", clue: "Tumbuhan yang batangnya keras dan besar." },
    { word: "BUNGA", clue: "Bagian tumbuhan yang elok warnanya dan harum baunya." },
    { word: "TANAH", clue: "Permukaan bumi atau lapisan bumi yang di atas sekali." },
    { word: "PASIR", clue: "Butir-butir batu yang halus di pantai atau gurun." },
    { word: "BULAN", clue: "Benda langit yang mengitari bumi dan bersinar pada malam hari." },
    { word: "MALAM", clue: "Waktu setelah matahari terbenam hingga matahari terbit." },
    { word: "SIANG", clue: "Bagian hari yang terang dari matahari terbit sampai terbenam." },
    { word: "SENJA", clue: "Waktu ketika matahari baru saja terbenam (setengah gelap)." },
    { word: "WAKTU", clue: "Seluruh rangkaian saat ketika proses atau keadaan berlangsung." },
    { word: "TAHUN", clue: "Masa yang lamanya dua belas bulan." },
    { word: "PEKAN", clue: "Masa tujuh hari; minggu." },
    { word: "BESOK", clue: "Hari sesudah hari ini." },
    { word: "CINTA", clue: "Perasaan suka dan sayang yang sangat mendalam." },
    { word: "RINDU", clue: "Sangat ingin dan berharap benar bertemu seseorang." },
    { word: "KASIH", clue: "Perasaan sayang atau menaruh belas kasihan." },
    { word: "MARAH", clue: "Sangat tidak senang karena diperlakukan tidak sepantasnya." },
    { word: "SEDIH", clue: "Merasa sangat pilu dalam hati; susah hati." },
    { word: "TAKUT", clue: "Merasa gentar menghadapi sesuatu yang dianggap berbahaya." },
    { word: "SABAR", clue: "Tahan menghadapi cobaan (tidak lekas marah atau putus asa)." },
    { word: "JUJUR", clue: "Lurus hati; tidak berbohong; tidak curang." },
    { word: "BENAR", clue: "Sesuai sebagaimana adanya; betul; tidak salah." },
    { word: "CEPAT", clue: "Dalam waktu singkat dapat menempuh jarak cukup jauh; lekas." },
    { word: "PELAN", clue: "Tidak cepat; lambat." },
    { word: "BESAR", clue: "Lebih dari ukuran sedang; lawan dari kecil." },
    { word: "KECIL", clue: "Kurang dari besar atau kurang dari ukuran biasa." },
    { word: "SEHAT", clue: "Baik seluruh badan serta bagian-bagiannya (bebas dari sakit)." },
    { word: "HIDUP", clue: "Masih terus ada, bergerak, dan bekerja sebagaimana mestinya." },
    { word: "JALAN", clue: "Tempat untuk lalu lintas orang dan kendaraan." },
    { word: "SUARA", clue: "Bunyi yang dikeluarkan dari mulut manusia atau alat musik." },
    { word: "TULIS", clue: "Membuat huruf atau angka dengan pena atau pensil." },
    { word: "KELAS", clue: "Ruang tempat belajar di sekolah." },
    { word: "MURID", clue: "Anak yang sedang berguru atau bersekolah." },
    { word: "KAWAN", clue: "Teman; sahabat; sekutu." },
    { word: "TEMAN", clue: "Kawan; sahabat yang bersama-sama bekerja atau bermain." },
    { word: "GAJAH", clue: "Binatang menyusui berbelalai panjang dan bergading." },
    { word: "MACAN", clue: "Harimau; binatang buas pemakan daging dari suku kucing besar." },
    { word: "SINGA", clue: "Binatang buas pemakan daging yang pejantannya bersurai lebat." },
    { word: "SEMUT", clue: "Serangga kecil yang berjalan merayap dan hidup bergerombol." },
    { word: "LEBAH", clue: "Serangga bersayap penghasil madu." },
    { word: "BUAYA", clue: "Binatang melata berkulit tebal yang hidup di sungai atau rawa." },
    { word: "ELANG", clue: "Burung pemangsa berparuh bengkok dan bercakar tajam." },
    { word: "JERUK", clue: "Buah berbentuk bulat yang berasa asam atau manis segar." },
    { word: "NANAS", clue: "Buah tropis berkulit berduri tempel dan bermahkota daun." },
    { word: "MELON", clue: "Buah bulat berkulit hijau atau kuning dan berdaging manis berair." },
    { word: "KURMA", clue: "Buah pohon palem dari Timur Tengah yang rasanya sangat manis." },
    { word: "TOMAT", clue: "Buah bulat berwarna merah yang sering dipakai untuk sayur/sambal." },
    { word: "CABAI", clue: "Buah tanaman yang rasanya pedas untuk bumbu masakan." },
    { word: "KECAP", clue: "Cairan kental berwarna hitam dari kedelai yang difermentasi." },
    { word: "PISAU", clue: "Bilah besi tipis dan tajam yang bertangkai sebagai alat pengiris." },
    { word: "GARPU", clue: "Pasangan sendok yang ujungnya berjari-jari untuk menusuk lauk." },
    { word: "GELAS", clue: "Tempat minum berbentuk tabung yang terbuat dari kaca." },
    { word: "KASUR", clue: "Alas tidur yang terbuat dari busa, kapuk, atau pegas." },
    { word: "KAMAR", clue: "Ruang yang bersekat dinding dan berpintu di dalam rumah." },
    { word: "DAPUR", clue: "Ruang tempat memasak." },
    { word: "KUNCI", clue: "Alat untuk membuka dan mengancing pintu atau gembok." },
    { word: "SABUN", clue: "Bahan berbuih yang digunakan untuk mandi atau mencuci." },
    { word: "JAKET", clue: "Baju luar berlengan panjang untuk menahan dingin atau angin." },
    { word: "PERAK", clue: "Logam mulia berwarna putih mengilap." },
    { word: "INTAN", clue: "Batu permata berkilauan berasal dari karbon murni; berlian." },
    { word: "MERAH", clue: "Warna dasar yang serupa dengan warna darah atau bendera atas kita." },
    { word: "PUTIH", clue: "Warna dasar yang serupa dengan warna kapas atau susu." },
    { word: "HIJAU", clue: "Warna yang serupa dengan warna daun segar." },
    { word: "DAMAI", clue: "Tidak ada perang; tenteram dan aman." },
    { word: "SURAT", clue: "Kertas yang bertulis untuk dikirimkan kepada pihak lain." },
    { word: "PUISI", clue: "Ragam sastra yang bahasanya terikat oleh irama dan rima." },
    { word: "MUSIK", clue: "Nada atau suara yang disusun demikian rupa sehingga mengandung irama." },
    { word: "GEMPA", clue: "Guncangan atau gerakan kulit bumi secara tiba-tiba." },
    { word: "MIMPI", clue: "Sesuatu yang terlihat atau dialami dalam tidur; bunga tidur." }
];

const EXTRA_WORDS = [
    "ABADI","ABANG","ABJAD","ABSEN","ACARA","AGAMA","AGUNG","AJAIB","AJANG","AKHIR",
    "AKRAB","AKTIF","AKTOR","ALAMI","ALANG","ALBUM","ALIBI","ALTAR","AMBIL","AMPAS",
    "AMPUH","AMPUN","ANCAM","ANDAI","ANDAL","ANEKA","ANGKA","ANGSA","ANJUR","ANTAR",
    "ANTEK","ANTIK","ANTRE","APUNG","ARENA","AROMA","ARSIP","ARTIS","ASMAR","ASPAL",
    "ATLET","AUDIO","AWET","BABAK","BABAT","BADAK","BADAN","BADUT","BAGAI","BAGAN",
    "BAGUS","BAHAN","BAHAS","BAJING","BAKAL","BAKAR","BAKAT","BAKMI","BAKSO","BAKTI",
    "BAKUL","BALAI","BALAP","BALAS","BALIK","BALOK","BALON","BALUT","BAMBU","BANCI",
    "BANDA","BANTU","BAPAK","BARAT","BARET","BARIS","BASAH","BASMI","BATAK","BATAL",
    "BATAS","BATIK","BATIN","BATOK","BATUK","BAWAH","BAYAM","BAYAR","BAZAR","BEBAL",
    "BEBAN","BEBAS","BEBEK","BECEK","BECAK","BEDAH","BEDAK","BEDIL","BEDUK","BEGAL",
    "BEJAT","BEKAL","BEKAS","BELAH","BELAI","BELAS","BELIA","BELIT","BELOK","BELUM",
    "BELUT","BENAH","BENAK","BENAM","BENAR","BENCI","BENDA","BENIH","BENTU","BENUA",
    "BERAK","BERAT","BERES","BERKA","BESAR","BESOK","BESUK","BETAH","BETIS","BETON",
    "BETUL","BIARA","BIASA","BIAYA","BIBIR","BIBIT","BIDAK","BIDAN","BIDIK","BIJAK",
    "BIJIH","BIKIN","BIKSU","BILAH","BILAS","BILIK","BINAR","BINTI","BIOLA","BISIK",
    "BISUL","BOBOK","BOBOL","BOBOT","BOCAH","BOCOR","BODOH","BOKON","BOLEH","BOLOS",
    "BONUS","BOROS","BOSAN","BOTAK","BOTOL","BUAYA","BUBAR","BUBUK","BUBUR","BUDAK",
    "BUGAR","BUGIL","BUJUK","BUJUR","BUKAN","BUKIT","BUKTI","BULAN","BULAT","BULIR",
    "BULUH","BUMBU","BUNGA","BUNUH","BUNYI","BURAM","BURSA","BURUH","BURUK","BUSA",
    "BUSUK","BUSUR","BUTIR","BUTUH","BUYAR","BUYUT","CABAI","CABIK","CABUL","CABUT",
    "CACAT","CADAR","CADAS","CAGAR","CAKAP","CAKAR","CAKRA","CAKUP","CALON","CAMAT",
    "CANDI","CANDU","CAPAI","CAPEK","CARIK","CARUT","CATAT","CATUR","CATUT","CAWAN",
    "CEBOK","CEBUR","CECAK","CECAR","CEGAH","CEGAT","CEKIK","CELAH","CELUP","CEMAR",
    "CEMAS","CEPAT","CEPER","CERAH","CERAI","CERIA","CERNA","CETAK","CETEK","CETUS",
    "CICIL","CICIT","CIDUK","CIKAL","CIKGU","CILIK","CINTA","CIPTA","CITRA","COBEK",
    "COCOK","COKOT","COLEK","COLOK","COMOT","COPET","COPOT","CORAK","CORET","CUACA",
    "CUBIT","CUCUK","CUCUR","CUKAI","CUKUP","CUKUR","CULAS","CULIK","CURAH","CURAM",
    "CURIG","DADAK","DADAR","DAERA","DAGAN","DAHAN","DAKWA","DALAM","DALIH","DALIL",
    "DAMAI","DAMAR","DANAU","DANSA","DAPAT","DAPUR","DARAH","DARAT","DARMA","DASAR",
    "DATANG","DATAR","DATUK","DAWAI","DAYAK","DEBAR","DEBAT","DEBUR","DECAP","DEDAK",
    "DEKAM","DEKAN","DEKAP","DEKAT","DEKIL","DEMAM","DEMIT","DENAH","DENDA","DEPAN",
    "DEPAK","DERAI","DERAS","DERET","DERMA","DESAH","DESAK","DESAS","DESAU","DETAK",
    "DETIK","DEWAN","DIDIH","DIDIK","DIKTE","DINAS","DINI","DOBEL","DODOL","DOGMA",
    "DOLAR","DOMBA","DONOR","DOSEN","DOSIS","DOYAN","DRAMA","DUBUR","DUDUK","DUKUN",
    "DUNIA","DURJA","DUSTA","DUSUN","EDISI","EGOIS","EKSTRA","ELANG","EMAIL","EMBAH",
    "EMBAN","EMBER","EMBUN","EMOSI","EMPAT","EMPUK","ENDAP","ENDUS","ENYAH","ETIKA",
    "ETNIS","FAJAR","FAKTA","FAKIR","FAMIL","FARDU","FASIH","FATAL","FATWA","FAUNA",
    "FIKIH","FIKSI","FINAL","FISIK","FITRA","FLORA","FOKUS","FONEM","FORMA","FORUM",
    "FOSIL","FRAKS","FRASA","FUNGS","GABAH","GABUS","GADAI","GADIS","GADUH","GAGAH",
    "GAGAK","GAGAL","GAGAP","GAGAS","GAJAH","GAJIH","GALAK","GALAU","GALON","GAMBI",
    "GANAS","GANDA","GANJA","GANTI","GAPAI","GARAM","GARIS","GARPU","GARUK","GARUT",
    "GASAK","GASAL","GATAL","GAWAI","GAWAT","GAYUN","GEBUK","GEGAR","GEGER","GELAK",
    "GELAP","GELAR","GELAS","GELUT","GEMAR","GEMAS","GEMPA","GEMUK","GENAP","GENTA",
    "GERAH","GERAI","GERAK","GERAM","GERET","GESEK","GESER","GESIT","GETAH","GETAR",
    "GETIR","GETOL","GIGIH","GIGIL","GIGIT","GILAS","GILIR","GITAR","GODA","GODOK",
    "GOLEK","GOLOK","GORES","GOSIP","GOSOK","GOYAH","GRUP","GUBAH","GUBUK","GUDAN",
    "GUDEG","GUGAT","GUGUP","GUGUR","GUGUS","GULAI","GULAT","GULMA","GUMAM","GUMUL",
    "GUNDI","GURAU","GURIH","GURUN","GURUH","GUSAR","GUSUR","GUYON","GUYUR","HABIS",
    "HADAP","HADIR","HADIS","HAFAL","HAJAT","HAJAR","HAKIM","HALAL","HALAU","HALTE",
    "HALUS","HAMBA","HAMIL","HAMPA","HANTU","HANYA","HAPUS","HARAM","HARAP","HARGA",
    "HARTA","HARUM","HARUS","HASIL","HASUT","HAWAT","HAYAT","HEBAT","HEBOH","HELAI",
    "HEMAT","HENTI","HERAN","HEWAN","HIBAH","HIBUR","HIDUP","HIJAU","HILIR","HINA",
    "HIRAU","HIRUK","HIRUP","HISAP","HITAM","HORMA","HOTEL","HUJAT","HUJAN","HUKUM",
    "HUMOR","HUNUS","HURUF","HUTAN","IBADA","IBLIS","IDEAL","IDOLA","IJAZA","IKLAN",
    "IKLIM","IKRAR","ILAHI","ILHAM","ILUSI","IMBAL","IMBAS","IMBAU","IMPAS","IMPOR",
    "INCAR","INDAH","INDUK","INFUS","INGAT","INGIN","INGUS","INJAK","INJIL","INSAN",
    "INSAF","INTAI","INTAN","INTIP","IRAMA","IRING","ISENG","ISLAM","ISTRI","ITIKA",
    "JABAT","JABAR","JADWA","JAGAD","JAGAL","JAHAT","JAHIL","JAHIT","JAJAK","JAJAL",
    "JAJAN","JAJAR","JAKET","JAKSA","JAKUN","JALAK","JALAN","JALAR","JALIN","JALUR",
    "JAMAH","JAMAK","JAMAN","JAMBU","JAMIN","JAMPI","JAMUR","JANDA","JANJI","JANUR",
    "JARAK","JARAH","JARUM","JASAD","JATAH","JATUH","JAWAB","JEBAK","JEBOL","JEJAK",
    "JEJAL","JEJER","JELAS","JELEK","JELMA","JEMUR","JENIS","JENUH","JEPIT","JERAT",
    "JERIH","JERUK","JILAT","JILID","JIMAT","JINAK","JIPLA","JODOH","JOGET","JOMPO",
    "JOROK","JUANG","JUARA","JUBAH","JUBEL","JUDUL","JUJUR","JUMAT","JUMBO","JUMPA",
    "JURU","JURUS","KABAR","KABEL","KABIN","KABUL","KABUR","KABUT","KACAU","KADAL",
    "KADAR","KADER","KAFAN","KAFIR","KAGET","KAGUM","KAIDA","KAJIA","KAKAK","KAKAO",
    "KAKAP","KAKEK","KALAH","KALAP","KALAU","KALDU","KALUT","KAMAR","KAMIS","KAMUS",
    "KANAL","KANAN","KANDA","KAPAK","KAPAL","KAPAN","KAPAS","KAPOK","KAPUR","KARAM",
    "KARAT","KARET","KARGO","KARIB","KARIR","KARMA","KARTU","KARYA","KASAR","KASIH",
    "KASIR","KASTA","KASUS","KASUR","KATAK","KATEL","KATIL","KATUP","KAWAL","KAWAN",
    "KAWAT","KAWIN","KAYAK","KAYUH","KEBAL","KEBON","KEBUN","KEBUT","KECAM","KECAP",
    "KECIL","KECOH","KECUP","KECUT","KEDAI","KEDAP","KEDIP","KEDOK","KEDUK","KEJAM",
    "KEJAR","KEJUT","KEKAL","KEKEH","KEKER","KELAH","KELAK","KELAM","KELAR","KELAS",
    "KELIP","KELIT","KELOK","KELON","KELOR","KELUH","KEMAH","KEMAS","KEMPU","KENAL",
    "KENAN","KENDI","KENYA","KEPAL","KEPIT","KERAH","KERAK","KERAM","KERAN","KERAP",
    "KERAS","KERAT","KEREK","KEREN","KERIS","KERJA","KEROK","KERUH","KERUK","KERUT",
    "KESAL","KESAN","KESAT","KESET","KETAM","KETAN","KETAT","KETEK","KETEL","KETIK",
    "KETIP","KETOK","KETUA","KETUK","KETUL","KIAMA","KIBAR","KIBUL","KICAU","KIDAL",
    "KIKIR","KIKIS","KILAH","KILAP","KILAS","KILAT","KILAU","KIMIA","KIOS","KIPAS",
    "KIPER","KIRAB","KIRIM","KISAH","KISAR","KISUT","KITAB","KITAR","KLAIM","KLIEN",
    "KLINI","KOBAR","KOBOI","KOCAK","KOCOK","KODOK","KODRA","KOKOH","KOKOK","KOLAK",
    "KOLAM","KOLOM","KOLOT","KOMEN","KOMET","KOMIK","KOMPA","KONDE","KOPER","KOPIA",
    "KORAN","KOREK","KOTAK","KOTOR","KOYAK","KREAS","KRIM","KUACI","KUALA","KUALI",
    "KUASA","KUBAH","KUBIK","KUBIS","KUBUR","KUCUR","KUDAP","KUDIS","KUDUS","KUJANG",
    "KUKUH","KUKUS","KULAH","KULAK","KULIT","KULUM","KUMAL","KUMAN","KUMAT","KUMIS",
    "KUMUR","KUNCI","KUNDUR","KUNO","KUPAS","KUPON","KURAP","KURAS","KURIR","KURMA",
    "KURSI","KURUS","KURVA","KUSAM","KUSIR","KUSTA","KUSUT","KUTIK","KUTIL","KUTIP",
    "KUTUB","KUTUK","KUYUP","KWACI","LABEL","LABIL","LABOR","LABUH","LACAK","LADEN",
    "LAFAL","LAGAK","LAHAN","LAHAP","LAHAR","LAHIR","LAJANG","LAJUR","LAKON","LALAI",
    "LALAP","LALAT","LALIM","LAMAR","LAMPU","LANDA","LANGI","LANTA","LAPAK","LAPAN",
    "LAPAR","LAPIS","LAPOR","LAPUK","LARAS","LARIS","LARON","LARUT","LASO","LATAH",
    "LATAR","LATIH","LAWAN","LAWAK","LAYAK","LAYAN","LAYAR","LAZIM","LEBAH","LEBAI",
    "LEBAK","LEBAR","LEBAT","LEBIH","LEBUR","LECEH","LECET","LEDAK","LEDEK","LEGAL",
    "LEGAM","LEGIT","LEHER","LEKAS","LEKAT","LEKUK","LELAH","LELAP","LELEH","LEMAH",
    "LEMAK","LEMAS","LEMBUT","LENDA","LENSA","LEPAS","LERAI","LESAT","LESBI","LETAK",
    "LETIH","LETUS","LEVEL","LEWAT","LEZAT","LIANG","LIBAS","LIBAT","LIBUR","LICIK",
    "LICIN","LIDAH","LIHAI","LIHAT","LILIN","LILIT","LIMPA","LIPAN","LIPAT","LIPUR",
    "LIPUT","LIRIH","LIRIK","LISAN","LITER","LOBAK","LOGAM","LOGAT","LOGIS","LOKAL",
    "LOKET","LOMBA","LONTE","LOSME","LOTRE","LOYAL","LUANG","LUBAN","LUBER","LUDAH",
    "LUDES","LUHUR","LUKIS","LULUH","LULUR","LULUS","LUMAT","LUMER","LUMUR","LUMUT",
    "LUNAK","LUNAS","LUPUT","LURAH","LURIK","LURUH","LURUS","LUSIN","LUSUH","LUTUT",
    "LUWES","MABUK","MACAM","MACAN","MACET","MADAT","MAFIA","MAGIS","MAHAL","MAHIR",
    "MAJIK","MAKAM","MAKAN","MAKAR","MAKIN","MAKNA","MALAH","MALAM","MALAS","MAMPIR",
    "MAMPU","MANDI","MANIS","MANJA","MAPAN","MARAH","MARAK","MARET","MARGA","MASA",
    "MASAK","MASAM","MASIH","MASIN","MASUK","MATAN","MATRA","MAUNG","MAWAR","MAWAS",
    "MAYAT","MAYOR","MEBEL","MEDAN","MEDIA","MEDIS","MEGAH","MEKAR","MELAR","MELEK",
    "MELON","MEMAR","MENIT","MENOR","MENUR","MERAH","MERAK","MERDU","MEREK","MEREM",
    "MESIN","MESKI","MESRA","MESTI","MESUM","METAL","METER","MEWAH","MIKRO","MILIK",
    "MIMIK","MIMIS","MIMPI","MINAT","MINIM","MINTA","MINUM","MIRIP","MIRIS","MISAL",
    "MISKI","MITOS","MITRA","MOBIL","MODAL","MODEL","MODIF","MODUS","MOGOK","MOHON",
    "MOJOK","MOLEK","MOMEN","MOMOK","MORAL","MOTIF","MOTOR","MUARA","MUDAH","MUDIK",
    "MUFTI","MUJUR","MUKIM","MULAI","MULAS","MULIA","MULSA","MULUK","MULUS","MULUT",
    "MUMET","MUNCUL","MURAH","MURAI","MURAM","MURID","MURKA","MURNI","MURUNG","MUSIM",
    "MUSUH","MUTU","NAFSU","NAHAS","NAJIS","NAKAL","NAKSIR","NALAR","NAMUN","NANAH",
    "NANAR","NANAS","NANTI","NAPAS","NASIB","NAZAR","NEKAT","NENEK","NETRA","NGERI",
    "NGILU","NIAGA","NIKAH","NIKMA","NILAI","NILON","NIPIS","NOMAD","NOMOR","NORMA",
    "NOVEL","NUKLI","NURI","NYALA","NYAMA","NYANYI","NYARI","NYATA","NYAWA","NYERI",
    "NYIUR","OBENG","OBJEK","OBRAL","OBROL","OCEH","OKNUM","OLENG","OMBAK","OMPONG",
    "OMSET","OMZET","ONCOM","ONGKO","OPERA","OPINI","OPTIM","ORANG","ORASI","ORBIT",
    "ORDER","ORGAN","ORKES","PACAR","PACUL","PADAM","PADAN","PADAT","PAGAR","PAGUT",
    "PAHAM","PAHAT","PAHIT","PAJAK","PAJAN","PAKAI","PAKAN","PAKAR","PAKET","PAKIS",
    "PAKSA","PAKTA","PALEM","PALSU","PALUN","PAMAN","PAMER","PAMIT","PAMRI","PANAH",
    "PANAS","PANCI","PANDA","PANDU","PANEL","PANEN","PANIK","PANJI","PANTA","PANTI",
    "PANTU","PAPAH","PAPAN","PAPAR","PARAF","PARAH","PARAS","PARAU","PARIT","PARUH",
    "PARUT","PASAK","PASAL","PASAR","PASCA","PASIF","PASIR","PASKA","PASOK","PASRA",
    "PASTA","PASTI","PASUN","PATAH","PATEN","PATOK","PATUH","PATUT","PAWAN","PAYAH",
    "PAYAU","PECAH","PECAT","PECEL","PECUT","PEDAL","PEDAS","PEDES","PEDIH","PEGAL",
    "PEGAS","PEJAM","PEKAK","PEKAN","PEKAT","PEKIK","PELAK","PELAN","PELIK","PELIT",
    "PELUK","PENAT","PENUH","PENYU","PEPAT","PERAH","PERAK","PERAM","PERAN","PERAS",
    "PERGI","PERIA","PERIH","PERLU","PERON","PESAN","PESAT","PESEK","PESIA","PESTA",
    "PETAK","PETIR","PETIS","PEYEK","PIALA","PIANO","PIATU","PICIK","PIDAT","PIJAK",
    "PIJAR","PIJAT","PIKAT","PIKIR","PIKUL","PIKUN","PILAH","PILAR","PILEK","PILIH",
    "PILOT","PILU","PINDA","PINTA","PINTU","PIPIH","PIPIS","PIPIT","PISAH","PISAU",
    "PITAM","PLAKA","POHON","POJOK","POKOK","POLAH","POLES","POLOS","POMPA","PONI",
    "POROS","PORSI","POSE","POTON","PRABU","PREMI","PRIMA","PUASA","PUCAT","PUCUK",
    "PUDAR","PUJA","PUJUK","PUKAT","PUKAU","PUKUL","PULAS","PULAU","PULEN","PULIH",
    "PULSA","PULUH","PUNAH","PUNDA","PUNYA","PUPUK","PUPUR","PUPUS","PURBA","PUSAR",
    "PUSAT","PUSPA","PUTAR","PUTIH","PUTIK","PUTRA","PUTRI","PUTUS","PUYUH","RABUK",
    "RABUN","RACIK","RACUN","RADAR","RADIO","RAGAM","RAHIM","RAJAH","RAJAM","RAJIN",
    "RAJUK","RAJUT","RAKIT","RALAT","RAMAH","RAMAI","RAMAL","RAMBU","RAMU","RANAH",
    "RANCU","RANDA","RANDU","RANUM","RAPAT","RAPIH","RAPOR","RAPUH","RASUK","RASUL",
    "RATAP","RATUS","RAUNG","RAWAN","RAWAT","RAWIT","RAWON","RAYAP","RAZIA","REBAH",
    "REBUS","REBUT","RECEH","RECIK","REDAM","REDUP","REGUK","REHAT","REKAM","REKAN",
    "REKAP","REKAT","REKOR","RELA","REMAJ","REMAS","REMEH","REMIS","REMUK","RENDA",
    "REOT","REPAK","REPAS","REPET","REPOT","RESAH","RESAP","RESEP","RESMI","RETAK",
    "RETAS","REUNI","REWEL","RIANG","RIBUT","RICUH","RIDHO","RIMBA","RINAI","RINCI",
    "RINDU","RISAU","RITME","ROBAH","ROBEK","ROBOH","ROBOT","ROGOH","ROKET","ROKOK",
    "ROMAN","ROMPI","RONDA","RONDE","ROTAN","ROYAL","RUANG","RUBAH","RUBUH","RUJAK",
    "RUJUK","RUKUN","RUMAH","RUMIT","RUMOR","RUMUS","RUPA","RUSAK","RUSUH","RUSUK",
    "RUTIN","RUWET","SABAN","SABAR","SABDA","SABIT","SABOT","SABTU","SABUK","SABUN",
    "SABUT","SADAP","SADAR","SADIS","SAHAM","SAHUT","SAING","SAINS","SAJAK","SAKIT",
    "SAKSI","SAKTI","SALAH","SALAK","SALAM","SALAT","SALDO","SALEH","SALIB","SALIN",
    "SALJU","SALON","SALUR","SALUT","SAMAR","SAMPA","SANDI","SANGA","SANTA","SAPA",
    "SAPUT","SARAF","SARAN","SARAP","SARAT","SARIN","SASAR","SATWA","SAWAH","SAWIT",
    "SAYAP","SAYAT","SAYUP","SAYUR","SEBAB","SEBAK","SEBAL","SEBAR","SEBAT","SEBUT",
    "SEDAN","SEDAP","SEDIA","SEDIH","SEDOT","SEDUH","SEGAN","SEGAR","SEGEL","SEGI",
    "SEHAT","SEJAK","SEJAT","SEJUK","SEKAR","SEKAT","SEKTE","SELAI","SELAM","SELAT",
    "SELIH","SELIP","SELOP","SEMAI","SEMAK","SEMAT","SEMEN","SEMUA","SEMUT","SENAM",
    "SENAR","SENAT","SENDA","SENDI","SENDU","SENGI","SENIN","SENJA","SENYA","SEPAK",
    "SEPIT","SEPOI","SEPUH","SERAH","SERAK","SERAM","SERAP","SERAT","SERBU","SERET",
    "SERI","SERTA","SERU","SERUT","SESAK","SESAL","SESAT","SETAN","SETIA","SETIR",
    "SETOR","SEWOT","SIAGA","SIANG","SIAPA","SIBUK","SIDIK","SIFAT","SIGAP","SIHIR",
    "SIKAP","SIKAT","SIKIL","SIKSA","SIKUT","SILAH","SILAM","SILAP","SILAT","SILAU",
    "SILET","SILIH","SIMAK","SINAR","SINGA","SINIS","SIPIL","SIPIR","SIPIT","SIPUT",
    "SIRAM","SIRAP","SIRAT","SIRIK","SIRIP","SIRNA","SIROP","SIRUP","SISIH","SISIK",
    "SISIP","SISIR","SISWA","SISWI","SIUNG","SKALA","SKOR","SLOGA","SOBEK","SOBAT",
    "SODOK","SODOR","SOGOK","SOHOR","SOLEH","SOLID","SOPAN","SOPIR","SORAK","SOROT",
    "SOSIS","SOSOK","SOWAN","SPASI","SPION","SPONS","SPREI","STAF","STASI","STATU",
    "STERI","STOK","STRES","STRUK","SUAKA","SUAMI","SUARA","SUASA","SUATU","SUBUH",
    "SUBUR","SUDAH","SUDUT","SUGIH","SUGUH","SUJUD","SUKAR","SUKMA","SULAM","SULAP",
    "SULIT","SULUH","SUMBU","SUMUR","SUNAH","SUNAT","SUNDA","SUNYI","SUPEL","SUPER",
    "SUPIR","SURAM","SURAT","SURAU","SURGA","SURUH","SURUT","SURYA","SUSAH","SUSUL",
    "SUSUN","SUSUP","SUSUR","SUSUT","SUTRA","SYAIR","SYAWA","TABAH","TABEL","TABIB",
    "TABIR","TABOK","TABUH","TABUR","TAFSI","TAGIH","TAHAN","TAHAP","TAHUN","TAJAM",
    "TAJUK","TAJIR","TAKAR","TAKIK","TAKSI","TAKUT","TAKWA","TALAK","TALAM","TALAS",
    "TAMAK","TAMAN","TAMAT","TAMPA","TAMU","TANAH","TANAK","TANAM","TANDA","TANDU",
    "TANGA","TANGI","TANPA","TANTE","TANYA","TAPAK","TAPAL","TAPIR","TAPIS","TARAF",
    "TARIF","TARIK","TARUH","TATAH","TATAK","TATAP","TATAR","TAUGE","TAWAN","TAWAR",
    "TAWAS","TAWAF","TAWON","TAWUR","TEBAK","TEBAL","TEBAR","TEBAS","TEBU","TEBUS",
    "TEDUH","TEGAK","TEGAL","TEGAP","TEGAR","TEGAS","TEGUK","TEGUH","TEGUR","TEKAD",
    "TEKAN","TEKUK","TEKUN","TELAH","TELAK","TELAN","TELAT","TELOK","TELOR","TELUK",
    "TELUR","TEMAN","TEMPA","TEMPE","TEMPO","TEMU","TENAR","TENDA","TENIS","TENTU",
    "TENUN","TEORI","TEPAT","TEPIH","TEPIS","TEPOK","TEPUK","TERAI","TERAP","TERAS",
    "TERIK","TERKA","TEROR","TERPA","TERUS","TESIS","TETAP","TETAS","TETES","TEWAS",
    "TIADA","TIANG","TIARA","TIDAK","TIDUR","TIKAI","TIKAM","TIKAR","TIKET","TIKUS",
    "TILIK","TIMAH","TIMBA","TIMPA","TIMUN","TIMUR","TINJA","TINJU","TINTA","TIPIS",
    "TIRAI","TIRAM","TIRIS","TITAH","TITIK","TITIP","TITIS","TOBAT","TOGEL","TOKOH",
    "TOKOK","TOKEK","TOLAK","TOLEH","TOLOL","TOMAT","TOMBO","TOPIK","TOPAN","TORAK",
    "TOREH","TOTAL","TREN","TROFI","TROLI","TUALA","TUANG","TUBUH","TUDUH","TUGAS",
    "TUHAN","TUJUH","TUKAR","TUKIK","TUKUL","TULAH","TULAR","TULEN","TULIS","TULUS",
    "TUMAN","TUMIS","TUMIT","TUMOR","TUMPU","TUNAI","TUNAS","TUNDA","TUPAI","TURIS",
    "TURUN","TURUT","TUSUK","TUTUP","TUTUR","UDANG","UDARA","UJUNG","ULAMA","ULANG",
    "UMPAN","UMPAT","UMPET","UNDI","UNGSI","UNJUK","UNSUR","UNTAI","UNTUK","UPAYA",
    "URBAN","URGEN","URINE","URING","URUNG","USANG","USAP","USAHA","UTAMA","UTANG",
    "UTARA","VAKSI","VALID","VALUT","VAMPI","VENA","VERSI","VIDEO","VIRAL","VIRUS",
    "VISUA","VITAL","VOKAL","VONIS","WABAH","WADAH","WADUK","WAFAT","WAJAH","WAJAN",
    "WAJAR","WAJIB","WAJIK","WAKAF","WAKIL","WAKTU","WALAU","WALET","WANGI","WARAS",
    "WARGA","WARIS","WARNA","WASIT","WATAK","WATAS","WAZIR","WELAS","WINDU","WISMA",
    "WUJUD","WUKUF","YAKIN","YAKNI","YATIM","YURAN","ZABUR","ZAHID","ZAKAR","ZAKAT",
    "ZALIM","ZAMAN","ZEBRA","ZIRAH","ZUHUR"
];

const VALID_WORDS_SET = new Set([
    ...TARGET_WORDS.map(item => item.word),
    ...EXTRA_WORDS
]);

const PRAISE_MESSAGES = [
    "Jenius! 🤯",
    "Luar Biasa! 🔥",
    "Hebat Sekali! 👏",
    "Mantap! 👍",
    "Hampir Saja! 😅",
    "Fiuh! Selamat! 😮‍💨"
];

class KataKitaApp {
    constructor() {
        // State Aplikasi & Multiplayer
        this.mode = "solo"; // "solo" | "multi"
        this.gameType = "wordle"; // "wordle" | "hangman"
        this.isHost = false;
        this.roomCode = "";
        this.myName = "Pemain 1";
        this.peerName = "Pemain 2";

        // PeerJS & BroadcastChannel fallback
        this.peer = null;
        this.conn = null;
        this.bc = null;

        // Voting State
        this.myVote = null;
        this.peerVote = null;

        // Game State (Shared)
        this.secretWord = "MAKAN";
        this.secretClue = "";
        this.activeTurn = "host"; // "host" | "guest"
        this.isGameOver = false;
        this.isAnimating = false;
        this.hintUsed = false;

        // Wordle State
        this.maxGuesses = 6;
        this.wordLength = 5;
        this.currentRow = 0;
        this.currentCol = 0;
        this.guesses = [];
        this.evaluations = [];

        // Hangman State
        this.maxMistakes = 6;
        this.mistakes = 0;
        this.guessedLetters = new Set();

        this.initTheme();
        this.createWordleBoardDOM();
        this.bindUIEvents();
    }

    // ==========================================
    // TEMA & NAVIGASI LAYAR
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
            const el = document.getElementById(id);
            if (id === screenId) {
                el.classList.remove("hidden");
            } else {
                el.classList.add("hidden");
            }
        });

        const isHome = screenId === "screen-home";
        const isGame = screenId === "screen-game";
        document.getElementById("btn-home").classList.toggle("hidden", isHome);
        document.getElementById("btn-hint").classList.toggle("hidden", !isGame);
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

        // Tombol Solo di Home
        document.getElementById("btn-solo-wordle").addEventListener("click", () => {
            this.myName = this.getPlayerNameInput();
            this.mode = "solo";
            this.startSelectedGame("wordle", this.pickRandomWord(), "host");
        });

        document.getElementById("btn-solo-hangman").addEventListener("click", () => {
            this.myName = this.getPlayerNameInput();
            this.mode = "solo";
            this.startSelectedGame("hangman", this.pickRandomWord(), "host");
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

        // Voting Actions
        document.getElementById("btn-vote-wordle").addEventListener("click", () => this.castVote("wordle"));
        document.getElementById("btn-vote-hangman").addEventListener("click", () => this.castVote("hangman"));

        // Quick Restart / Back to Vote
        document.getElementById("btn-quick-restart").addEventListener("click", () => {
            if (this.mode === "solo") {
                this.startSelectedGame(this.gameType, this.pickRandomWord(), "host");
                this.showToast("Kata rahasia baru dimulai! 🎲");
            } else {
                this.sendNetworkMessage({ type: "GOTO_VOTE" });
                this.enterVotingScreen();
            }
        });

        // Modal Result Actions
        document.getElementById("btn-play-again").addEventListener("click", () => {
            this.closeAllModals();
            if (this.mode === "solo") {
                this.startSelectedGame(this.gameType, this.pickRandomWord(), "host");
            } else {
                // Di mode multiplayer, mulai ulang game yang sama dengan kata baru
                const wordObj = this.pickRandomWord();
                const firstTurn = Math.random() < 0.5 ? "host" : "guest";
                this.sendNetworkMessage({
                    type: "START_GAME",
                    gameType: this.gameType,
                    wordObj,
                    firstTurn
                });
                this.startSelectedGame(this.gameType, wordObj, firstTurn);
            }
        });

        document.getElementById("btn-back-vote").addEventListener("click", () => {
            this.closeAllModals();
            this.sendNetworkMessage({ type: "GOTO_VOTE" });
            this.enterVotingScreen();
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

    pickRandomWord() {
        const idx = Math.floor(Math.random() * TARGET_WORDS.length);
        return TARGET_WORDS[idx];
    }

    // ==========================================
    // SISTEM MULTIPLAYER (PeerJS + BroadcastChannel)
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

        // 1. Siapkan BroadcastChannel untuk koneksi instan antar-tab di browser yang sama
        try {
            this.bc = new BroadcastChannel(`katakita_room_${code}`);
            this.bc.onmessage = (ev) => this.handleNetworkMessage(ev.data);
        } catch (err) {
            console.warn("BroadcastChannel tidak tersedia:", err);
        }

        // 2. Siapkan PeerJS (WebRTC) untuk koneksi antar perangkat / internet
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
                    // Jika gagal lewat PeerJS namun di tab lokal, BroadcastChannel tetap jalan
                });
            } catch (e) {
                console.warn("PeerJS init error:", e);
            }
        }

        // Jika Guest, kirim sinyal JOIN lewat BroadcastChannel juga (untuk dukungan lokal instan)
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
        conn.on("data", (data) => {
            this.handleNetworkMessage(data);
        });
        conn.on("close", () => {
            this.showToast("Lawannya terputus dari permainan.");
        });
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
                        guestName: this.peerName
                    });
                    this.showToast(`${this.peerName} bergabung ke Room! 🎉`);
                    this.enterVotingScreen();
                }
                break;

            case "ROOM_READY":
                if (!this.isHost) {
                    this.peerName = data.hostName || "Host";
                    this.showToast(`Terhubung dengan ${this.peerName}! 🎉`);
                    this.enterVotingScreen();
                }
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
    // LAYAR VOTING PEMILIHAN GAME
    // ==========================================
    enterVotingScreen() {
        this.myVote = null;
        this.peerVote = null;

        document.getElementById("vote-room-code").textContent = this.roomCode;
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

        const formatChoice = (v) => v === "wordle" ? "Memilih Wordle 🟩" : "Memilih Hangman 🪢";

        if (p1Vote) {
            p1Badge.textContent = formatChoice(p1Vote);
            p1Badge.classList.add("ready");
        } else {
            p1Badge.textContent = "Belum memilih";
            p1Badge.classList.remove("ready");
        }

        if (p2Vote) {
            p2Badge.textContent = formatChoice(p2Vote);
            p2Badge.classList.add("ready");
        } else {
            p2Badge.textContent = "Belum memilih";
            p2Badge.classList.remove("ready");
        }
    }

    resolveVotesAndStart() {
        let chosenGame = this.myVote;
        let tieBreakMsg = "";

        if (this.myVote !== this.peerVote) {
            chosenGame = Math.random() < 0.5 ? "wordle" : "hangman";
            const label = chosenGame === "wordle" ? "WORDLE" : "HANGMAN";
            tieBreakMsg = `Pilihan berbeda! Hasil undian: ${label} 🎲`;
            this.showToast(tieBreakMsg, 2600);
        } else {
            const label = chosenGame === "wordle" ? "WORDLE" : "HANGMAN";
            tieBreakMsg = `Sepakat bermain ${label}! 🚀`;
            this.showToast(tieBreakMsg, 2000);
        }

        const wordObj = this.pickRandomWord();
        const firstTurn = "host"; // Host mulai duluan, lalu bergantian

        setTimeout(() => {
            this.sendNetworkMessage({
                type: "START_GAME",
                gameType: chosenGame,
                wordObj,
                firstTurn,
                tieBreakMsg
            });
            this.startSelectedGame(chosenGame, wordObj, firstTurn);
        }, 700);
    }

    // ==========================================
    // INISIALISASI PERMAINAN (WORDLE / HANGMAN)
    // ==========================================
    startSelectedGame(gameType, wordObj, firstTurn) {
        this.gameType = gameType;
        this.secretWord = wordObj.word.toUpperCase();
        this.secretClue = wordObj.clue;
        this.activeTurn = firstTurn;
        this.isGameOver = false;
        this.isAnimating = false;
        this.hintUsed = false;

        document.getElementById("btn-hint").classList.remove("hint-used");
        document.getElementById("restart-label").textContent = this.mode === "solo" ? "Kata Baru" : "Pilih Game";
        document.getElementById("btn-back-vote").classList.toggle("hidden", this.mode === "solo");

        // Reset Keyboard
        document.querySelectorAll("#keyboard .key").forEach(k => delete k.dataset.state);

        // Tampilkan area permainan yang sesuai
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
        const modeBadge = document.getElementById("game-mode-badge");
        const chanceBadge = document.getElementById("chance-counter-badge");
        const turnBanner = document.getElementById("turn-banner");
        const keyboardEl = document.getElementById("keyboard");

        if (this.mode === "solo") {
            modeBadge.textContent = this.gameType === "wordle" ? "Wordle Solo" : "Hangman Solo";
            if (this.gameType === "wordle") {
                const rem = this.maxGuesses - this.currentRow;
                chanceBadge.textContent = `Sisa Kesempatan: ${rem}/6`;
            } else {
                const rem = this.maxMistakes - this.mistakes;
                chanceBadge.textContent = `Sisa Nyawa: ${rem}/6`;
            }
            turnBanner.textContent = "Giliranmu Menebak!";
            turnBanner.classList.remove("waiting-turn");
            keyboardEl.classList.remove("disabled-turn");
        } else {
            modeBadge.textContent = `Room: ${this.roomCode}`;
            if (this.gameType === "wordle") {
                // Masing-masing pemain punya 3 kesempatan dari total 6 baris
                const hostTurnsUsed = Math.ceil(this.currentRow / 2);
                const guestTurnsUsed = Math.floor(this.currentRow / 2);
                const myTurnsLeft = this.isHost ? (3 - hostTurnsUsed) : (3 - guestTurnsUsed);
                chanceBadge.textContent = `Jatahmu: ${myTurnsLeft}/3`;
            } else {
                const rem = this.maxMistakes - this.mistakes;
                chanceBadge.textContent = `Nyawa Tim: ${rem}/6`;
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
        for (let r = 0; r < this.maxGuesses; r++) {
            const row = document.createElement("div");
            row.className = "board-row";
            for (let c = 0; c < this.wordLength; c++) {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.dataset.state = "empty";
                row.appendChild(tile);
            }
            boardEl.appendChild(row);
        }
    }

    initWordleRound() {
        this.currentRow = 0;
        this.currentCol = 0;
        this.guesses = Array.from({ length: this.maxGuesses }, () => Array(this.wordLength).fill(""));
        this.evaluations = [];

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
        if (!VALID_WORDS_SET.has(guessWord) && !this.isPlausibleIndonesianWord(guessWord)) {
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
        const flipDelay = 170;

        for (let i = 0; i < this.wordLength; i++) {
            const tile = tiles[i];
            const state = evaluation[i];
            const letter = guessWord[i];

            setTimeout(() => {
                tile.classList.add("flip");
                setTimeout(() => {
                    tile.dataset.state = state;
                    this.updateKeyboardKey(letter, state);
                }, 240);
            }, i * flipDelay);
        }

        const totalTime = (this.wordLength - 1) * flipDelay + 520;
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
                this.showToast(`Kesempatan habis! Kata: ${this.secretWord}`, 3200);
                setTimeout(() => this.showResultModal(false, "6 Kesempatan telah habis."), 1300);
            } else {
                this.currentRow++;
                this.currentCol = 0;
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
    // LOGIKA GAME 2: HANGMAN BAHASA INDONESIA
    // ==========================================
    initHangmanRound() {
        this.mistakes = 0;
        this.guessedLetters = new Set();

        document.getElementById("hangman-clue-text").textContent = this.secretClue || "Kata benda/sifat Bahasa Indonesia.";
        this.updateHangmanDrawing();
        this.renderHangmanSlots();
    }

    renderHangmanSlots(revealMissed = false) {
        const container = document.getElementById("hangman-word-slots");
        container.innerHTML = "";

        for (let i = 0; i < this.secretWord.length; i++) {
            const ch = this.secretWord[i];
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
            container.appendChild(slot);
        }
    }

    updateHangmanDrawing() {
        const parts = document.querySelectorAll("#hangman-svg .hm-part");
        parts.forEach(part => {
            const partNum = parseInt(part.dataset.part, 10);
            part.classList.toggle("hidden", partNum > this.mistakes);
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

        // Cek apakah semua huruf sudah terbuka
        const allRevealed = this.secretWord.split("").every(ch => this.guessedLetters.has(ch));

        if (allRevealed) {
            this.isGameOver = true;
            const winMsg = this.mode === "multi"
                ? `Kerja bagus! ${actorName} melengkapi huruf terakhir! 🎉`
                : "Selamat! Kamu berhasil menyelamatkannya! 🎉";
            this.showToast(winMsg, 2800);
            setTimeout(() => this.showResultModal(true, winMsg), 1100);
        } else if (this.mistakes >= this.maxMistakes) {
            this.isGameOver = true;
            this.renderHangmanSlots(true);
            this.showToast(`Gagal! Kata rahasia: ${this.secretWord}`, 3200);
            setTimeout(() => this.showResultModal(false, "Nyawa habis! Orang telah tergantung."), 1200);
        } else {
            // Bergantian setiap tebakan huruf
            this.toggleTurn();
        }
    }

    // ==========================================
    // BANTUAN (HINT), KEYBOARD & MODAL HASIL
    // ==========================================
    useHint() {
        if (this.isGameOver) return;
        if (this.hintUsed) {
            this.showToast("Bantuan sudah dipakai pada ronde ini!");
            return;
        }

        let hintMessage = "";
        if (this.gameType === "wordle") {
            const idx = Math.floor(Math.random() * this.secretWord.length);
            hintMessage = `💡 Petunjuk: Huruf ke-${idx + 1} adalah "${this.secretWord[idx]}"`;
        } else {
            const unrevealed = this.secretWord.split("").filter(c => !this.guessedLetters.has(c));
            const pick = unrevealed[Math.floor(Math.random() * unrevealed.length)] || this.secretWord[0];
            hintMessage = `💡 Petunjuk: Kata ini mengandung huruf "${pick}"`;
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
        document.getElementById("result-status").textContent = isWin ? "Menang! 🎉" : "Permainan Berakhir 💪";
        document.getElementById("result-subtext").textContent = subtext || "";
        document.getElementById("secret-word-text").textContent = this.secretWord;
        document.getElementById("secret-word-clue").textContent = this.secretClue ? `"${this.secretClue}"` : "";

        document.getElementById("modal-result").classList.remove("hidden");
    }

    closeAllModals() {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.add("hidden"));
    }

    showToast(message, duration = 2200) {
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
