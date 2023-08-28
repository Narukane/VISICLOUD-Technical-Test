@extends('layouts.app')

@section('content')
<div class="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow">
    <h1 class="text-2xl font-semibold mb-4">Result</h1>
    <div>
        <label for="kembalian" class="block text-sm font-medium text-gray-700">Kembalian</label>
        <input type="number" id="kembalian" class="mt-1 p-2 border rounded-md w-full" value="{{ $totalKembalian }}" min="0" disabled>
    </div>
    <h1 class="text-2xl font-semibold mb-4">Pecahan Kembalian</h1>
    <div class="grid grid-cols-2 gap-4">
        @foreach ($pecahanKembalian as $pecahan => $qty)
            <div>
                <label for="kembalian_{{ $pecahan }}" class="block text-sm font-medium text-gray-700">{{ $pecahan }} IDR</label>
                <input type="number"  id="kembalian_{{ $pecahan }}" class="mt-1 p-2 border rounded-md w-full" value="{{ $qty}}" min="0" disabled>
            </div>
        @endforeach
    </div>
    <h1 class="text-2xl font-semibold mb-4">Sisa Pecahan Aulia</h1>
    <div class="grid grid-cols-2 gap-4">
        @foreach ($jumlahPecahan as $pecahan => $qty)
            <div>
                <label for="sisa_{{ $pecahan }}" class="block text-sm font-medium text-gray-700">{{ $pecahan }} IDR</label>
                <input type="number"  id="sisa_{{ $pecahan }}" class="mt-1 p-2 border rounded-md w-full" value="{{ $qty}}" min="0" disabled>
            </div>
        @endforeach
    </div>
</div>
@endsection