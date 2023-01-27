# Dokumentasi

https://user-images.githubusercontent.com/27951856/215064262-9fcd97a4-e519-42f4-94d2-e9426ece398c.mp4

# Langkah-Langkah
- Buka Browser / Tab
- Klik Kanan, Inspect Element
- Buka Console 
- Lalu, ketik code dibawah ini pada Console anda:
```js
function getCourseData(rawData, dosen) {
    data = rawData.split('\n');

    let cellData = [];

    data.forEach(value => {
        cellData.push(value.split('\t'));
    });

    let header = cellData[0]; //contain the information about the class
    let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    let dayData = {};

    days.forEach((value, index) => {
        dayData[value] = cellData.slice(1 + (14 * index), 14 * (index + 1));
    })

    let courses = []

    for(const [dayName, day] of Object.entries(dayData)) {
        for(var i = 0; i < 13; i++){
            day[i].forEach((data, index) => {
                splittedData = data.split('/');
        
                if(!splittedData[0].toLowerCase().match(/sem\s[0-9]/)) 
                    return;
                    
                course = {
                    subject: day[ i - 1 ][ index ],
                    semester: splittedData[0]? Number( splittedData[0].slice(-1) ) : null,
                    sks: splittedData[1]? Number( splittedData[1].slice(0, 1) ) : null,
                    day: dayName,
                    lecturer: splittedData[2]? dosen[ splittedData[2] ] : null,
                    hour: [ day[i - 1][1], day[i][1] ],
                    start: day[i - 1][1].split(' ')[0],
                    class: header[index]
                }
                
                courses.push(course);
            });
        }
    }

    return courses;
}
```
- Setelah itu, ketik code ``json`` berikut
```json
dosen = {
    "FB": {
        "nama": "Fajar Baskoro, S.Kom., M.T.",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "RL": {
        "nama": "Rully Soelaiman, S. Kom., M.Kom.",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Anggota",
        "rekomen": 3
    },
    
    "IS": {
        "nama": "Irfan Subakti",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "DP": {
        "nama": "Dr. Diana Purwitasari, S.Kom., M.Sc.",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Ketua",
        "rekomen": 4
    },

    "AR": {
        "nama": "Ir. F.X. Arunanto, M.Sc.",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "AB": {
        "nama": "Agus Budi Raharjo, PhD",
        "lab": "Algoritma dan Pemrograman",
        "posisi": "Anggota",
        "rekomen": 5
    },

    "SD": {
        "nama": "Prof. Ir. Supeno Djanali, MSc, Ph.D.",
        "lab": "Arsitektur dan Jaringan Komputer",
        "posisi": "Anggota",
        "rekomen": 1
    },
    
    "RM": {
        "nama": "Royyana Muslim I, S.Kom, M.Kom, Ph.D.",
        "lab": "Arsitektur dan Jaringan Komputer",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "RA": {
        "nama": "Dr. Eng. Radityo Anggoro, S.Kom, M.Eng.",
        "lab": "Arsitektur dan Jaringan Komputer",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "WS": {
        "nama": "Wahyu Suadi",
        "lab": "Arsitektur dan Jaringan Komputer",
        "posisi": "Anggota",
        "rekomen": 2
    },

    "JL": {
        "nama": "Prof. Dr. Ir. Joko Lianto Buliali, M.Sc",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "AS": {
        "nama": "Dr. Ahmad Saikhu, S, Si, MT.",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "VH": {
        "nama": "Victor Hariadi, S.Si, M.Kom",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "Ketua",
        "rekomen": 3
    },

    "BA": {
        "nama": "Bilqis Amaliah, S.Kom, M. Kom",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "TB",
        "rekomen": 3
    },

    "AW": {
        "nama": "Arya Yudhi Wijaya, S.Kom., M.Kom.",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "YP": {
        "nama": "Yudhi Purwananto, S. Kom, M.Kom.",
        "lab": "Pemodelan dan Terapan Komputasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "DH": {
        "nama": "Dr. Darlis Herumurti",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "AY": {
        "nama": "Anny Yuniarti, S.Kom, M.Comp.Sc.",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "TB",
        "rekomen": 0
    },

    "IM": {
        "nama": "Imam Kuswardayan, S.Kom., M.T.",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "Ketua",
        "rekomen": 5
    },

    "WN": {
        "nama": "Wijayanti Nurul Khotimah, S. Kom., M.Sc TB",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "TB",
        "rekomen": 0
    },

    "HF": {
        "nama": "Hadziq Fabroyir, PhD",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "Anggota",
        "rekomen": 5
    },

    "SA": {
        "nama": "Siska Arifiani, S. Kom, M.Kom",
        "lab": "Grafika Interaksi dan Game",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "WW": {
        "nama": "Waskitho Wibisono, S.Kom, M.Eng., Ph",
        "lab": "Komputasi Berbasis Jaringan",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "TA": {
        "nama": "Tohari Ahmad, S.Kom, M.IT, Ph.D",
        "lab": "Komputasi Berbasis Jaringan",
        "posisi": "Ketua",
        "rekomen": 3
    },

    "HS": {
        "nama": "Hudan Studiawan, S. Kom, M.Kom",
        "lab": "Komputasi Berbasis Jaringan",
        "posisi": "TB",
        "rekomen": 0
    },

    "BS": {
        "nama": "Baskoro Adi P., S.Kom., M.Kom., PhD",
        "lab": "Komputasi Berbasis Jaringan",
        "posisi": "Anggota",
        "rekomen": 5
    },

    "BJ": {
        "nama": "Bagus Jati S, S.Kom, PhD",
        "lab": "Komputasi Berbasis Jaringan",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "HT": {
        "nama": "Prof.Ir.Handayani Tjandrasa, M.Sc, Ph.",
        "lab": "Komputasi Cerdas dan Visi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "NS": {
        "nama": "Dr. Eng. Nanik Suciati, S.Kom, M.Kom",
        "lab": "Komputasi Cerdas dan Visi",
        "posisi": "Ketua",
        "rekomen": 0
    },

    "CF": {
        "nama": "Dr. Eng. ChastineFatichah, S.Kom, M.Kd",
        "lab": "Komputasi Cerdas dan Visi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "DA": {
        "nama": "Dini Adni Navastara, S.Kom., M.Sc.",
        "lab": "Komputasi Cerdas dan Visi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "AZ": {
        "nama": "Prof. Dr. Eng. Agus Zainal Arifin, S.Kom,",
        "lab": "Komputasi Cerdas dan Visi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "RS": {
        "nama": "Prof. Drs.Ec.Ir. Riyanarto Sarno, M.Sc, PH",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Ketua",
        "rekomen": 0
    },

    "NF": {
        "nama": "Nurul Fajrin Atiyani, S.Kom., M.Sc.",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "AL": {
        "nama": "Adhatus Solichah A., S.Kom., M..",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "RN": {
        "nama": "Ratih Nur Esti Anggraini, S.Kom, M.Sc.,",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "TB",
        "rekomen": 0
    },

    "MN": {
        "nama": "Abdul Munif, S.Kom., M.Sc.",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "SC": {
        "nama": "Shintami, S.Kom, PhD",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "KR": {
        "nama": "Kelly Rosa Sungkono, S.Kom, M. Kom.",
        "lab": "Manajemen Cerdas Informasi",
        "posisi": "Anggota",
        "rekomen": 5
    },

    "ST": {
        "nama": "Dr.Ir. Siti Rochimah, MT",
        "lab": "Rekayasa Perangkat Lunak",
        "posisi": "Ketua",
        "rekomen": 0
    },

    "DO": {
        "nama": "Daniel O. Siahaan, S.Kom. M,Sc, PD.Eng",
        "lab": "Rekayasa Perangkat Lunak",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "SR": {
        "nama": "Sarwosri, S. Kom. M.T",
        "lab": "Rekayasa Perangkat Lunak",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "UY": {
        "nama": "Dr. Umi Laili Yuhana, S.Kom., M.Sc.",
        "lab": "Rekayasa Perangkat Lunak",
        "posisi": "Anggota",
        "rekomen": 0
    },

    "RJ": {
        "nama": "Rizky Januar Akbar, S. Kom., M.Eng.",
        "lab": "Rekayasa Perangkat Lunak",
        "posisi": "Anggota",
        "rekomen": 5
    }
}
```
- Setelah itu, masukkan jadwal berikut:
```js
courses = getCourseData(`Hari	Jam	SKPB Reguler	SKPB IUP	IF-101	IF-102	IF-103	IF-104	IF-105b	IF-105a	IF-106	IF-107a	IF-107b	IF-108 - IUP	LP-1	LP-2	IF-111 (PASCASARJANA)	IF-112 (PASCASARJANA)
SENIN	07.00 - 08.00	FISIKA 2			Struktur Data	Sistem Operasi	Komputasi Pervasif dan Jaringan Sensor		Probabilitas dan Statistik	Pemrograman Berbasis Kerangka Kerja							Topik Dalam Komputasi Awan - A
	08.00 - 09.00	SEM 2			Sem 2/3 SKS/DP	Sem 4/4 SKS/BJ	Sem 8/3 SKS/RA		Sem 4/3 SKS/BA	Sem 6/3 SKS/MN							Sem 2/3 SKS/RM
	09.00 - 10.00		FISIKA 2														
	10.00 - 11.00		SEM 2	Sistem Digital	Manajemen Basis Data	Animasi Komputer dan Pemodelan 3D		Analisis dan Perancangan Sistem Informasi	Manajemen Basis Data	Pemodelan dan Simulasi			Sistem Operasi - IUP		Pemrograman Jaringan		
	11.00 - 12.00			Sem 2/3 SKS/RA	Sem 4/3 SKS/DS	Sem 8/3 SKS/SA		Sem 4/4 SKS/AL	Sem 4/3 SKS/SR	Sem 8/3 SKS/JL			Sem 4/4 SKS/BJ - AM		Sem 6/3 SKS/RM		
	12.00 - 13.00																
	13.00 - 14.00	WAWASAN DAN APLIKASI TEKNOLOGI		Struktur Data		Game Cerdas			Pemrograman Web - akselerasi	Manajemen Basis Data			Struktur Data - IUP	Interaksi Manusia dan Komputer - EN		Topik Dalam Manajemen Proyek Perangkat Lunak - A	Topik Dalam Rekayasa Kebutuhan - A
	14.00 - 15.00	SEM 8		Sem 2/3 SKS/YP		Sem 6/3 SKS/DH			Sem 5/3 SKS/FB	Sem 4/3 SKS/MN			Sem 2/3 SKS/DP	Sem 6/3 SKS/HF		Sem 2/3 SKS/RS	Sem 2/3 SKS/DO
	15.00 - 16.00			Sistem Digital									Sistem Digital - IUP				
	16.00 - 17.00			Sem 2/3 SKS/WS									Sem 2/3 SKS/RA		Pemrograman Jaringan		
	17.00 - 18.00														Sem 6/3 SKS/BJ		
	18.00 - 19.00														Topik Dalam Pemodelan dan Simulasi - P	Topik Dalam Komputasi Awan - P	Topik Dalam Grafika Komputer - P
	19.00 - 20.30														Sem 2/ 3 SKS/JL	Sem 2/ 3 SKS/BJ	Sem 2/3 SKS/DH
																	
