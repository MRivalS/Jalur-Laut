"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UbahPasswordPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulasi submit
    setTimeout(() => {
      setLoading(false);
      alert("Password berhasil diubah");
    }, 1000);
  };

  return (
    <div className="rounded-xl bg-white">
      {/* Header */}
      <div className="px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">
          Ubah Kata Sandi
        </h2>

        {/* Garis bawah */}
        <div className="mt-2 h-px w-full bg-slate-300" />
      </div>

      {/* Content */}
      <form onSubmit={handleSubmit} className="max-w-md space-y-5 px-4 py-6">
        {/* Password Lama */}
        <div className="space-y-1">
          <Label className="text-sm">Kata Sandi Lama</Label>
          <Input
            type="password"
            placeholder="Masukkan kata sandi lama"
            required
          />
        </div>

        {/* Password Baru */}
        <div className="space-y-1">
          <Label className="text-sm">Kata Sandi Baru</Label>
          <Input
            type="password"
            placeholder="Masukkan kata sandi baru"
            required
          />
        </div>

        {/* Konfirmasi Password */}
        <div className="space-y-1">
          <Label className="text-sm">Konfirmasi Kata Sandi Baru</Label>
          <Input
            type="password"
            placeholder="Ulangi kata sandi baru"
            required
          />
        </div>

        {/* Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="h-11 rounded-full bg-blue-600 px-6 text-sm font-semibold hover:bg-blue-700"
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </form>
    </div>
  );
}
