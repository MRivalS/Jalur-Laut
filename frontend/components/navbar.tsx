"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { User } from "lucide-react";

type UserType = {
  id: string;
  name: string;
  email: string;
};

const Navbar: FC = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/image/logo2.png"
              alt="Jalur Laut"
              width={55}
              height={55}
            />
            <span className="text-xl font-semibold text-gray-800">
              Jalur Laut
            </span>
          </Link>

          {/* Right Menu */}
          <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
            {/* Selalu tampil */}
            <Link href="/booking" className="hover:text-blue-600">
              Cek Booking
            </Link>

            {/* TAMPIL HANYA JIKA SUDAH LOGIN */}
            {user && (
              <>
                <span>|</span>
                <Link href="/dashboard" className="hover:text-blue-600">
                  Cek Pemesanan
                </Link>
              </>
            )}

            <span>|</span>

            {/* Login / User */}
            {user ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span>{user.name}</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-2 hover:text-blue-600"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border">
                  <User className="h-4 w-4" />
                </div>
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
