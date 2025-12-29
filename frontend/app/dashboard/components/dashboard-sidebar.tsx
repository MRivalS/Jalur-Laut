"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const menus = [
  { label: "Akun", href: "/dashboard/akun" },
  { label: "Pesanan Saya", href: "/dashboard" },
  { label: "Berita", href: "/dashboard/berita" },
  { label: "Promo", href: "/dashboard/promo" },
  { label: "Daftar Pembatalan Tiket", href: "/dashboard/pembatalan" },
  { label: "Ubah Kata Sandi", href: "/dashboard/ubah-password" },
];

export default function DashboardSidebar() {
  const router = useRouter();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Yakin ingin keluar dari akun ini?"
    );

    if (!confirmLogout) return;

    // hapus akun yang login
    localStorage.removeItem("user");

    // redirect ke login
    router.push("/login");
  };

  return (
    <aside className="w-64 rounded-2xl bg-white p-4">
      <nav className="space-y-2">
        {/* Menu biasa */}
        {menus.map((menu) => (
          <Link
            key={menu.label}
            href={menu.href}
            className="block rounded-lg px-4 py-2 text-sm hover:bg-sky-100"
          >
            {menu.label}
          </Link>
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="block w-full text-left rounded-lg px-4 py-2 text-sm text-red-600 hover:bg-red-100"
        >
          Keluar
        </button>
      </nav>
    </aside>
  );
}
