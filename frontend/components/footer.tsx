import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3">
              <Image
                src="/image/logo2.png"
                alt="Jalur Laut"
                width={44}
                height={44}
              />
              <span className="text-lg font-semibold text-gray-900">
                Jalur Laut
              </span>
            </Link>

            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              Platform booking tiket kapal ferry terpercaya di Indonesia. Pesan
              tiket mudah, cepat, dan aman.
            </p>

            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-blue-500 hover:text-blue-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Layanan
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {[
                "Cari Tiket",
                "Jadwal Keberangkatan",
                "Cek Pemesanan",
                "Ubah/Batalkan Tiket",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="transition hover:text-blue-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Informasi
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              {[
                "Tentang Kami",
                "Syarat & Ketentuan",
                "Kebijakan Privasi",
                "FAQ",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="transition hover:text-blue-600">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-900">
              Hubungi Kami
            </h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-blue-600" />
                Jl. Laut No. 123, Jakarta Utara 14440
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-blue-600" />
                +62 21 1234 5678
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-blue-600" />
                info@jalurlaut.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 md:flex-row">
          <p>© 2025 Jalur Laut. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-600">
              Syarat Layanan
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="hover:text-blue-600">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