SELASA	07.00 - 08.00		BAHASA INGGRIS	Sistem Game	Struktur Data	Analisis Jejaring Sosial	Perancangan dan Analisis Algoritma	Teori Graf dan Otomata					Probabilitas dan Statistik - IUP	Interaksi Manusia dan Komputer		Kecerdasan Komputasional - A	Topik Dalam Komputasi Bergerak - A
	08.00 - 09.00		SEM 2	Sem 8/3 SKS/IM	Sem 2/3 SKS/DS	Sem 8/3 SKS/DP	Sem 4/4 SKS/RL	Sem 6/3 SKS/AW					Sem 4/3 SKS/JL	Sem 6/3 SKS/SA		Sem 1/3 SKS/NS	Sem 2/3 SKS/RA
	09.00 - 10.00		MATEMATIKA 2														
	10.00 - 11.00		SEM 2	Sistem Digital	Pengolahan Citra Digital	Sistem Operasi	Rekayasa Kebutuhan - EN	Penjaminan Mutu Perangkat Lunak	Analisis dan Perancangan Sistem Informasi	Pemrograman Berbasis Kerangka Kerja			Perancangan dan Analisis Algoritma - IUP		Pemrograman Jaringan	Topik Dalam Visi Komputer - A	Topik Dalam Jaringan Nirkabel - A
	11.00 - 12.00	AGAMA ISLAM		Sem 2/3 SKS/TA	Sem 6/3 SKS/HT	Sem 4/4 SKS/AM	Sem 6/4 SKS/RN	Sem 8/3 SKS/ST	Sem 4/4 SKS/SR	Sem 6/3 SKS/FB			Sem 4/4 SKS/AB		Sem 6/3 SKS/RM	Sem 2/3 SKS/NS	Sem 2/3 SKS/SD
	12.00 - 13.00	SEM 2															
	13.00 - 14.00			Sistem Digital	Rekayasa Kebutuhan - EN	Kecerdasan Buatan	Perancangan dan Analisis Algoritma	Rekayasa Kebutuhan	Analisis dan Perancangan Sistem Informasi	Deep Learning				Interaksi Manusia dan Komputer		Topik Dalam Rekayasa Sistem Berbasis Pengetahuan - A	Topik Dalam Penjaminan Kualitas Perangkat Lunak - A
	14.00 - 15.00			Sem 2/3 SKS/TA	Sem 6/4 SKS/RN	Sem 4/3 SKS/DA	Sem 4/4 SKS/RL	Sem 6/4 SKS/AL	Sem 4/4 SKS/SR	Sem 8/3 SKS/CF				Sem 6/3 SKS/SA		Sem 2/3 SKS/RS SC	Sem 2/3 SKS/ST
	15.00 - 16.00	MATEMATIKA 2	KEWARGANEGARAAN					Analisis dan Perancangan Sistem Informasi		Teknologi IoT			Teori Graf dan Otomata				
	16.00 - 17.00	SEM 2	SEM 2					Sem 4/4 SKS/FB		Sem 8/3 SKS/AM			Sem 6/3 SKS/Daz-Math				
	17.00 - 18.00																
	18.00 - 19.00													Topik Dalam Rekayasa Sistem Berbasis Pengetahuan - P	Topik Dalam Analisis Data Deret Waktu - P	Topik Dalam Pengaman Jaringan - P	Kecerdasan Komputasional - P
	19.00 - 20.30													Sem 2/3 SKS/RS SC	Sem 2/ 3 SKS/JL AS	Sem 2/3 SKS/BS	Sem 1/3 SKS/CF
																	
