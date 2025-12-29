"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserType = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

export default function AkunPage() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="rounded-xl bg-white">
      {/* Header */}
      <div className="px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Data Akun</h2>
        <div className="mt-2 h-px w-full bg-slate-300" />
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-5 max-w-md">
        {/* Nama Lengkap */}
        <div className="space-y-2">
          <Label className="text-sm text-slate-700">Nama Lengkap</Label>
          <Input
            value={user?.name ?? ""}
            disabled
            className="rounded-lg bg-slate-50"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-sm text-slate-700">Email</Label>
          <Input
            type="email"
            value={user?.email ?? ""}
            disabled
            className="rounded-lg bg-slate-50"
          />
        </div>

        {/* Nomor Handphone */}
        <div className="space-y-2">
          <Label className="text-sm text-slate-700">Nomor Handphone</Label>
          <Input
            type="tel"
            value={user?.phone ?? "-"}
            disabled
            className="rounded-lg bg-slate-50"
          />
        </div>
      </div>
    </div>
  );
}
