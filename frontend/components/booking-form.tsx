"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Clock, Users, Car, Search } from "lucide-react";

export default function BookingForm() {
  const router = useRouter();

  const handleSearch = () => {
    // Arahkan ke halaman pencarian tiket
    router.push("/tiket/cari");
  };

  return (
    <Card className="relative z-20 rounded-2xl bg-white shadow-xl">
      <CardContent className="p-6 md:p-8">
        <h2 className="mb-1 text-xl font-semibold text-slate-900">
          Cari Tiket Anda
        </h2>
        <p className="mb-6 text-sm text-slate-500">
          Atur jadwal kedatangan Anda di pelabuhan
        </p>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Pelabuhan Asal */}
          <div className="space-y-2">
            <Label>Pelabuhan Asal</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <select className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Pilih Asal</option>
              </select>
            </div>
          </div>

          {/* Jenis Layanan */}
          <div className="space-y-2">
            <Label>Jenis Layanan</Label>
            <select className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
              <option>Regular Ferry</option>
            </select>
          </div>

          {/* Tanggal */}
          <div className="space-y-2">
            <Label>Tanggal Keberangkatan</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <input
                type="date"
                className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>

          {/* Jam */}
          <div className="space-y-2">
            <Label>Jam Keberangkatan</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <select className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Pilih Jam</option>
              </select>
            </div>
          </div>

          {/* Pelabuhan Tujuan */}
          <div className="space-y-2">
            <Label>Pelabuhan Tujuan</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <select className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Pilih Tujuan</option>
              </select>
            </div>
          </div>

          {/* Berkendara */}
          <div className="space-y-2">
            <Label>Berkendara Atau Tidak?</Label>
            <div className="relative">
              <Car className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <select className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>Tidak Berkendara</option>
              </select>
            </div>
          </div>

          {/* Penumpang */}
          <div className="space-y-2">
            <Label>Jumlah Penumpang</Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-600" />
              <select className="h-11 w-full rounded-lg border border-slate-300 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600">
                <option>1 Penumpang</option>
              </select>
            </div>
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 lg:col-span-3">
            <Button
              onClick={handleSearch}
              className="h-12 w-full rounded-xl bg-yellow-400 font-semibold text-slate-900 hover:bg-yellow-500"
            >
              <Search className="mr-2 h-4 w-4" />
              CARI JADWAL
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