RABU	07.00 - 08.00	FISIKA 2			Struktur Data	Keamanan Informasi dan Jaringan - EN	Perancangan dan Analisis Algoritma	Teori Graf dan Otomata	Probabilitas dan Statistik	Analisis dan Perancangan Sistem Informasi			Interaksi Manusia dan Komputer - IUP	Interaksi Manusia dan Komputer - EN	Pemrograman Jaringan		Topik Dalam Analisis Data Deret Waktu - A
	08.00 - 09.00	SEM 2			Sem 2/3 SKS/AR	Sem 7/3 SKS/BS	Sem 4/4 SKS/RL	Sem 6/3 SKS/AW	Sem 4/3 SKS/BA	Sem 4/4 SKS/FB			Sem 6/3 SKS/AY	Sem 6/3 SKS/HF	Sem 6/3 SKS/HS		Sem 2/3 SKS/JL AS
	09.00 - 10.00		FISIKA 2														
	10.00 - 11.00		SEM 2	Sistem Digital	Manajemen Basis Data	Sistem Operasi	Kecerdasan Buatan	Pengantar Pengembangan Game	Tata Kelola Teknologi Informasi	Pemrograman Berbasis Kerangka Kerja			Rekayasa Kebutuhan -IUP	Pemrograman Jaringan - EN		Topik Dalam Pengolahan Citra Digital - A (EN)	
	11.00 - 12.00		WAWASAN DAN APLIKASI TEKNOLOGI	Sem 2/3 SKS/SD	Sem 4/3 SKS/SC	Sem 4/4 SKS/AM	Sem 4/3 SKS/NS	Sem 3/3 SKS/IM	Sem 8/3 SKS/AL	Sem 6/3 SKS/RJ			Sem 6/4 SKS/RN	Sem 6/3 SKS/BS		Sem 2/3 SKS/HT	
	12.00 - 13.00		SEM 8														
	13.00 - 14.00		AGAMA ISLAM	Audit Sistem	Struktur Data	Sistem Operasi	Kecerdasan Buatan	Analisis dan Perancangan Sistem Informasi	Probabilitas dan Statistik	Pemrograman Berbasis Kerangka Kerja			Pemrograman Web IUP - akselerasi				Topik Dalam Pengaman Jaringan - A
	14.00 - 15.00		SEM 2	Sem 8/3 SKS/RS - KR	Sem 2/3 SKS/AR	Sem 4/4 SKS/HS - BS	Sem 4/3 SKS/CF	Sem 4/4 SKS/ST	Sem 4/3 SKS/AS	Sem 6/3 SKS/FB			Sem 5/3 SKS/IS				Sem 2/3 SKS/TA
	15.00 - 16.00			Sistem Digital	Pengantar Sistem Cerdas		Perancangan dan Analisis Algoritma						Kecerdasan Buatan - IUP			Topik Dalam Analisis Data Geospasial 	
	16.00 - 17.00			Sem 2/3 SKS/WS	Sem 3/3 SKS/DA		Sem 4/4 SKS/AB						Sem 4/3 SKS/SC		 	Sem 2/3 SKS/HG	Komputasi Berbasis Jaringan - P
	17.00 - 18.00														 	 	Sem 1/3 SKS/TA AM
	18.00 - 19.00														Topik Dalam Rekayasa Kebutuhan - P	Topik Dalam Pengolahan Citra Digital - P	Topik Dalam Visi Komputer - P
	19.00 - 20.30														Sem 2/3 SKS/DO	Sem 2/3 SKS/AY	Sem 2/ 3 SKS/NS
																	
