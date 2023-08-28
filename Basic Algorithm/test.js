function hitungKembalianGreedy(jumlahPecahan, totalBelanja, jumlahPecahanBayar) {
    let kembalian = 0;
    for (const pecahan in jumlahPecahanBayar) {
        kembalian += pecahan * jumlahPecahanBayar[pecahan];
    }
    kembalian -= totalBelanja;
    const totalKembalian = kembalian;

    let pecahanKembalian = {};
    for (const pecahan of Object.keys(jumlahPecahan).sort((a, b) => b - a)) {
        while (kembalian >= pecahan && jumlahPecahan[pecahan] > 0) {
            pecahanKembalian[pecahan] = (pecahanKembalian[pecahan] || 0) + 1;
            kembalian -= pecahan;
            jumlahPecahan[pecahan]--;
        }
    }

    // Menambahkan pecahan pembeli ke pecahan yang dimiliki
    for (const pecahan in jumlahPecahanBayar) {
        jumlahPecahan[pecahan] = (jumlahPecahan[pecahan] || 0) + jumlahPecahanBayar[pecahan];
    }

    // Menampilkan hasil
    console.log("Kembalian:", totalKembalian);
    console.log("Pecahan Kembalian:", pecahanKembalian);
    console.log("Pecahan Sisa:", jumlahPecahan);

    return { kembalian, pecahanKembalian, jumlahPecahan };
}

// Input jumlah pecahan yang dimiliki
const jumlahPecahan = {
    10000: 2,
    1000: 5,
    2000: 0
};

// Input total belanja
const totalBelanja = 7000;

// Input pecahan yang dibayar oleh pembeli
const jumlahPecahanBayar = {
    5000: 2,
};

// Menghitung dan menampilkan hasil menggunakan pendekatan greedy
hitungKembalianGreedy(jumlahPecahan, totalBelanja, jumlahPecahanBayar);