import Image from "next/image";

export default function TabMenunggu() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <Image
        src="/image/logo2.png"
        alt="Pesanan menunggu"
        width={160}
        height={160}
        priority
      />

      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        Pesanan Menunggu
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        Pesanan sedang menunggu konfirmasi.
      </p>
    </div>
  );
}