KAMIS	07.00 - 08.00			Forensik Digital	Struktur Data	Manajemen Basis Data	Perancangan dan Analisis Algoritma - EN	Teori Graf dan Otomata	Probabilitas dan Statistik	Pengembangan Analisis Algoritma			Pemrograman Jaringan - IUP			Topik Dalam Pengembangan Game, Realitas Virtual, dan Realitas Augmentasi - A	
	08.00 - 09.00			Sem 8/3 SKS/HS	Sem 2/3 SKS/DS	Sem 4/3 SKS/KR	Sem 4/4 SKS/IS	Sem 6/3 SKS/AW	Sem 4/3 SKS/BA	Sem 6/3 SKS/RL			Sem 6/3 SKS/BJ - HS			Sem 2/3 SKS/HF	
	09.00 - 10.00		MATEMATIKA 2														
	10.00 - 11.00		SEM 2	Kecerdasan Buatan	Manajemen Basis Data	Sistem Operasi	Kecerdasan Buatan - EN		Rekayasa Kebutuhan	Perancangan Keamanan Sistem dan Jaringan			Analisis dan Perancangan Sistem Informasi -IUP				
	11.00 - 12.00	KEWARGANEGARAAN		Sem 4/3 SKS/DA	Sem 4/3 SKS/RN	Sem 4/4 SKS/HS	Sem 4/3 SKS/AY		Sem 6/4 SKS/DO	Sem 8/3 SKS/BS			Sem 4/4 SKS/AL				
	12.00 - 13.00	SEM 2															
	13.00 - 14.00			Grafika Komputer - akselerasi						Pemrograman Berbasis Kerangka Kerja			Manajemen Basis Data - IUP				
	14.00 - 15.00			Sem 5/3 SKS/SA						Sem 6/3 SKS/RJ			Sem 4/3 SKS/MN - KR				
	15.00 - 16.00	MATEMATIKA 2			Data Mining	Sistem Operasi	Perancangan dan Analisis Algoritma	Teori Graf dan Otomata	Perancangan dan Analisis Algoritma - EN				Keamanan Informasi dan Jaringan - IUP				
	16.00 - 17.00	SEM 2			Sem 6/3 SKS/DA	Sem 4/4 SKS/WS	Sem 4/4 SKS/AB	Sem 6/3 SKS/VH	Sem 4/4 SKS/IS				Sem 7/3 SKS/BS			 	Topik Dalam Penjaminan Kualitas Perangkat Lunak - P
	17.00 - 18.00															 	Sem 2/3 SKS/ST
	18.00 - 19.00															Metodologi Penelitian - P	Topik Dalam Pengembangan Game, Realitas Virtual, dan Realitas Augmentasi - P
	19.00 - 20.30															Sem 2/3 SKS/AS	Sem 2/3 SKS/HF
																	
