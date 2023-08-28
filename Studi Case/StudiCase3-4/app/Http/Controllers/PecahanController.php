<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PecahanController extends Controller
{
    public function showForm()
    {
        $denominations = [500,1000, 2000, 5000, 10000, 20000, 50000, 100000];
        return view('pecahan.form', compact('denominations'));
    }

    public function processForm(Request $request)
    {
        $jumlahPecahan = $request->input('denominations');
        $totalBelanja = $request->input('total_belanja');
        $jumlahPecahanBayar = $request->input('denominations_paid'); 
        
        $kembalian = 0;
        foreach ($jumlahPecahanBayar as $pecahan => $jumlah) {
            $kembalian += $pecahan * $jumlah;
        }
        $kembalian -= $totalBelanja;
        $totalKembalian = $kembalian;
        
        $sortedPecahanKeys = array_keys($jumlahPecahan);
        usort($sortedPecahanKeys, function ($a, $b) {
            return $b - $a;
        });

        $pecahanKembalian = [];
        foreach ($sortedPecahanKeys as $pecahan) {
            $pecahan = (int)$pecahan;
            while ($kembalian >= $pecahan && $jumlahPecahan[$pecahan] > 0) {
                $pecahanKembalian[$pecahan] = ($pecahanKembalian[$pecahan] ?? 0) + 1;
                $kembalian -= $pecahan;
                $jumlahPecahan[$pecahan]--;
            }
        }

        foreach ($jumlahPecahanBayar as $pecahan => $jumlah) {
            $jumlahPecahan[$pecahan] = ($jumlahPecahan[$pecahan] ?? 0) + $jumlah;
        }

        // $result = [
        //     'kembalian' => $totalKembalian,
        //     'pecahanKembalian' => $pecahanKembalian,
        //     'sisaPecahanAulia' => $jumlahPecahan
        // ];
        
        return view('pecahan.result', compact('totalKembalian','pecahanKembalian', 'jumlahPecahan'));
    }
}
