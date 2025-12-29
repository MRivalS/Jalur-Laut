import Image from "next/image";

export default function BeritaPage() {
  const berita: any[] = []; // nanti ganti dari API

  return (
    <div className="rounded-xl bg-white">
      {/* Header */}
      <div className="px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Semua Berita</h2>

        {/* Garis bawah */}
        <div className="mt-2 h-px w-full bg-slate-300" />
      </div>

      {/* Content */}
      {berita.length === 0 ? (
        <div className="flex h-[320px] flex-col items-center justify-center text-center">
          <Image
            src="/image/logo2.png"
            alt="Tidak ada berita"
            width={120}
            height={120}
            priority
          />

          <p className="mt-4 text-sm font-medium text-slate-700">
            Tidak ada berita!
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Informasi terbaru akan muncul di sini
          </p>
        </div>
      ) : (
        <div className="space-y-4 px-4 py-4">
          {berita.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-slate-200 p-4 hover:bg-slate-50 transition"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