JUM'AT	07.00 - 08.00	BAHASA INGGRIS		Big Data	Dasar Pemrograman	Perancangan dan Analisis Algoritma - EN		Probabilitas dan Statistik	Rekayasa Kebutuhan				Matematika Diskrit - IUP			Metodologi Penelitian - A	
	08.00 - 09.00	SEM 2		Sem 8/3 SKS/MN	Sem 1/4 SKS/YP	Sem 4/4 SKS/IS		Sem 4/3 SKS/AW	Sem 6/4 SKS/DO				Sem 1/3 SKS/Daz-Math			Sem 2/3 SKS/BA	
	09.00 - 10.00	AGAMA NON ISLAM					Analisis Data Multivariat		Matematika Diskrit	Arsitektur Perangkat Lunak			Pemrograman Berbasis Kerangka Kerja - IUP				
	10.00 - 11.00	SEM 2	AGAMA NON ISLAM				Sem 6/3 SKS/AS		Sem 1/3 SKS/VH	Sem 6/3 SKS/RJ			Sem 6/3 SKS/MN				
	11.00 - 12.00		SEM 2														
	12.00 - 13.00																
	13.00 - 14.00				Struktur Data	Kecerdasan Buatan	Teori Graf dan Otomata	Probabilitas dan Statistik					Grafika Komputer IUP - akselerasi			Topik Dalam Grafika Komputer - DH	
	14.00 - 15.00				Sem 2/3 SKS/YP	Sem 4/3 SKS/DA	Sem 6/3 SKS/VH	Sem 4/3 SKS/AS					Sem 5/3 SKS/AY			Sem 2/3 SKS/DH	
	15.00 - 16.00			Sistem Digital						Rekayasa Kebutuhan							
	16.00 - 17.00			Sem 2/3 SKS/WS						Sem 6/4 SKS/UY							
	17.00 - 18.00																
	18.00 - 19.00															Metodologi Penelitian - P	Rekayasa Perangkat Lunak - P
	19.00 - 20.30															Sem 2/3 SKS/ DP	Sem 1/3 SKS/UY`, dosen);
```
- Lalu anda dapat menggunakan [Command](#command) yang ada

# Command
```
- subject
- semester
- sks
- day
- lecturer
- hour
- start
```

# Implementasi
Menggunakan syntax sebagai berikut: 
```js
courses.filter(course => (isi data yang ingin dicari / Kondisi) && (bisa diisi kondisi sebanyak mungkin))

Ex: 
course.filter(coursed => coursed.day=="Selasa" && coursed.start < 10 && coursed.semester==4)
```

### Example:

day
```
courses.filter(course => course.day="Selasa");
```

semester
```
courses.filter(course => course.semester=4);
```

start
```
courses.filter(course => course.start < 10)
```


## Result 
![image](https://user-images.githubusercontent.com/92671053/215085420-4703a25e-bc6f-4f4c-bc73-c35f3acb78c0.png)
