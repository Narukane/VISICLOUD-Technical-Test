@extends('layouts.app')

@section('content')
<div class="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow">
    <h1 class="text-2xl font-semibold mb-4">Pecahan Uang Aulia</h1>
    <form action="{{ route('pecahan.process') }}" method="post">
        @csrf
        <div class="grid grid-cols-2 gap-4">
            @foreach ($denominations as $denomination)
                <div>
                    <label for="denomination_{{ $denomination }}" class="block text-sm font-medium text-gray-700">{{ $denomination }} IDR</label>
                    <input type="number" name="denominations[{{ $denomination }}]" id="denomination_{{ $denomination }}" class="mt-1 p-2 border rounded-md w-full" value="0" min="0">
                </div>
            @endforeach
        </div>
        <h1 class="text-2xl font-semibold mb-4">Transaksi Pembeli</h1>
        <div>
            <label for="total_belanja" class="block text-sm font-medium text-gray-700">Total Belanja Pembeli</label>
            <input type="number" name="total_belanja" id="total_belanja" class="mt-1 p-2 border rounded-md w-full" value="0" min="0">
        </div>
        <h1 class="text-2xl font-semibold mb-4">Pecahan Uang Pembeli</h1>
        <div class="grid grid-cols-2 gap-4">
            @foreach ($denominations as $denomination)
                <div>
                    <label for="denomination_paid_{{ $denomination }}" class="block text-sm font-medium text-gray-700">{{ $denomination }} IDR</label>
                    <input type="number" name="denominations_paid[{{ $denomination }}]" id="denomination_paid_{{ $denomination }}" class="mt-1 p-2 border rounded-md w-full" value="0" min="0">
                </div>
            @endforeach
        </div>
        <button type="submit" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
    </form>
</div>
@endsection