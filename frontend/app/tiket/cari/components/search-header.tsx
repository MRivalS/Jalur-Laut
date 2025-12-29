export default function SearchHeader() {
  return (
    <div className="rounded-xl bg-white px-6 py-4 shadow-sm">
      {/* Baris Atas */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500">Pelabuhan Asal</p>
          <p className="text-sm font-semibold text-slate-900">SURABAYA</p>
        </div>

        <div className="text-xl font-bold">→</div>

        <div className="text-right">
          <p className="text-xs text-slate-500">Pelabuhan Tujuan</p>
          <p className="text-sm font-semibold text-slate-900">
            AMPENAN / LEMBAR
          </p>
        </div>
      </div>

      {/* Detail */}
      <div className="mt-3 flex flex-wrap gap-6 text-xs text-slate-600">
        <div>November 2025</div>
        <div>1 Dewasa</div>
        <div>0 Bayi (0–23 Bulan)</div>
      </div>
    </div>
  );
}
