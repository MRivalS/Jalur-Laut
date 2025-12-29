export default function SearchSummary() {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <h2 className="text-sm font-semibold text-slate-900">Pencarian Tiket</h2>

      <div className="mt-2 text-sm text-slate-600">
        <p>
          Rute: <span className="font-medium">Merak → Bakauheni</span>
        </p>
        <p>
          Tanggal: <span className="font-medium">20 Desember 2025</span>
        </p>
        <p>
          Penumpang: <span className="font-medium">1 Dewasa</span>
        </p>
      </div>
    </div>
  );
}
