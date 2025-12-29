import Image from "next/image";

export default function PembatalanPage() {
  return (
    <div className="rounded-xl bg-white">
      {/* Header */}
      <div className="px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Daftar Pembatalan Tiket
        </h2>

        {/* Garis bawah */}
        <div className="mt-2 h-px w-full bg-slate-300" />
      </div>

      {/* Empty State */}
      <div className="flex h-[320px] flex-col items-center justify-center text-center">
        <Image
          src="/image/logo2.png"
          alt="Tidak ada pembatalan tiket"
          width={120}
          height={120}
          priority
        />

        <p className="mt-4 text-sm font-medium text-slate-700">
          Tidak ada pembatalan tiket
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Anda belum pernah mengajukan pembatalan tiket
        </p>
      </div>
    </div>
  );
}
