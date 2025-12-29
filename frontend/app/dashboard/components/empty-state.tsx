import Image from "next/image";
import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Image
        src="/image/logo2.png"
        alt="Tidak ada pesanan"
        width={160}
        height={160}
        priority
      />

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        Tidak ada pesanan!
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Anda belum memiliki pesanan sama sekali
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/booking"
          className="rounded-full bg-yellow-400 px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-500 transition"
        >
          Pesan Sekarang
        </Link>

        <Link
          href="/dashboard/berita"
          className="rounded-full border border-slate-300 px-6 py-2 text-sm hover:bg-slate-50 transition"
        >
          Lihat Riwayat
        </Link>
      </div>
    </div>
  );
}
