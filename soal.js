// =================================================================
// BANK SOAL SUMATIF MATEMATIKA KELAS 7: BILANGAN RASIONAL & ARITMETIKA SOSIAL
// Terdapat 20 Soal (PG Tunggal, PG Benar-Salah, PG Kompleks, Uraian)
// Tahun Ajaran 2026/2027 | Kurikulum Merdeka
// =================================================================

const bankSoal = [
    // =================================================================
    // BAGIAN 1: 5 SOAL PILIHAN GANDA TUNGGAL (PG Tunggal)
    // =================================================================
    {
        id: "pg1",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal",
        pertanyaan: "Bentuk pecahan biasa paling sederhana dari bilangan desimal $0{,}375$ adalah ....",
        opsi: ["$\\frac{3}{5}$", "$\\frac{3}{8}$", "$\\frac{7}{20}$", "$\\frac{15}{40}$"],
        jawabanBenar: 1 // B. 3/8
    },
    {
        id: "pg2",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal",
        pertanyaan: "Diberikan empat bilangan rasional: $P = -\\frac{5}{8}$; $Q = -0{,}65$; $R = -\\frac{3}{4}$; $S = -0{,}6$. Urutan bilangan tersebut dari yang nilainya terkecil hingga terbesar adalah ....",
        opsi: ["R, Q, P, S", "Q, R, S, P", "R, P, Q, S", "P, S, Q, R"],
        jawabanBenar: 0 // A. R, Q, P, S
    },
    {
        id: "pg3",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal",
        pertanyaan: "Hasil dari kalkulasi pecahan campuran $2\\frac{1}{3} - 1\\frac{3}{4} + \\frac{5}{6}$ adalah ....",
        opsi: ["$1\\frac{5}{12}$", "$1\\frac{1}{2}$", "$1\\frac{7}{12}$", "$2\\frac{1}{12}$"],
        jawabanBenar: 0 // A. 1 5/12
    },
    {
        id: "pg4",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal",
        pertanyaan: "Ibu mempunyai persediaan gula sebanyak $4{,}5\\text{ kg}$. Sebanyak $\\frac{1}{3}$ bagian digunakan untuk membuat kue, dan $0{,}75\\text{ kg}$ digunakan untuk membuat minuman. Sisa gula persediaan Ibu adalah .... kg.",
        opsi: ["2,25", "2,50", "2,75", "3,00"],
        jawabanBenar: 0 // A. 2,25
    },
    {
        id: "pg5",
        tipe: "pg_tunggal",
        label: "Pilihan Ganda Tunggal",
        pertanyaan: "Suhu udara di kota London pada pukul 06.00 adalah $-3{,}4^\\circ\\text{C}$. Selama 6 jam berikutnya suhu naik sebesar $1{,}8^\\circ\\text{C}$ per jam. Namun dari pukul 12.00 hingga 18.00 suhu turun sebesar $2{,}25^\\circ\\text{C}$ per jam. Berapakah suhu udara di kota London pada pukul 18.00?",
        opsi: ["-6,1 °C", "-6,0 °C", "5,4 °C", "-5,7 °C"],
        jawabanBenar: 0 // A. -6,1 °C
    },

    // =================================================================
    // BAGIAN 2: 5 SOAL PILIHAN GANDA BENAR / SALAH (PG Benar/Salah)
    // =================================================================
    {
        id: "bs1",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah",
        pertanyaan: "<b>Pernyataan:</b><br>Semua bilangan bulat (integer) seperti $-5$, $0$, dan $12$ dapat dinyatakan sebagai bilangan rasional bentuk $\\frac{a}{b}$ dengan $b = 1$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },
    {
        id: "bs2",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah",
        pertanyaan: "<b>Pernyataan:</b><br>Pernyataan matematika: $-\\frac{3}{4} > -\\frac{5}{6}$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },
    {
        id: "bs3",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah",
        pertanyaan: "<b>Pernyataan:</b><br>Pada garis bilangan, posisi bilangan desimal $-0{,}45$ berada di sebelah kanan dari pecahan $-\\frac{3}{8}$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 1 // SALAH
    },
    {
        id: "bs4",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah",
        pertanyaan: "<b>Pernyataan:</b><br>Jika $3\\frac{1}{2}\\text{ kg}$ gula dibagi rata ke dalam 7 kantong plastik, maka setiap kantong plastik berisi tepat $0{,}5\\text{ kg}$ gula.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },
    {
        id: "bs5",
        tipe: "pg_benar_salah",
        label: "Pilihan Ganda Benar / Salah",
        pertanyaan: "<b>Pernyataan:</b><br>Seorang pedagang membeli barang seharga $\\text{Rp}80.000{,}00$ dan ingin memperoleh untung $25\\%$, maka barang tersebut harus dijual dengan harga $\\text{Rp}100.000{,}00$.",
        opsi: ["BENAR", "SALAH"],
        jawabanBenar: 0 // BENAR
    },

    // =================================================================
    // BAGIAN 3: 5 SOAL PILIHAN GANDA KOMPLEKS (PG Kompleks)
    // =================================================================
    {
        id: "pgk1",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks",
        pertanyaan: "Manakah di antara bilangan-bilangan berikut yang TERMASUK dalam himpunan bilangan rasional? <i>(Pilih semua yang benar)</i>",
        opsi: [
            { teks: "$0{,}141414\\dots$", benar: "true" },
            { teks: "$-\\frac{7}{9}$", benar: "true" },
            { teks: "$\\sqrt{7}$", benar: "false" },
            { teks: "$\\sqrt{16}$", benar: "true" }
        ]
    },
    {
        id: "pgk2",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks",
        pertanyaan: "Manakah bentuk-bentuk nilai di bawah ini yang SENILAI dengan pecahan $\\frac{3}{4}$? <i>(Pilih semua yang benar)</i>",
        opsi: [
            { teks: "$0{,}75$", benar: "true" },
            { teks: "$75\\%$", benar: "true" },
            { teks: "$\\frac{9}{12}$", benar: "true" },
            { teks: "$0{,}750750\\dots$", benar: "false" }
        ]
    },
    {
        id: "pgk3",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks",
        pertanyaan: "Diberikan empat perbandingan bilangan rasional berikut. Manakah perbandingan yang bernilai BENAR? <i>(Pilih semua yang benar)</i>",
        opsi: [
            { teks: "$-\\frac{2}{3} < -\\frac{1}{2}$", benar: "true" },
            { teks: "$-0{,}8 > -0{,}75$", benar: "false" },
            { teks: "$\\frac{5}{8} = 0{,}625$", benar: "true" },
            { teks: "$-\\frac{3}{5} > -\\frac{4}{5}$", benar: "true" }
        ]
    },
    {
        id: "pgk4",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks",
        pertanyaan: "Manakah dari operasi hitung bilangan rasional berikut yang menghasilkan nilai BENAR? <i>(Pilih semua yang benar)</i>",
        opsi: [
            { teks: "$\\frac{3}{5} + 0{,}4 = 1{,}0$", benar: "true" },
            { teks: "$1\\frac{1}{2} \\times (-0{,}8) = -1{,}2$", benar: "true" },
            { teks: "$(-\\frac{3}{4}) \\div (-0{,}25) = 3$", benar: "true" },
            { teks: "$2{,}4 - 3\\frac{1}{2} = 1{,}1$", benar: "false" }
        ]
    },
    {
        id: "pgk5",
        tipe: "pg_kompleks",
        label: "Pilihan Ganda Kompleks",
        pertanyaan: "Pak Ahmad membagi warisan tanah seluas $1.200\\text{ m}^2$. Anak pertama mendapat $\\frac{3}{8}$ bagian, anak kedua mendapat $0{,}3$ bagian, dan sisanya untuk anak ketiga. Pernyataan yang BENAR adalah: <i>(Pilih semua yang benar)</i>",
        opsi: [
            { teks: "Anak pertama menerima luas tanah sebesar $450\\text{ m}^2$.", benar: "true" },
            { teks: "Anak kedua menerima luas tanah sebesar $360\\text{ m}^2$.", benar: "true" },
            { teks: "Anak ketiga menerima bagian terbesar yaitu $450\\text{ m}^2$.", benar: "false" },
            { teks: "Luas tanah anak ketiga adalah $390\\text{ m}^2$.", benar: "true" }
        ]
    },

    // =================================================================
    // BAGIAN 4: 5 SOAL URAIAN (Essay)
    // =================================================================
    {
        id: "ur1",
        tipe: "uraian",
        label: "Soal Uraian (Informasi - Pertanyaan - Jawaban - Kesimpulan)",
        pertanyaan: "Urutkan bilangan-bilangan rasional berikut dari yang nilainya TERKECIL hingga TERBESAR, lalu gambarkan letak taksirannya pada garis bilangan tunggal:<br><br>$-0{,}8$ ; $\\frac{3}{4}$ ; $-\\frac{1}{2}$ ; $0{,}35$ ; $60\\%$"
    },
    {
        id: "ur2",
        tipe: "uraian",
        label: "Soal Uraian (Informasi - Pertanyaan - Jawaban - Kesimpulan)",
        pertanyaan: "Hitunglah hasil akhir dari operasi campuran bilangan rasional berikut dalam bentuk pecahan paling sederhana:<br><br>$$\\left[ 3\\frac{1}{3} - \\left(1\\frac{1}{2} \\times 0{,}8\\right) \\right] \\div \\left(-\\frac{2}{5}\\right)$$"
    },
    {
        id: "ur3",
        tipe: "uraian",
        label: "Soal Uraian (Informasi - Pertanyaan - Jawaban - Kesimpulan)",
        pertanyaan: "Dalam sebuah laboratorium penelitian biologi, suhu ruang pendingin awal dicatat $-6{,}5^\\circ\\text{C}$. Petugas memasukkan bahan uji sehingga suhu turun $0{,}4^\\circ\\text{C}$ setiap 3 menit. Jika bahan tersebut didiamkan selama 15 menit, lalu listrik padam sehingga suhu naik $2{,}2^\\circ\\text{C}$, berapakah suhu akhir ruang pendingin sekarang?"
    },
    {
        id: "ur4",
        tipe: "uraian",
        label: "Soal Uraian (Informasi - Pertanyaan - Jawaban - Kesimpulan)",
        pertanyaan: "Ibu Rina memiliki persediaan tepung terigu sebanyak $15{,}5\\text{ kg}$. Ibu menggunakan $\\frac{2}{5}$ bagian tepung untuk membuat roti nenas dan $3{,}25\\text{ kg}$ untuk membuat gorengan. Sisanya dimasukkan ke dalam beberapa kantong plastik kecil berkapasitas masing-masing $0{,}375\\text{ kg}$. Berapa banyak kantong plastik kecil yang berhasil diisi tepung secara penuh?"
    },
    {
        id: "ur5",
        tipe: "uraian",
        label: "Soal Uraian (Informasi - Pertanyaan - Jawaban - Kesimpulan)",
        pertanyaan: "Seorang karyawan swasta menerima gaji bulanan sebesar $\\text{Rp}8.000.000{,}00$. Penggunaan gaji diatur sebagai berikut: $\\frac{3}{8}$ bagian untuk kebutuhan pokok rumah tangga, $0{,}20$ bagian untuk cicilan rumah, $15\\%$ untuk tabungan dan investasi, serta sisanya untuk dana darurat. Berapakah nominal uang (dalam Rupiah) yang dialokasikan khusus untuk dana darurat tersebut?"
    }
];
