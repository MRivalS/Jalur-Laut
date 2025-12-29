import SearchHeader from "./components/search-header";

export default function CariTiketPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      {/* Ringkasan Pencarian */}
      <SearchHeader />

      {/* Tabel Tiket */}
      <div className="overflow-hidden rounded-xl border bg-white">
        {/* Header Tabel */}
        <div className="grid grid-cols-6 gap-4 border-b px-6 py-3 text-sm font-semibold text-slate-700">
          <div>Kapal</div>
          <div>Berangkat</div>
          <div></div>
          <div>Sampai</div>
          <div>Lama Perjalanan</div>
          <div className="text-right">Total Harga</div>
        </div>

        {/* Body Kosong */}
        <div className="px-6 py-12 text-center text-sm text-slate-500">
          Data tiket akan ditampilkan di sini
        </div>
      </div>
    </div>
  );
}
