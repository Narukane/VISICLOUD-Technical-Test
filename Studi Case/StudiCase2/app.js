const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/denominations', (req, res) => {
    const denominations = [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000];
    res.json(denominations);
});

app.post('/calculate', (req, res) => {
    const { jumlahPecahan, totalBelanja, jumlahPecahanBayar } = req.body;
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
    
    for (const pecahan in jumlahPecahanBayar) {
        jumlahPecahan[pecahan] = (jumlahPecahan[pecahan] || 0) + jumlahPecahanBayar[pecahan];
    }

    const result = {
        kembalian: totalKembalian,
        pecahanKembalian,
        sisaPecahanAulia : jumlahPecahan
    };

    res.json(result);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});